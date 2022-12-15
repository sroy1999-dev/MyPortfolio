import { React, useState } from 'react';
import './Header.scss';
import { AiOutlineAppstore } from 'react-icons/ai';

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
                <li>Home</li>
                <li>About</li>
                <li>Learnings</li>
                <li>Projects</li>
                <li>Testimonials</li>
                <li>Contacts</li>
            </ul>
            <AiOutlineAppstore className={display ? 'app' : 'app close'} onClick={handleClick} />
        </header>
    );
};

export default Header;