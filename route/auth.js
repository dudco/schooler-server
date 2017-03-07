module.exports = init;

function init(app, Users){
    var passport = require('passport')
    var FacebookTokenStrategy = require('passport-facebook-token')
	var randomString = require('randomstring')	

    app.use(passport.initialize())
    app.use(passport.session())
    
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
    
    passport.use(new FacebookTokenStrategy({
        clientID : "1665411163756369",
        clientSecret: "00f5803b4821e63b816737e256d4343c",
    }, function(accessToken, refreshToken, profile, done){
//          console.log('profile \n', profile)

	  Users.findOne({'_id': profile.id}, (err, user) => {
	     if(err) {
	       console.log("find User err")
	       throw err
	     }
	     if(!user){
	       console.log("new facebook user")
	       user = new Users({
	          '_id' : profile.id,
		      'name' : profile.displayName,
              'accessToken' : accessToken,
		      'picture' : profile.photos[0].value,
			  'token' : randomString.generate(16),
	       })
	       
	       user.save((err)=>{
	          if(err) console.log(err)
		  else{
	   	    done(null, profile);
		  }
	       })
	     }else{
	 	done(null, profile);
	     }
	  })
       })
    )
    app.get('/fb/token', passport.authenticate('facebook-token'), (req, res) => {
        if(req.user) {
	   console.log('user : ', req.user)
           Users.findOne({'_id' : req.user.id}, (err, user) => {
 	      if(err) throw err;
	      if(user) res.send(200, user)
	      else res.send(400, {"message" : "user not found"})
	   })
        }else{
	   res.send(400, {"message" : "user not found in req"})
	}
    })
    app.get('/fb/callback', passport.authenticate('facebook-token', {
       successRedirect: '/',
       failureRedirect: '/'
    }));
}
