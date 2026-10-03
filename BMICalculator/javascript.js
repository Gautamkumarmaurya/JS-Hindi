// const form = document.querySelector("page-container");
// form.addEventListener('calculate-btn', function (e){
//     e.preventDefault();

//     const height = document.querySelector("#height");
//     const weight = document.querySelector("#weight");
//     const results = document.querySelector("#result-box")

//     if(height === ' ' || height < 0 || isNaN(height) ){
//         results.innerHTML = `Please give a valid height ${height}`;
//     }else if(weight === ' ' || weight < 0 || isNaN(weight)){
//         results.innerHTML = `Please give a valid Weight ${weight}`;
//     }else{
//         const bmi = ((weight / (height * height) / 10000)).toFixed(2);
//         // show the result 
//        // results.innerHTML= `${result-label}`
// }
// });

const button = document.querySelector(".calculate-btn");

button.addEventListener("click", function (e) {

    const heightInput = document.querySelector("#height");
    const weightInput = document.querySelector("#weight");

    const result = document.querySelector(".result-box h2");
    const status = document.querySelector(".result-status");

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);


    // Height validation
    if (height <= 0 || isNaN(height)) {
        result.innerHTML = "--";
        status.innerHTML = "Please enter a valid height.";
        return;
    }


    // Weight validation
    if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = "--";
        status.innerHTML = "Please enter a valid weight.";
        return;
    }


    // BMI calculation
    const bmi = (weight / (height * height)) * 10000;

    const finalBMI = bmi.toFixed(2);


    // Show result
    result.innerHTML = finalBMI;


    // BMI category
    if (bmi < 18.6) {

        status.innerHTML = "Underweight";

    } else if (bmi >= 18.6 && bmi <= 24.9) {

        status.innerHTML = "Normal Range";

    } else {

        status.innerHTML = "Overweight";

    }

});



