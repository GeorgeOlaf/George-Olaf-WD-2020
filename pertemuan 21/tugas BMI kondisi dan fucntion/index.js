//Menghitung BMI

let name = function(myName){
let berat = prompt("Masukan Berat : ");
console.log("Berat anda "+ myName + " Yaitu = " + berat);

let tinggi = prompt("Masukan Tinggi : ");
console.log("Tinggi anda "+ myName + " Yaitu = "+ tinggi);

let bmi = berat / (tinggi * tinggi);
console.log("BMI = " + bmi);

if (bmi < 18.5){
    console.log("Underweight Classification, Risk = LOW");
}else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("Normal Range Classification, Risk = Average");
}else if( bmi >= 25.0 && bmi <29.9){
    console.log("overweight Classification, Risk = Midly Increased");
}else if (bmi >= 30 && bmi <34.9){
    console.log("Obese class 1 = moderate");
}else if (bmi >= 30 && bmi <34.9){
    console.log("Obese class 1 = moderate");
}else if (bmi >= 35.0 && bmi <39.9){
    console.log("Obese class 2 = severe");    
}else if (bmi >= 40 ){
    console.log("Obese class 1 = very severe");    
}    
};
name("George Olaf");