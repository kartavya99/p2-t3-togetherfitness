const attendButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const userId = event.target.getAttribute("data-id");
    const workoutId = event.target.getAttribute("data-source");

    console.log(userId);
    console.log(workoutId);

    const response = await fetch(`/api/attendee`, {
      method: "POST",
      body: JSON.stringify({ userId, workoutId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // document.location.replace("/profile");
      // alert("Button works");
      $('#attend-button').addClass('hide');
      $('#attend-comment').addClass('show');
    } else {
      alert("Failed create");
    }
  }
};

document
  .querySelector("#attend-button")
  .addEventListener("click", attendButtonHandler);