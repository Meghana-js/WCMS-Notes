function login() {
	var user=
	document.getElementById("username").value;
	var pass=document.getElementById("password").value;
	
	if(user=="wcms"&&pass=="wcms123") {
		window.location.href="home.html";
}else{
	
	document.getElementById("error").innerHTML="Invalid Username or Password";
}

}
