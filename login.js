function login() {
	var user=
	document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	
	if(user=="wcms"&&pass=="wcms123") {
		window.location.href="index.html";
}else{
	
	document.getElementById("error").innerHTML="Invalid Username or Password";
}

}

