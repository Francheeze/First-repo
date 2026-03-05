import profile from "../assets/images/profile.png";
import Card from "./Card";

function About() {
  return (
    <Card title="About Me">
      <img src={profile} alt="Profile photo" />
      <p>A passionate and self-driven individual who's willing to do whatever it takes.</p>
    </Card>
  );
}

export default About;