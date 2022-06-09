const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const delId = event.target.getAttribute("data-id");
    console.log(delId);
    const response = await fetch(`/api/workout/${delId}`, {
      method: "DELETE",
    });
    console.log(delId);
    if (response.ok) {
      console.log("DELETE");
      document.location.replace("/profile");
      // alert("Failed to delete workout");
    }
  }
  // alert("Deleted workout");
};


document
  .querySelector("#delete-button")
  .addEventListener("click", delButtonHandler);