function clicked() {
	var user = document.getElementById('username');
	var pass = document.getElementById('password')

	var coruser ="ededieu64";
	var corpass ="26062003elisa";

	if(user.value == coruser) {

		if (pass.value == corpass) {
			window.open("html/q1.html");
		}

		 else 
		{
			window.alert("Username ou mot de passe Incorrect");
		}

	}

	else 
	{
		window.alert("Username ou mot de passe Incorrect");
	}
}