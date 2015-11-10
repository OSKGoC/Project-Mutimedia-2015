// Create a function to log the response from the Mandrill API
	

		
		// create a new instance of the Mandrill class with your API key
		
		var m = new mandrill.Mandrill('fj9XpAY4hF76Yqikf_3ypw');
		// create a variable for the API call parameters
		
		
		function sendTheMail() {
		
		// Send the email!
		var params = {
			"message": {
				"from_email":document.getElementById("hhmmail").value+"",
				"to":[{"email":"himhhm@gmail.com"},{"email":"sakda_jan@hotmail.com"}],
				"subject": document.getElementById("hhmname").value+" comment your website",
				"text": document.getElementById("hhmtxt").value+""
			}
		};
			/*params["message"]["subject"]=document.getElementById("hhmname").value+" comment your website";
			params["message"]["from_email"]=document.getElementById("hhmmail").value;
			params["message"]["text"]=document.getElementById("hhmtxt").value;
			alert(document.getElementById("hhmmail").value);*/
			alert(params["message"]["from_email"])
			m.messages.send(params);
		}// JavaScript Document