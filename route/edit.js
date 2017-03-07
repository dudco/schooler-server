module.exports = init;

function init(app, Users){
	//edit 학교
    app.post('/edit/school', (req, res) => {
		var school = req.body.school
		var user = req.body.token
		
		Users.update({'token' : req.body.token}, { $set : {school : req.body.school}}, (err) => {
			if(err){
				console.log("User find err in edit")
				throw err
			}else{
				Users.findOne({'token' : req.body.token}, (err, user)=>{
					res.send(200, user)
				})
			}
		})	
		//console.log("user : ", user)
    })
	//edit 전화번호
	app.post('/edit/phone', (req, res) => {
        var phone = req.body.phone
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {phone : req.body.phone}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })

	//edit 거주지
	app.post('/edit/location', (req, res) => {
        var location = req.body.location
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {location : req.body.location}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })

	//edit 취미
	app.post('/edit/hoby', (req, res) => {
        var hoby = req.body.hoby
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {hoby : req.body.hoby}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })

	//edit 장래희망
    app.post('/edit/hope', (req, res) => {
        var hope = req.body.hope
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {hope : req.body.hope}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })
	
	//edit 이메일
    app.post('/edit/email', (req, res) => {
        var email = req.body.email
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {email : req.body.email}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })

	//edit 동아
    app.post('/edit/club', (req, res) => {
        var club = req.body.club
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {club : req.body.club}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })
	
	//edit 직급
    app.post('/edit/rank', (req, res) => {
        var rank = req.body.rank
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {rank : req.body.rank}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })
	app.post('/edit/nfc', (req, res) => {
		Users.update({'token' : req.body.token}, {$set : {nfc : req.body.nfc}}, (err) => {
			if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
		})
	})
    app.post('/edit/birth', (req, res) => {
        var birth = req.body.birth
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {birth : req.body.birth}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })	
    app.post('/edit/subject', (req, res) => {
        var subject = req.body.subject
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {subject : req.body.subject}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })
    app.post('/edit/name', (req, res) => {
        var name = req.body.name
        var user = req.body.token

        Users.update({'token' : req.body.token}, { $set : {name : req.body.name}}, (err) => {
            if(err){
                console.log("User find err in edit")
                throw err
            }else{
                Users.findOne({'token' : req.body.token}, (err, user)=>{
                    res.send(200, user)
                })
            }
        })
        //console.log("user : ", user)
    })
}
