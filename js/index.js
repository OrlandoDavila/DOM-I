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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let allA = document.querySelectorAll('a');
const arrayATags = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact'];
for (let i = 0; i < arrayATags.length; i++) {
  allA[i].textContent = arrayATags[i];
}

let otherLogo = document.getElementById("cta-img");
otherLogo.setAttribute('src', siteContent["cta"]["img-src"] )

const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

let yetAnotherLogo = document.getElementById("middle-img");
yetAnotherLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"] )

const h4s = document.querySelectorAll('h4');
const h4TextList = ['Features', 'About', 'Services', 'Product', 'Vision'];
for (let i = 0; i < h4s.length; i++) {
  h4s[i].textContent = h4TextList[i];
}

const contentP = document.querySelectorAll('.main-content p');
for (let i = 0; i < contentP.length; i++) {
  contentP[0].textContent = siteContent["main-content"]["features-content"];
  contentP[1].textContent = siteContent["main-content"]["about-content"];
  contentP[2].textContent = siteContent["main-content"]["services-content"];
  contentP[3].textContent = siteContent["main-content"]["product-content"];
  contentP[4].textContent = siteContent["main-content"]["vision-content"];
}

const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent.contact["contact-h4"];

const contactPs = document.querySelectorAll('.contact p');
for (let i = 0; i < contactPs.length; i++) {
  contactPs[0].textContent = siteContent.contact.address;       //need line break
  contactPs[1].textContent = siteContent.contact.phone;
  contactPs[2].textContent = siteContent.contact.email;
}

const foot = document.querySelector('footer');
foot.textContent = siteContent.footer["copyright"];