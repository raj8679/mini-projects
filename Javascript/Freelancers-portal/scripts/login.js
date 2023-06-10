const handleLoginBtn = async () => {
  
    let obj = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }; 
    if(obj.email === "" || obj.password === "") {
      document.getElementById("errorMessage").innerText = "All Fields required !"
    } else {
      if(obj.email === "eve.holt@reqres.in") {
        let res = await fetch("https://reqres.in/api/login", {
       method: "POST",
       body: JSON.stringify(obj),
       headers: {
         "Content-Type": "application/json",
       },
     });
     let token = await res.json();
     document.getElementById("login-form").style.display="none";
     document.getElementById("loader").innerText = "Loading..."
     localStorage.setItem("token", JSON.stringify(token));
     window.location.href = "freelancers.html";
     } else {
       document.getElementById("errorMessage").innerText = "Wrong Credentials !"
     }
    }
    
};