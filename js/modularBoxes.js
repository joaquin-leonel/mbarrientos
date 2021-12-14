//header-------------------------------------------------------------------------------------
document.getElementById("header").innerHTML = 
          ` <nav class="nav">
            <a href="index.html"><img class="logo" src="./img/logo.png" alt="Margarita Barrientos Logo"></a>
              <button class="nav-toggle">
                <i class="fas fa-bars"></i>
              </button>
              <ul class="nav-menu nav-Menu-visible">
                <li class="nav-menu-item"><a href="index.html" class="nav-menu-link nav-route">Inicio</a></li>
                <li class="nav-menu-item"><a href="historia.html" class="nav-menu-link nav-route">Nuestra Historia</a></li>
                <li class="nav-menu-item"><a href="noticias.html" class="nav-menu-link nav-route">Noticias</a></li>
                <li class="nav-menu-item"><a href="contacto.html" class="nav-menu-link nav-route">Contacto</a></li>
                <a href="https://fundacionmargaritabarrientos.paypertic.com.ar" target="_blank">
                  <button class="headerDonar">
                    DONAR
                  </button>
                  </a>
              </ul>
            </nav>`;



//footer---------------------------------------------------------------------------------------
document.getElementById("footer").innerHTML = 
` <div class="socialFooter">
    <a href="index.html" class="logoFooter">
      <img class="logo" src="./img/logo.png" alt="Margarita Barrientos Logo"></div>
    </a>

    <div class="socialFooter">

      <a href="https://m.facebook.com/Fundacion-Margarita-Barrientos-1572544119690437/?__nodl&refsrc=deprecated&_rdr" target="_blank" class="redesFooter"><i class="fab fa-facebook"></i></a>

      <a href="https://www.instagram.com/fundacionmargaritabarrientos/" target="_blank"><i class="fab fa-instagram" class="redesFooter"></i></a>
      
      <a href=""><i class="fab fa-linkedin"></i></a>
      
    </div>

  <div class="footerInfo">
    <p class="pFooter">Plumerillo 3995 1437 Buenos Aires, Argentina. Tel: 011 4919-1333. comedorlospiletones@yahoo.com.ar</p>
  </div>`;


//toogle menu---------------------------------------------------------------------------------
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-vissible")
})