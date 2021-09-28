var firebaseConfig = {
  apiKey: "AIzaSyDVFcvrKV072t3uusQ8jsOJC9Xq74oNBO0",
  authDomain: "kwitter-f2303.firebaseapp.com",
  databaseURL: "https://kwitter-f2303-default-rtdb.firebaseio.com",
  projectId: "kwitter-f2303",
  storageBucket: "kwitter-f2303.appspot.com",
  messagingSenderId: "1013909302240",
  appId: "1:1013909302240:web:1ed8618340bfb822431985"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() 
{ 
  user_name = document.getElementById("user_name").value; 
  localStorage.setItem("user_name", user_name); 
  window.location = "kwitter_room.html"; 
}