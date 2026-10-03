// ================= LOGIN =================

export function loginUser(email, password) {

    // Basic validation
    if (!email || !password) {
        return false;
    }

    // User object
    const user = {
        email: email
    };

    // Browser localStorage mein save karo
    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );

    return true;
}


// ================= LOGOUT =================

export function logoutUser() {

    localStorage.removeItem(
        "currentUser"
    );

}


// ================= GET CURRENT USER =================

export function getCurrentUser() {

    const user =
        localStorage.getItem("currentUser");

    if (!user) {
        return null;
    }

    return JSON.parse(user);

}


// ================= CHECK LOGIN =================

export function isLoggedIn() {

    return localStorage.getItem(
        "currentUser"
    ) !== null;

}