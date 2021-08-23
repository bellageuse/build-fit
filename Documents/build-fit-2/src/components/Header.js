import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Header.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className='hero-container'>
      <img src='./images/bgimage.jpg'/>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1 className='header-container-h'>NO PAIN, NO GAIN</h1>
      <p className='header-container-p'>What are you waiting for?</p>
      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Header;

