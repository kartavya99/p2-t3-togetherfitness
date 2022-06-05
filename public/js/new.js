const newFormHandler = async (event) => {
  event.preventDefault();

  const workout_title = document.querySelector('#new-workout-title').value.trim();
  const workout_type = document.querySelector('#new-workout-type').value.trim();
  const workout_date = document.querySelector('#new-workout-date').value.trim();
  const workout_duration = document.querySelector('#new-workout-duration').value.trim();
  const workout_size = document.querySelector('#new-workout-size').value.trim();
  const workout_location = document.querySelector('#new-workout-location').value.trim();
  const workout_address = document.querySelector('#new-workout-address').value.trim();
  const workout_description = document.querySelector('#new-workout-description').value.trim();

  if ( workout_title && workout_type && workout_date && workout_duration && workout_size && workout_location && workout_address && workout_description ) {
    const response = await fetch(`/api/workout`, {
      method: 'POST',
      body: JSON.stringify({ workout_title, workout_type, workout_date, workout_duration, workout_size, workout_location, workout_address, workout_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create New Workout');
    }
  }
};

document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newFormHandler);