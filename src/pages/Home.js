import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";


import myimg from "../assets/myimg.jpg";
import Summary from "../components /Summary";

export default function Home() {
  return (
    <div className="w-full   items-center font-[Arial] text-[#3e497a] ">
      
      <div className=" h-[600px] bg-[#21325e] flex flex-col justify-center items-center text-center text-slate-200">
        <div className="w-full flex justify-center items-center">
          <img
            className="border-4 border-amber-400 w-[170px]  items-center sm:w-[250px] object-fit rounded-full mt-10 "
            src={myimg}
            alt="Alis ibrahim"
          />
        </div>
        <h2 className="font-['Segoe UI'] text-2xl  md:text-5xl lg:text-7xl text-amber-300 p-3 lg:p-10">
          Hi, Im Ali ibrahim
        </h2>
        <div className="prompt w-[80%] sm:w-[50%]  text-sm md:text-lg lg:text-2xl pb-10">
          <p className=" border-b-4 border-dashed border-  border-b-amber-400 pb-5  ">
            A Front-end Developer with a passion for learning and creating{" "}
          </p>
        </div>
        
        <div className="pb-10  ">
          <a
            href="https://www.linkedin.com/in/ali-i-077196245/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{
                fontSize: 35,
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://github.com/bluesky1992-web"
            target="_blank"
            rel="noopener noreferrer"
          >
          <GithubIcon
            sx={{
              fontSize: 47,
              paddingLeft: 2,
              cursor: "pointer",
            }}
          />
          </a>
        </div>
      </div>
      <Summary />
      <div className="text-2xl sm:text-4xl  w-full flex justify-center flex-col items-center">
        <h1 className="m-10 text-[#3e497a] text-xl sm:text-3xl" >Skills</h1>
        <ol className="list list-none w-[60%] text-center sm:text-left ">
          <li className="item">
            <h2 className=" text-xl sm:text-2xl  md:text-3xl ">front-end</h2>
            <span className=" text-base sm:text-xl  ">
              ReactJS, HTML, CSS, NPM, Bootstrap, MaterialUI,
              TailwindCSS, JavaScript
            </span>
          </li>
        </ol>
      </div>
      
    </div>
  );
}
