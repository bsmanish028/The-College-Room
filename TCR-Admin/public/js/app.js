
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvZHjASHRVbqdprsZQLt0dLApIfFTVpmM",
    authDomain: "the-college-room-792b1.firebaseapp.com",
    databaseURL: "https://the-college-room-792b1.firebaseio.com",
    projectId: "the-college-room-792b1",
    storageBucket: "the-college-room-792b1.appspot.com",
    messagingSenderId: "1091112180806"
  };
  firebase.initializeApp(config);

  firebase.auth.Auth.Persistence.NONE;



$("#btn-login").click(function(){
	$("#email").removeClass("is-invalid");
    $("#password").removeClass("is-invalid");
	var email = $("#email").val();
	var password = $("#password").val();
	if(!email){
            $("#email").addClass("is-invalid");
            return; 
        }

        if(!password){
            $("#password").addClass("is-invalid");
            return; 
        }
	var result = firebase.auth().signInWithEmailAndPassword(email,password);
	result.catch(function(err){
		var errorCode = err.code;
		var errorMessage = err.message;

		//console.log(errorCode);
		//console.log(errorMessage);
		alert("You Entered " +errorCode);
		alert("" +errorMessage);
	});

});
		
			function AlertIt() {
			alert("Sorry, That you have encountered this anonymous problem.\n\nPlease feel free to ask at ' thecollegeroom@gmail.com '");
			}



 $("#logout").click(function(){
        console.log("logout");
        firebase.auth().signOut().then(function(){
            window.location.href="index.html";
        }, function(){
            //something went wrong
        });
    });﻿

function switchView(view){
	$.get({
		url: view,
		cache: false,
	}).then(function(data){
		$("#container").html(data)
	});
}

/*function newsView(view){
	$.get({
		url: view,
		cache: false,
	}).then(function(data){
		$("#container").html(data)
	});
}

function imageView(view){
	$.get({
		url: view,
		cache: false,
	}).then(function(data){
		$("#container").html(data)
	});
}

function imagesView(view){
	$.get({
		url: view,
		cache: false,
	}).then(function(data){
		$("#container").html(data)
	});
}

function videoView(view){
	$.get({
		url: view,
		cache: false,
	}).then(function(data){
		$("#container").html(data)
	});
}*/
			// For Profile Updation Part

			document.getElementById('contactForm').addEventListener('submit', submitForm);

            // Submit form
            function submitForm(e){
              e.preventDefault();


			  var name = getInputVal('fname');
              var post = getInputVal('post');
              var addemail = getInputVal('addemail');
              var Instname = getInputVal('Instname');
              var facebookid = getInputVal('f-id')

              var user = firebase.auth().currentUser;
                    firebase.database().ref("users").child(user.uid).set({
                        email: user.email,
                        uid : user.uid,
                        name: name,
                        Designation:post,
                        addemail:addemail,
                        Instname:Instname,
                        facebook:facebookid,

                    });


                    // Show alert
			  document.querySelector('.alert').style.display = 'block';

			  // Hide alert after 3 seconds
			  setTimeout(function(){
			    document.querySelector('.alert').style.display = 'none';
			  },3000);

                    // Clear form
              document.getElementById('contactForm').reset();
           		
           		 }

                

                    function getInputVal(id){
              return document.getElementById(id).value;
            }

