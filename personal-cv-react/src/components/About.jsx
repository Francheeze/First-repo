import profile from "../assets/images/profile.png";

function About() {
  return (
    <section className="card">
      <img src={profile} alt="Profile photo" />
      <h2>About Me</h2>
      <p>A passionate and self-driven individual who's willing to do whatever it takes.</p>
    </section>
  );
}

export default About;