import React from 'react';
import './Profile.scss';
import PIC from '../../images/My Pic.jpg';
import { BsLinkedin, BsGithub,BsInstagram } from 'react-icons/bs';

const Profile = () => {
  return (
    <section id='profile' className='section-p'>
      <div className='profile-pic'>
        <img src={PIC} alt="" />
      </div>
      <div className='bar'></div>
      <div className='about-me'>
        <p>I am an aspiring developer currently working in frontend development but passionate about getting driven into full stack development. Currently, I am working as a manual test engineer.</p>
        <div className='socials'>
          <ul className='social-media-links'>
            <li><BsLinkedin className='icons' /></li>
            <li><BsGithub className='icons' /></li>
            <li><BsInstagram className='icons' /></li>
          </ul>
        </div>
        <button className='btn'>Hire Me</button>
      </div>
    </section>
  )
}

export default Profile;