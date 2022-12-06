
// Imoprt React
import React from 'react'

// Import Images
import PROFILE3 from './../assets/images/PROFILE3.png';
import PROFILE5 from './../assets/images/PROFILE5.png';
import PROFILE4 from './../assets/images/PROFILE4.png'




const Home = () => {
  return (
  
        <section class="wrapper">

            <nav class="menu">
                <ul class="menu__list">
                <li class="menu__item  js-modify  active" data-target=".card" data-effect="zoom">Zoom out</li>
                <li class="menu__item  js-modify" data-target=".card" data-effect="blur">Blur</li>
                <li class="menu__item  js-modify" data-target=".card" data-effect="color">Colors</li>
                </ul>
            </nav>

  

            <div class="card" data-effect="zoom">
                <button class="card__save  js-save" type="button">
                <i class="fa  fa-bookmark"></i>
                </button>
                    <figure  class="card__image">
                        <img src={PROFILE3} alt="Short description" />
                    </figure>
                <div class="card__header">
                <figure class="card__profile">
                    <img src={PROFILE3} alt="Short description" />
                </figure>
                </div>
                <div class="card__body">
                <h3 class="card__name">MOH KHALID MOMAND</h3>
                <p class="card__job">Full Stack Developer</p>
                <p class="card__bio">A Self-Taught Software Engineer, Programmer & Coder.</p>
                </div>
                <div class="card__footer">
                <p class="card__date">Dec 01 2022</p>
                <p class=""></p>
                </div>
            </div>

  
        </section>
  
  )
}

export default Home