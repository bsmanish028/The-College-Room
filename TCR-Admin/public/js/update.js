	/*var config = {
    apiKey: "AIzaSyAIo9t-i8Ytlt2LpvizOCyjY6s2WENpPZk",
    authDomain: "admin-page-ed2a3.firebaseapp.com",
    databaseURL: "https://admin-page-ed2a3.firebaseio.com",
    projectId: "admin-page-ed2a3",
    storageBucket: "admin-page-ed2a3.appspot.com",
    messagingSenderId: "873714641275"
  };
  firebase.initializeApp(config);

  firebase.auth.Auth.Persistence.NONE;


// Listen for form submit
firebase.auth().onAuthStateChanged(function(user){
    if (user){
            document.getElementById('contactForm').addEventListener('submit', submitForm);

            // Submit form
            function submitForm(e){
              e.preventDefault();

              // Get values

              var name = getInputVal('fname');
              var lastname = getInputVal('lname');
              var addemail = getInputVal('addemail');
              var Instname = getInputVal('Instname');


              // Save message to firebase
            var user = firebase.auth().currentUser;
                firebase.database().ref("users").child(user.uid).set({
                email: user.email,
                uid : user.uid,
                name: name,
                lastname:lastname,
                addemail:addemail,
                Instname:Instname,
              });

              // Update User
              //updateUserInfo(name, lastname, addemail, Instname);

              // Show alert
              //document.querySelector('.alert').style.display = 'block';

              // Hide alert after 3 seconds
              //setTimeout(function(){
               // document.querySelector('.alert').style.display = 'none';
              //},3000);

              // Clear form
              document.getElementById('contactForm').reset();
            }

            // Function to get get form values
            function getInputVal(id){
              return document.getElementById(id).value;
            }

             
            
            
            }else{
                   window.location.href = "index.html";
                  }
                });*/