import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Lets see what might fit you!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1.jpg'
              text='Systematic rhythmic bodily exercises performed usually without apparatus'
              label='Calisthenics'
              path='/services'
            />
            <CardItem
              src='images/2.jpg'
              text=' The performance of physical exercises which are designed to improve strength and endurance'
              label='Strength Building'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text=' Developing endurance, and reducing body fat'
              label='Aerobics'
              path='/services'
            />
            <CardItem
              src='images/4.jpg'
              text='A form of high intensity interval training'
              label='Cross-Fit'
              path='/products'
            />
            <CardItem
              src='images/5.jpg'
              text=' Aims to hit all the major muscle groups in one single session'
              label='Full Body Workout'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;