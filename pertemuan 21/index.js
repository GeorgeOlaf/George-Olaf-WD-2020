console.log("Basic JavaScript");

//conditional javascript

// let firstName = "john";
// let ismarried = true;

// if(ismarried){
//     console.log(firstName + " is married");
// } else{
//     console.log(firstName + "is not married");
// }

//jika umur < 13 tahun maka tampilkan kategori anak-anak 
//jika umur 13 - 16 tahun tampilkan kategori remaja
//jika umur 17 - 25 tahun tampilkan kategori anak muda
//jika umur 26 - 50 tahun tampilkan kategori orang dewasa


// let firstName = "john";
// let job = "teacher";

// switch(job){
//     case"teacher": 
//     console.log(firstName + " is a teacher");
//     break;
//     case "driver":
//     console.log(firstName + " is a driver");
//     break;
//     case "instructor":
//     console.log(firstName + " is a instructor");
//     break;
//     default:
//     console.log(firstName + " does something else");
// }


// if (umur < 13){
//     console.log("kategori anak-anak");
// }else if (umur >= 13 && umur <= 17){
//     console.log("katergori remaja");
// }else if( umur >= 17 && umur <26){
//     console.log("kategori anak muda");
// }else if (umur >= 26 && umur <50){
//     console.log("kategori orang dewasa");
// }

// let umur = 35;
// switch(true)
// {
//     case umur < 13:
//         console.log("kategori anak-anak");
//         break;
//     case umur >= 13 && umur <17:
//         console.log("kategori remaja");
//         break;
//     case umur >= 17 && umur < 26:
//         console.log("kategori anak muda");
//         break;
//     case umur >= 26 && umur < 50:
//         console.log("kategori orang dewasa");
//         break;
// default:
// console.log("tidak ada dalam range");
// break;
// }

// Java Script Function
 
// function helloWorld(){
//     console.log("Hello World function declaration");
// }
let age = 33;
let helloWorld = function(nama){

    console.log("Hello nama saya " + nama   + "Umur saya adalah " +  age);
};
console.log(age)
helloWorld("George Olaf");