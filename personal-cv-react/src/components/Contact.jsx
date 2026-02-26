import { useState } from "react";

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
    <section className="card">
      <h2>Contact Me</h2>

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
    </section>
  );
}

export default Contact;