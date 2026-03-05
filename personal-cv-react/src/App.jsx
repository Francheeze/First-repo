import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
    year: "2028",
    program: "BS Information Technology",
    school: "USTP Cagayan de Oro"
    },
    {
    year: "2024",
    program: "STEM",
    school: "MOGCHS"
    },
    {
      year: "2021",
      program: "High School",
      school: "LNHS"
    },
    {
      year: "2017",
      program: "Elementary",
      school: "CES"
    }
    ];
    

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <h1>My Personal Online CV</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Header />
      <About />
      
      {/* 2. Pass the array as a prop to the skills component */}
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
    </>
  );
}

export default App;