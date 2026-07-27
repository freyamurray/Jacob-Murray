// themeswitch button
function themeSwitch() {
  let btnDt, btnMb;
  btnDt = document.getElementById("desktop-themeswitch");
  btnMb = document.getElementById("mobile-themeswitch");

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnDt.innerHTML = "<i class='fa-solid fa-sun' title='light mode'></i>";
    btnDt.ariaLabel = "light mode";
  } else {
    btnDt.innerHTML = "<i class='fa-solid fa-moon' title='dark mode'></i>";
    btnDt.ariaLabel = "dark mode";
  }

  if (document.body.classList.contains("dark")) {
    btnMb.innerHTML = "<i class='fa-solid fa-sun' title='light mode'></i>";
    btnMb.ariaLabel = "light mode";
  } else {
    btnMb.innerHTML = "<i class='fa-solid fa-moon' title='dark mode'></i>";
    btnMb.ariaLabel = "dark mode";
  }
}

// mobile menu
function mobileMenu() {
  let menu;
  menu = document.getElementById("mobile-nav");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    menu.ariaExpanded = "true";
    menu.ariaHidden = "false";
  } else {
    menu.ariaExpanded = "false";
    menu.ariaHidden = "true";
  }
}

// mobile dropdown
function dropdown() {
  let dropdown;
  dropdown = document.getElementById("portfolio-dropdown-mobile");

  dropdown.classList.toggle("active");

  if (dropdown.classList.contains("active")) {
    dropdown.ariaExpanded = "true";
    dropdown.ariaHidden = "false";
  } else {
    dropdown.ariaExpanded = "false";
    dropdown.ariaHidden = "true";
  }
}

// home page hero image randomiser

const heroImages = [
  "url('images/home-images/snowy-trees.jpg')",
  "url('images/home-images/northern-lights-2.jpg')",
  "url('images/home-images/rain-waves.jpg')",
  "url('images/home-images/big-rocks.jpg')",
  "url('images/home-images/northern-lights-3.jpg')",
  "url('images/home-images/starry-mountains.jpg')",
  "url('images/home-images/man-clouds.jpg')",
  "url('images/home-images/man-tent.jpg')",
  "url('images/home-images/land-rover.jpg')",
  "url('images/home-images/car-mountain.jpg')",
];

function randomImage() {
  let heroImage;
  heroImage = document.getElementById("hero-image");

  const random = Math.floor(Math.random() * heroImages.length);
  heroImage.style.backgroundImage = heroImages[random];
}
