const form =document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});
function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (usernameValue === "") {
		setErrorFor(username, "Username cannot be blank");
	} else {
		setSuccessFor(username);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}

    let ans=validatePassword(passwordValue)
	if (passwordValue === "") {
		setErrorFor(password, "Password cannot be blank");
	}
    else if(ans){
        setSuccessFor(password);
    }
    else {
		setErrorFor(password,"make a stronger password")
	}

	if (password2Value === "") {
		setErrorFor(password2, "Password2 cannot be blank");
	}
    else if (passwordValue !== password2Value) {
		setErrorFor(password2, "Passwords does not match");
	} 
    else if(!ans){
        setErrorFor(password2, "make a stronger password");
    }
    else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input,message){
    const formcontrol=input.parentElement;
    const small=formcontrol.querySelector("small");

    formcontrol.className="form-control error";
    small.innerText=message;
}
function setSuccessFor(input){
    const formcontrol =input.parentElement;
    formcontrol.className="form-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}




// //password checker
// function validatePassword(p) {
//         errors = [];
//     if (p.length < 8) {
//         errors.push("Your password must be at least 8 characters"); 
//     }
//     if (p.search(/[A-Z]/i) < 0) {
//         errors.push("Your password must contain at least one letter.");
//     }
//     if (p.search(/[a-z]/i) < 0) {
//         errors.push("Your password must contain at least one letter.");
//     }
//     if (p.search(/[0-9]/) < 0) {
//         errors.push("Your password must contain at least one digit."); 
//     }
//     if(p.search(/[!@#$%^&*]/) < 0){
//         errors.push("Your password must contain at least one special character."); 
//     }
//     if (errors.length > 20){
//         alert(errors.join("\n"));
//         return false;
//     }
//     return true;
// }
function validatePassword(p) {
	return /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(
		p
	);
}


const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
