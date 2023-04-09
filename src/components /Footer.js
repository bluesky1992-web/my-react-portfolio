import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="w-full h-22 bg-[#21325e] flex justify-center items-center flex-col  mt-48">
      <div className="text-white m-5 space-x-4  ">
        <InstagramIcon
          sx={{
            fontSize: 35,
            cursor: "pointer",
          }}
        />
        <FacebookIcon
          sx={{
            fontSize: 35,
            cursor: "pointer",
          }}
        />
        <TwitterIcon
          sx={{
            fontSize: 35,
            cursor: "pointer",
          }}
        />
        <LinkedInIcon
          sx={{
            fontSize: 35,
            cursor: "pointer",
            
          }}
        />
      </div>
      <p className="text-white">&copy; 2023 Ali.com</p>
    </div>
  );
}
