import { React, useState } from 'react';
import './Header.scss';
import { AiOutlineAppstore, AiOutlineHome, AiFillProject, AiOutlineContacts } from 'react-icons/ai';
import { GrContactInfo } from 'react-icons/gr';
import { SiFuturelearn, SiAboutdotme } from 'react-icons/si';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [display, setDisplay] = useState(true);
    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
        setDisplay(!display);
    }
    return (
        <header>
            <h1>Suvam Roy</h1>
            <ul className={open ? 'navlist other-devices' : 'navlist'}>
                <li><div><AiOutlineHome className='home-icon' /></div>Home</li>
                <li><div><GrContactInfo /></div>About</li>
                <li><div><SiFuturelearn /></div>Learnings</li>
                <li><div><AiFillProject /></div>Projects</li>
                <li><div><SiAboutdotme /></div>Testimonials</li>
                <li><div><AiOutlineContacts /></div>Contacts</li>
            </ul>
            <AiOutlineAppstore className={display ? 'app' : 'app close'} onClick={handleClick} />
        </header>
    );
};

export default Header;