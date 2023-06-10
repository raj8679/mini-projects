document
  .getElementById("userForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const profession = document.getElementById("profession").value;
    const skills = document.getElementById("skills").value.split(",");
    const hourlyRate = document.getElementById("hourlyRate").value;
    const profilePicture = document.getElementById("profilePicture").value;
    const isBooked = document.getElementById("isBooked").checked;

    
    const person = {
      name: name,
      email: email,
      password: password,
      profession: profession,
      skills: skills,
      hourly_rate: hourlyRate,
      profile_picture: profilePicture,
      isBooked: isBooked,
    };

    console.log(person);
    
      const res = await fetch(
        "https://freelancer-s7z7.onrender.com/freelancers",
        {
          method: "POST",
          body: JSON.stringify(person),
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
        const data=await res.json();
        console.log(data)
      document.getElementById("userForm").reset();
      alert("Successfully registered.");
    
  });
