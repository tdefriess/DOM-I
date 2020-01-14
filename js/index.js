const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let links = document.querySelectorAll('a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

let ctaSection = document.querySelectorAll('.cta-text *');
let ctaImage = document.getElementById('cta-img');

ctaSection[0].textContent = siteContent['cta']['h1'];
ctaSection[1].textContent = siteContent['cta']['button'];
ctaImage.src = siteContent['cta']['img-src'];

let copy = document.querySelectorAll('.text-content *');
copy[0].textContent = siteContent['main-content']['features-h4'];
copy[1].textContent = siteContent['main-content']['features-content'];
copy[2].textContent = siteContent['main-content']['about-h4'];
copy[3].textContent = siteContent['main-content']['about-content'];
copy[4].textContent = siteContent['main-content']['services-h4'];
copy[5].textContent = siteContent['main-content']['services-content'];
copy[6].textContent = siteContent['main-content']['product-h4'];
copy[7].textContent = siteContent['main-content']['product-content'];
copy[8].textContent = siteContent['main-content']['vision-h4'];
copy[9].textContent = siteContent['main-content']['vision-content'];

let middleImage = document.getElementById('middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];

let contactSection = document.querySelectorAll('.contact *');
contactSection[0].textContent = siteContent['contact']['contact-h4'];
contactSection[1].textContent = siteContent['contact']['address'];
contactSection[2].textContent = siteContent['contact']['phone'];
contactSection[3].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

let newTopLink = document.createElement('a');
newTopLink.href = '#';
newTopLink.textContent = 'Top';
let newNavLink = document.createElement('a');
newNavLink.href = '#';
newNavLink.textContent = 'Neat';

let parentElement = document.querySelector('footer');
parentElement.append(newTopLink);

parentElement = document.querySelector('nav');
parentElement.prepend(newNavLink);