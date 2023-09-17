const handleGetProfile = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
        console.log(user.displayName);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      
}

handleGetProfile();