   // Copyright 2017 David Flom
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCwC7U1GrTjk6-ZVScaUDN3nX_fobxuINI",
    authDomain: "contactform-7bb34.firebaseapp.com",
    databaseURL: "https://contactform-7bb34.firebaseio.com",
    projectId: "contactform-7bb34",
    storageBucket: "contactform-7bb34.appspot.com",
    messagingSenderId: "468892424814"
  };
  firebase.initializeApp(config);

//conect to firebase messages collections
var messageRef = firebase.database().ref('messages');

//event listener for form
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
    //getvalues
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    sendMessage(name,company, email, phone, message);
    //display alert
    document.querySelector('.alert').style.display = 'block';
    //hide alert of 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'; 
        document.getElementById('contactForm').reset();
    },3000);
}    
//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//send the message to firebase
function sendMessage(name, company, email, phone, message){
    var newMessage = messageRef.push();
    newMessage.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}