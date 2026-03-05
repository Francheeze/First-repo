import { useState } from "react";
import Card from "./Card";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted successfully!");
      setName("");
      setEmail("");
    }
  };

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