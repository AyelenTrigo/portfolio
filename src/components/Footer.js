import React from 'react'
import '../style/Footer.css'
import logo_linkedin from "../images/logotipo-de-linkedin.png"
import logo_github from "../images/signo-de-github.png"

function Footer(){
  const gitHub = 'https://github.com/AyelenTrigo'
  const linkedin = 'https://www.linkedin.com/in/trigo-maria-ayelen/';
  const handleGithub = () => {
    window.open(gitHub, "_blank");
  };

  const handleLinkedin = () => {
    window.open(linkedin, "_blank");
  };

  return (
    <div className='footer'>
      <img src={logo_linkedin} 
        alt="" className='footer_icons' 
        onClick={handleLinkedin}/>
      <img src={logo_github} 
        alt="" className='footer_icons' 
        onClick={handleGithub}/>
    </div>
  )
}

export default Footer;


