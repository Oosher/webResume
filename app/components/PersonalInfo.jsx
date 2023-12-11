


import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function PersonalInfo({translation}) {
  return (
    <div className='personalInfo'>
      <div><PhoneIcon/> <p>0587000644</p></div>
      <div><MailIcon/> <p>oosher18@gmail.com</p></div>
      <div><ShareLocationIcon/> <p>{translation?.Location}</p></div>
      <div><LinkedInIcon/> <p><a href='https://www.linkedin.com/in/osher-ben-zaken-803b97217/' target='_blank'>LinkedIn</a></p></div>
      <div><GitHubIcon/> <p><a href='https://github.com/Oosher' target='_blank'>GitHub</a></p></div>
      <div className="horizontalLine"></div>
    </div>
  )
}
