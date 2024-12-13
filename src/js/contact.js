document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const spinner = document.getElementById("spinner");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    spinner.style.display = "block";
    event.target.style.display = "none";
  
    try {
      const response = await fetch("/.netlify/functions/contact-handler", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        spinner.style.display = "none";
        thankYouMessage.style.display = "block";
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      alert("Failed to send the message. Check your connection.");
    }
  });