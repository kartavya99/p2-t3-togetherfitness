const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const user_email = document.querySelector('#signin-email').value.trim();
  const user_password = document.querySelector('#signin-password').value.trim();

  if (user_email && user_password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ user_email, user_password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

