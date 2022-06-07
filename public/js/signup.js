const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#signup-fname').value.trim();
  const lastName = document.querySelector('#signup-lname').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();
  const postcode = document.querySelector('#signup-postcode').value.trim();
  const gender = document.querySelector('#signup-gender').value.trim();
  const age = document.querySelector('#signup-age').value.trim();
  const bio = document.querySelector('#signup-bio').value.trim();


  if ( firstName && lastName && email  &&  password && postcode && gender && age && bio ) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, postcode, gender, age, bio }),
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
