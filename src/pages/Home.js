import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Ali</h2>
        <div className="prompt">
          <p>A web developer with a passion for learning and creating </p>
        </div>
        <div className="socialIcons">
          <LinkedInIcon
            sx={{
              fontSize: 50,
              cursor: "pointer",
            }}
          />

          <EmailIcon
            sx={{
              fontSize: 50,
              paddingLeft: 2,
              cursor: "pointer",
            }}
          />

          <GithubIcon
            sx={{
              fontSize: 50,
              paddingLeft: 2,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>front-end</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Bootstrap, MaterialUI,
              TailwindCSS, JavaScript
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
