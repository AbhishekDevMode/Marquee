function register(name, age, email, password,confirmpassword) {
    try {
        if (name.trim() === "") {
            throw new Error("Name not found");
        }
        
        if (Number(age) <= 18) {
            throw new Error("age should be over 18");
        }
        
        if (!email.includes("@")) {
            throw new Error("Invalid email");
        }
        
        if (password !== confirmpassword ) {
            throw new Error("Password missmatch");
        
        }
         errorDisplay.style.color = "green";
        errorDisplay.innerHTML = "Registration successful!";
        return true;

    } catch (error) {
        console.error("Validation Failed:", error.message);
        return false;
    }
}