import React from 'react';
import styles from './slider.module.css';
import { Parallax } from 'react-parallax';
import Car from '../images/car.jpg';
import Flight from '../images/flight.jpg';
import Spiderman from '../images/spiderman.jpg';
import Dog from '../images/dog.jpg';

const Slider = () => {
  return (
    <div>
      <Parallax strength={-100} bgImage={Spiderman} >
        <div className={styles['parallax-container']}>
          <div className={styles['Content']}>
            <div className={styles['text-content']}>Normal Parallax</div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={200} blur={{ min: -15, max: 15 }} bgImage={Car}>
        <div className={styles['parallax-container']}>
          <div className={styles['Content']}>
            <div className={styles['text-content']}>Blur Parallax</div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={-300} bgImage={Flight}>
        <div className={styles['parallax-container']}>
          <div className={styles['Content']}>
            <div className={styles['text-content']}>Reverse Parallax</div>
          </div>
        </div>
      </Parallax>
      <Parallax strength={-100} blur={{min:-15,max:15}} bgImage={Dog}>
        <div className={styles['parallax-container']}>
          <div className={styles['Content']}>
            <div className={styles['text-content']}>Reverse Blur Parallax</div>
          </div>
        </div>
      </Parallax>
      <div className={styles['Content']}></div>
    </div>
  );
};

export default Slider;
