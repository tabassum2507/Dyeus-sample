import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart, faStarHalf, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return <div className='box'>
    <span className='box__img'></span>
    <h1 className='box__heading'>Everyday rinse and reload</h1>
    <p className='box__detail'>Achieve your dream skin goal with this complete package of skincare produts that will rejuvenate your day.</p>

    <div className="section">
      <div className="section__rating">
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStar} />
      <FontAwesomeIcon className="star" icon={faStarHalf} />
      </div>
      <h3 className='section_num'>4.5</h3>
      <p>Click to read reviews<FontAwesomeIcon icon={faChevronRight} /></p>
      
    </div>
    
    <div className='box__money'>
    <h1>₹899</h1>
    <h1 className='box__money__h1'>₹1299</h1>
    </div>

    
      <div className="box__pack1 box__pack1--active">
        <span className='box__pack1__popular'><FontAwesomeIcon icon={faStar} />MOST POPULAR<FontAwesomeIcon icon={faStar} /></span>

        <h3>1 Months Pack (4 tubes)</h3>

        <div className='line1'>
          <span class>Savings: ₹200</span>
        <h4>₹595</h4></div>

        <div className="line2">
          <span className='line2_green'>38% Saved</span>
          <span class="line2_yellow">Best Results</span>
          <span className='line2_num'>₹795</span>
        </div>
      </div>
  

    <div className="box__pack__2 ">

      <h3>3 Months Pack (12 tubes)</h3>

      <div className="line1"><span>Savings: ₹100</span>
      <h3>₹899</h3></div>

      <div className="line2"><span>12% Saved</span>
      <h3>₹999</h3></div>
    </div>

    <div className='box__button box__button--box'><span>
      <FontAwesomeIcon icon={faShoppingCart} />ADD TO CART</span>
      </div>
    
  </div>;
}

export default Main;
