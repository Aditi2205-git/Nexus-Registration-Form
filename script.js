const form =
    document.getElementById("registrationForm");

const password =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const togglePassword =
    document.getElementById("togglePassword");

const strengthBar =
    document.getElementById("strengthBar");

const successMessage =
    document.getElementById("successMessage");


/* PASSWORD VISIBILITY */

togglePassword.addEventListener(
    "click",
    () => {

        const isPassword =
            password.type === "password";

        password.type =
            isPassword
                ? "text"
                : "password";

        togglePassword.textContent =
            isPassword
                ? "HIDE"
                : "SHOW";

    }
);


/* PASSWORD STRENGTH */

password.addEventListener(
    "input",
    () => {

        const value =
            password.value;

        let strength = 0;

        if (value.length >= 8) {
            strength++;
        }

        if (/[A-Z]/.test(value)) {
            strength++;
        }

        if (/[0-9]/.test(value)) {
            strength++;
        }

        if (/[^A-Za-z0-9]/.test(value)) {
            strength++;
        }


        const widths =
            ["0%", "25%", "50%", "75%", "100%"];

        strengthBar.style.width =
            widths[strength];

        if (strength <= 1) {
            strengthBar.style.background =
                "#ff6b81";
        }
        else if (strength <= 2) {
            strengthBar.style.background =
                "#ffd166";
        }
        else {
            strengthBar.style.background =
                "#73f7bd";
        }

    }
);


/* FORM VALIDATION */

form.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const confirm =
            confirmPassword.value;


        let valid = true;


        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("confirmError").textContent = "";


        if (name.length < 2) {

            document.getElementById(
                "nameError"
            ).textContent =
                "Please enter your full name.";

            valid = false;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            document.getElementById(
                "emailError"
            ).textContent =
                "Enter a valid email address.";

            valid = false;
        }


        const phonePattern =
            /^[0-9]{10}$/;


        if (!phonePattern.test(phone)) {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Enter a valid 10-digit number.";

            valid = false;
        }


        if (password.value.length < 8) {

            document.getElementById(
                "passwordError"
            ).textContent =
                "Password must contain at least 8 characters.";

            valid = false;
        }


        if (password.value !== confirm) {

            document.getElementById(
                "confirmError"
            ).textContent =
                "Passwords do not match.";

            valid = false;
        }


        const terms =
            document.getElementById("terms").checked;


        if (!terms) {

            alert(
                "Please accept the terms and conditions."
            );

            valid = false;
        }


        if (valid) {

            successMessage.style.display =
                "block";

            form.reset();

            strengthBar.style.width =
                "0%";

        }

    }
);
