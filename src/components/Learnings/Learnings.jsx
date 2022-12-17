import React from 'react';
import './Learnings.scss';
import { TiTick } from 'react-icons/ti';

const Learnings = () => {
  return (
    <section id="learnings" className='section-p'>
      <div className='heading'>
        <h1>My Learnings</h1>
      </div>
      <div className='topics'>
        <div className='frontend'>
          <h3>Frontend</h3>
          <ul>
            <li><TiTick className='tick-symbol' />HTML</li>
            <li><TiTick className='tick-symbol' />CSS</li>
            <li><TiTick className='tick-symbol' />SCSS</li>
            <li><TiTick className='tick-symbol' />Bootstrap</li>
            <li><TiTick className='tick-symbol' />React Js</li>
          </ul>
        </div>
        <div className='backend'>
          <h3>Backend</h3>
          <ul>
            <li><TiTick className='tick-symbol' />Node Js</li>
            <li><TiTick className='tick-symbol' />My SQL</li>
            <li><TiTick className='tick-symbol' />Python</li>
            <li><TiTick className='tick-symbol' />Java</li>
            <li><TiTick className='tick-symbol' />Mongo DB</li>
          </ul>
        </div>
        <div className='others'>
          <h3>Version Control</h3>
          <ul>
            <li><TiTick className='tick-symbol' />Git</li>
            <li><TiTick className='tick-symbol' />GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Learnings;
