(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()

function validate()
{
	var email=document.getadminElementById("email").value;
	var password=document.getElementById("password").value;
	if(email=="admin@gmail.com" && password=="admin"){
		alert("login successful");
		return false;
	}
	else
	{
		alert("login failed");
	}
}