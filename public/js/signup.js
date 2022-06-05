const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_firstName = document.querySelector('#signup-fname').value.trim();
  const user_lastName = document.querySelector('#signup-lname').value.trim();
  const user_email = document.querySelector('#signup-email').value.trim();
  const user_postcode = document.querySelector('#signup-postcode').value.trim();
  const user_gender = document.querySelector('#signup-gender').value.trim();
  const user_age = document.querySelector('#signup-age').value.trim();
  const user_bio = document.querySelector('#signup-bio').value.trim();
  const user_password = document.querySelector('#signup-password').value.trim();

  if ( user_firstName && user_lastName && user_email && user_postcode && user_gender && user_age && bio && password ) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_firstName, user_lastName, user_email, user_postcode, user_gender, user_age, user_bio, user_password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
