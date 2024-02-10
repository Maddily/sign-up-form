/**
 * Shows an error if the passwords in Password and Confirm Password
 * fields aren't the same.
 */
function validatePassword() {
	let password = document.getElementById('password');
	let confirmPassword = document.getElementById('confirm_password');
	let errorMessage = document.querySelector('.error_message');

	if (password.value && confirmPassword.value
		&& password.value !== confirmPassword.value)
	{
		password.classList.add('error');
		confirmPassword.classList.add('error');
		errorMessage.innerHTML = '* Passwords do not match';
		password.setCustomValidity('Passwords do not match');
	}
	else
	{
		password.classList.remove('error');
		confirmPassword.classList.remove('error');
		errorMessage.innerHTML = '';
		password.setCustomValidity('');
	}
}
