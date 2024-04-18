// let Name_User = document.getElementById('name');
// let Phone_User = document.getElementById('Phone');
// let Email_User = document.getElementById('email');
// let City_User = document.getElementById('city');
// let Password_User = document.getElementById('password');
// let confirmPassword_User = document.getElementById('confirmPassword');

let dataUser=[];

let namePattern= /^[A-Z a-z]{3,10}()[A-Z a-z]{3,10}$/i;
let cityPattern= /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
let emailPattern=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passwordPattern=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
let phonePattern=/^\+(?:[0-9] ?){6,14}[0-9]$/;

document.getElementById('contactForm').addEventListener('submit', function(e) {
    getUserData(e);
});


function getUserData(e){
    e.preventDefault();

    let Name_User = document.getElementById('name').value;
    let Phone_User = '+'+document.getElementById('Phone').value;
    let Email_User = document.getElementById('email').value;
    let City_User = document.getElementById('city').value;
    let Password_User = document.getElementById('password').value;
    let confirmPassword_User = document.getElementById('confirmPassword').value;

    if( namePattern.test(Name_User) == true && emailPattern.test(Email_User) == true && passwordPattern.test(Password_User) == true && passwordPattern.test(confirmPassword_User) ==true && cityPattern.test(City_User) ==true && phonePattern.test(Phone_User) == true )
    {
        if( document.getElementById('password').value == document.getElementById('confirmPassword').value ){
            dataUser.push({
                name:Name_User,
                phone:Phone_User,
                email:Email_User,
                city:City_User,
                password:Password_User,
                confirmPassword:confirmPassword_User,
            })
            localStorage.setItem("NewUser" , JSON.stringify(dataUser) )
            console.log(localStorage.getItem('NewUser'));
        }
    }
    else{
        console.log("error");
    }
}