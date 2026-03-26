import { useState } from "react";
import Card from "./Card";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // 1. Frontend validation runs first
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all required fields.");
      return; // Stops the function from running the fetch request
    }

    // 2. Fetch request to PHP backend
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then((response) => response.json())
      .then(data => {
        // 3. Handle backend response
        if (data.message) {
          alert(data.message); // Displays the "Hello [Name]" message
          
          setName("");
          setEmail("");
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch(error => {
          console.error("Error:", error);
          alert("Failed to connect to the server.");
      });
  }

  return (
    <Card title="Contact Me">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea placeholder="Message"></textarea>

        <button type="submit">Send</button>
      </form>
    </Card>
  );
}

export default Contact;