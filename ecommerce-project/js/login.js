import {
    loginUser
} from "./auth.js";


const loginForm =
    document.querySelector("#loginForm");


const emailInput =
    document.querySelector("#email");


const passwordInput =
    document.querySelector("#password");


const loginMessage =
    document.querySelector("#loginMessage");


// ================= LOGIN FORM =================

loginForm.addEventListener(
    "submit",
    function (event) {

        // Browser ka default form submit
        // prevent karo
        event.preventDefault();


        const email =
            emailInput.value.trim();


        const password =
            passwordInput.value.trim();


        // ================= VALIDATION =================

        if (!email || !password) {

            loginMessage.textContent =
                "Email and password are required.";

            loginMessage.style.color =
                "red";

            return;
        }


        // ================= LOGIN =================

        const success =
            loginUser(
                email,
                password
            );


        if (success) {

            loginMessage.textContent =
                "Login successful!";

            loginMessage.style.color =
                "green";


            // 1 second baad home page
            setTimeout(
                function () {

                    window.location.href =
                        "../index.html";

                },
                1000
            );

        }

    }
);