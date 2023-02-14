import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from  '@mui/icons-material/LinkedIn'


import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <InstagramIcon />
      <FacebookIcon />
      <TwitterIcon />
      <LinkedInIcon />
      </div>
      <p>&copy; 2023 Ali.com</p>
    </div>
  );
}
