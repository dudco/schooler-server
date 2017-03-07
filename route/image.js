module.exports = init;

function init(app, Users){
	var multer = require('multer')
	var storage = multer.diskStorage({
  		destination: function (req, file, cb) {
    		cb(null,__dirname + '/../public/images')
  		},filename: function (req, file, cb) {
    		cb(null, file.originalname)
  		}
	})
	var upload = multer({
		storage: storage
	});

	var file_upload = multer({
		storage: storage
	}).single('file')
	
	app.post('/file/up/', (req, res) => {
		file_upload(req, res, (err) => {
			if(err){
				res.send(400, {"message" : "err occurred"})
				return;
			}
		})
		res.send(200, req.file)
	})
	
	app.post('/image/up/', upload.single('image'), (req, res) => {
		console.log(req.param('token'))
		Users.findOne({'token' : req.param('token')}, (err, user) =>{
			if(err){
				console.log("User find err in image upload")
				throw err
			}
			if(user){
				user.namecard = req.file.filename
				user.save((err, upResult)=>{
					if(err){
						console.log("user save err in image")
						throw err
					}
					if(upResult) res.send(200, upResult)
					else res.send(400, {'message' : "err"})
				})
			}else{
				res.send(400, {'message' : "user not found"})
			}
		})
	})

	app.get('/image/down', (req,res)=>{
		res.sendFile('/home/dudco/d3s/public/images/' + req.param('image'))
//		Users.findOne({'token' : req.param('token')}, (err, user) => {
//			if(err){
//				console.log("User find err in image down")
//				throw err
//			}
//			if(user){
//				res.sendFile('/home/dudco/d3s/public/images/' + user.namecard)
//			}else{
//				res.send(400,{'message' : "user not found"})
//			}
//		})	
	})
}
