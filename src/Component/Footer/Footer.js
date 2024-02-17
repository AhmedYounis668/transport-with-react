import React from 'react'

const Footer = () => {
  return (
    <div >
      <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <i class="fa-solid fa-house"></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#Home">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#Drivers">Drivers</a></li>
      <li class="menu__item"><a class="menu__link" href="#Our Cars">Our Cars</a></li>
      <li class="menu__item"><a class="menu__link" href="#Why Choose Us">Why Choose Us</a></li>
      <li class="menu__item"><a class="menu__link" href="#client opinion">Client Opinion</a></li>

    </ul>
    <p>&copy;Ahmed Younis 2024</p>
  </footer>
 
    </div>
  )
}

export default Footer
