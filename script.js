var fname = prompt ("Please enter your full name:");
var username = prompt ("Please enter your username: ");
var gender = confirm ("What is your gender?\n Press OK if you are Male\n Cancel if Female");
if (gender) {
    alert ("Your profile gender is set to MALE");
    var gender_letter = "M";
}
else {
    alert ("Your profile gender is set to FEMALE");
    var gender_letter = "F";
}

var desc = prompt ("Please type a brief description of yourself");
var year = prompt ("Please enter your Birth Year:");
var ppic = confirm ("Do you want to use a custom profile picture?");

if (ppic){
    var pic = prompt ("Please enter the file name of the picture. (Ex: wow.jpg ) ");

    document.getElementById("ppic").src = pic;

}

else {
   alert("No image has been set.");
}


var age = 2023 - year;

document.getElementById ("fname").innerHTML = fname;
document.getElementById("username").innerHTML = username;
document.getElementById ("gender").innerHTML = gender_letter;
document.getElementById ("desc").innerHTML = desc;
document.getElementById ("year").innerHTML = year;
document.getElementById ("age").innerHTML = age;









