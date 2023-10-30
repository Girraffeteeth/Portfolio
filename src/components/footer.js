import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="socialMedia">
        <PhoneIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
        <EmailIcon/>
        <LinkedInIcon/>
        <GitHubIcon/>
      </div>
      <p>&copy; {new Date().getFullYear()} Meghna Das - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;