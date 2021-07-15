var firebaseConfig = {
      apiKey: "AIzaSyDirfOyiOb4sZ8FWYQzcG3qj3R-VpLA2fI",
      authDomain: "classtest-9d8b3.firebaseapp.com",
      projectId: "classtest-9d8b3",
      storageBucket: "classtest-9d8b3.appspot.com",
      messagingSenderId: "132641067019",
      appId: "1:132641067019:web:950587125390f6a3b2370e"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
