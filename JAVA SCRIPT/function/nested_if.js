let age = 19;
let citizen = true;
checkLicenceorNot(age, citizen);
function checkLicenceorNot(age, citizen) {
    if (age >= 18) {
        if (citizen) {
            console.log("You are eligible for a driving licence.");
        } else {
            console.log("You are not eligible for a driving licence because you are not a citizen.");
        }
    } else {
        console.log("You are not eligible for a driving licence because you are underage.");
    }
}