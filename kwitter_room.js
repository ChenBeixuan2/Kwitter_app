var firebaseConfig = {
      apiKey: "AIzaSyAU0Rtj39PVFCMoCFoieg7QlEVDBlFBjZM",
      authDomain: "kwitter-6177b.firebaseapp.com",
      databaseURL: "https://kwitter-6177b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6177b",
      storageBucket: "kwitter-6177b.appspot.com",
      messagingSenderId: "1084208054147",
      appId: "1:1084208054147:web:084d44bcaefdb05877c0b6"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="Kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomnam-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="Kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
