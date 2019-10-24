



firstname.onblur = function(){
	if(firstname.value == ""){
		nameerror.innerHTML = "Not a valid first name";
		firstname.style.borderColor = "#ff0000";
		firstname.style.backgroundColor = "#FFA07A";
	}
	else{
		nameerror.innerHTML = null;
		firstname.style.borderColor = "";
		firstname.style.backgroundColor = "";

	}
};

lastname.onblur = function(){
	if(lastname.value == ""){
		nameerror.innerHTML = "Not a valid last name";
		lastname.style.borderColor = "#ff0000";
		lastname.style.backgroundColor = "#FFA07A";
	}
	else{
		nameerror.innerHTML = null;
		lastname.style.borderColor = "";
		lastname.style.backgroundColor = "";

	}
};

firstname.onfocus = function(){

	firstname.style.borderColor = "";
	firstname.style.backgroundColor = "";
}

lastname.onfocus = function(){

	lastname.style.borderColor = "";
	lastname.style.backgroundColor = "";
}

function emailIsValid (email) { 
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
}

email.onblur = function(){
	//emailIsValid(email.value);
	if(!emailIsValid(email.value)){
		email.style.borderColor = "#ff0000";
		email.style.backgroundColor = "#FFA07A";
		console.log("invalid email")
		emailerror.innerHTML = "Not a valid email";
	}
	else{
		emailerror.innerHTML = null;
		email.style.borderColor = "";
		email.style.backgroundColor = "";
	}
		
}

email.onfocus = function(){
	email.style.borderColor = "";
	email.style.backgroundColor = "";
}
	
age.onblur = function(){
	if(age.value*1 != age.value || age.value == "")
{
	age.style.borderColor = "#ff0000";
	age.style.backgroundColor = "#FFA07A";
	ageerror.innerHTML = "Not a valid age";
}
else{
	age.style.borderColor = "";
	age.style.backgroundColor = "";
	
	ageerror.innerHTML = null;
}
}

submit.onclick = function(){
	
	if(firstname.value == "" || lastname.value == "")
	{
		event.preventDefault();
		nameerror.innerHTML = "This is a required field";
	}
	if(email.value == "" || !emailIsValid(email.value))
	{
		event.preventDefault();
		emailerror.innerHTML = "This is a required field";

	}
}
	
	
	