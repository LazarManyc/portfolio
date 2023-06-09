'use strict';

//  nav hover

const navhovereffect = function (e) {
  const menu = document.querySelector('.nav-menu-open');
  if (menu !== null) return;
  if (e.target.classList.contains('main-nav-link')) {
    const currlink = e.target;
    const nav = currlink.closest('.nav-bar');
    const links = nav.querySelectorAll('.main-nav-link');
    const logo = nav.querySelector('.navbar-logo-box');

    links.forEach((link) => {
      if (link !== currlink) {
        link.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

document
  .querySelector('.nav-bar')
  .addEventListener('mouseover', navhovereffect.bind(0.5));
document
  .querySelector('.nav-bar')
  .addEventListener('mouseout', navhovereffect.bind(1));

// scroll linkovi

const scroll = function (e) {
  const href = e.target.getAttribute('href');
  const targetElement = document.querySelector(href);

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = targetPosition - 100;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

document.querySelectorAll('.btn-scroll').forEach((btn) =>
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    scroll(e);
  })
);

document.querySelector('.main-nav').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('main-nav-link')) {
    scroll(e);
  }
});

// sticky navbar
const nav = document.querySelector('.nav-bar');
const hero_section = document.querySelector('.hero-section');

const sticky = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const heroObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: '-96px',
});

heroObserver.observe(hero_section);

// navbar effect
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.main-nav-link');

const activesection = function (event) {
  //   console.log(event[0].target);

  //   console.log(event[0].target, event[0].isIntersecting);
  if (event[0].isIntersecting) {
    links.forEach((link) => {
      link.classList.remove('active-section');
    });
    const currsection = document.querySelector(
      `a[href=".${event[0].target.className}"]`
    );
    if (!currsection) return;
    currsection.classList.add('active-section');
  }
};

const sectionObserver = new IntersectionObserver(activesection, {
  root: null,
  threshold: 0,
  rootMargin: '-96px',
});
sections.forEach((section) => sectionObserver.observe(section));

// mobile nav menu
document.querySelector('.menu-open-btn').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('nav-menu-open');
});
document.querySelectorAll('.main-nav-link').forEach((link) =>
  link.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('nav-menu-open');
    document.querySelector('.input-menu').checked = false;
  })
);

// reveal sections
const allSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
};

const revealSectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSections.forEach((section) => {
  section.classList.add('section--hidden');
  revealSectionObserver.observe(section);
});

// load more btn
const btn = document.querySelector('.load-more');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const html = `
<figure class="single-project">
<div class="flex-box-2">
  <div class="project-image-box">
  <picture>
  <source
    srcset="img/portfolio/screenshot2.webp"
    type="image/webp"
  />
  <source
    srcset="img/portfolio/screenshot2.jpg"
    type="image/jpeg"
  />
  <img
    src="img/portfolio/screenshot2.jpg"
    alt="portfolio-project"
  />
</picture>
  </div>
</div>
<div class="flex-box-2">
  <figcaption class="single-card-figcaption">
    <h3 class="heading_card_hovered heading-sec">ActiviMap</h3>
    <p class="heading_card_hovered_description">
    ActiviMap is a fitness app that allows you to easily track and log
      your workouts. With ActiviMap, you can record the type, duration,
      and location of each exercise, and view your progress over
      time on a map. Whether you're a beginner or a fitness
      enthusiast, ActiviMap is a great tool for staying motivated and
      achieving your fitness goals.
    </p>
    <a href="https://activimap.netlify.app/"
    target="_blank" class="visit-website">Visit Website &gt;</a>
  </figcaption>
</div>
</figure>
<figure class="single-project">
<div class="flex-box-2">
  <div class="project-image-box">
  <picture>
  <source
    srcset="img/portfolio/screenshot4.webp"
    type="image/webp"
  />
  <source
    srcset="img/portfolio/screenshot4.jpg"
    type="image/jpeg"
  />
  <img
    src="img/portfolio/screenshot4.jpg"
    alt="portfolio-project"
  />
</picture>
  </div>
</div>
<div class="flex-box-2">
  <figcaption class="single-card-figcaption">
    <h3 class="heading_card_hovered heading-sec">RecipeHub</h3>
    <p class="heading_card_hovered_description">
    RecipeHub is ultimate destination for over 1.000.000+
    delicious recipes from around the world! Discover
    inspiration for your meals, explore diverse cuisines,
    and enjoy cooking like never before. From simple dishes
    to gourmet creations, RecipeHub has everything you need.
    Join us and embark on a culinary journey today!
    </p>
    <a href="https://demorecipehub.netlify.app/"
    target="_blank" class="visit-website">Visit Website &gt;</a>
  </figcaption>
</div>
</figure>
<figure class="single-project">
<div class="flex-box-2">
  <div class="project-image-box">
  <picture>
  <source
    srcset="img/portfolio/screenshot6.webp"
    type="image/webp"
  />
  <source
    srcset="img/portfolio/screenshot6.jpg"
    type="image/jpeg"
  />
  <img
    src="img/portfolio/screenshot6.jpg"
    alt="portfolio-project"
  />
</picture>
  </div>
</div>
<div class="flex-box-2">
  <figcaption class="single-card-figcaption">
    <h3 class="heading_card_hovered heading-sec">Tehnomedia</h3>
    <p class="heading_card_hovered_description">
  Tehnomedia is an online store for home appliances in
                        Serbia. I have created this replica of their website to
                        provide you with the same excellent service and
                        affordable products. The website is user-friendly,
                        allowing you to make quick and secure online purchases.
                        Join thousands of satisfied customers.
    </p>
    <a href="https://tehnomedia.netlify.app/"
    target="_blank" class="visit-website">Visit Website &gt;</a>
  </figcaption>
</div>
</figure>

`;
  document.querySelector('.load-more-projects').remove();
  document
    .querySelector('.responsive-projects')
    .insertAdjacentHTML('afterend', html);
});

// email.js form
// document.querySelector('.send-mail').addEventListener('click', function (e) {
//   e.preventDefault();
//   sendMail();
// });
function sendMail() {
  const params = {
    name: document.querySelector('.input-name').value,
    email: document.querySelector('.input-email').value,
    message: document.querySelector('.input-message').value,
  };
  const serviceID = 'service_l4i727a';
  const templateID = 'template_i5np5wd';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.querySelector('.input-name').value = ''),
        (document.querySelector('.input-email').value = ''),
        (document.querySelector('.input-message').value = '');
    })
    .catch((err) => console.log(err));
}

// validacija forme

document
  .querySelector('.send-mail')
  .addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm()) {
      sendMail();
    }
  });

function validateForm() {
  let valid = true;
  const name = document.querySelector('.input-name');
  const email = document.querySelector('.input-email');
  const message = document.querySelector('.input-message');
  const errorMessages = document.querySelectorAll('.error-message');

  if (name.value.trim() === '') {
    setError(name, errorMessages[0], 'Name is required');
    valid = false;
  } else {
    clearError(name, errorMessages[0]);
  }

  if (email.value.trim() === '') {
    setError(email, errorMessages[1], 'Email is required');
    valid = false;
  } else if (!isValidEmail(email.value)) {
    setError(email, errorMessages[1], 'Email is not valid');
    valid = false;
  } else {
    clearError(email, errorMessages[1]);
  }

  if (message.value.trim() === '') {
    setError(message, errorMessages[2], 'Message is required');
    valid = false;
  } else {
    clearError(message, errorMessages[2]);
  }

  return valid;
}

function setError(input, errorElement, message) {
  input.classList.add('error');
  errorElement.innerHTML = message;
}

function clearError(input, errorElement) {
  input.classList.remove('error');
  errorElement.innerHTML = '';
}
function isValidEmail(email) {
  // regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('.send-mail').addEventListener('click', function (e) {
  e.preventDefault();

  const name = document.querySelector('.input-name').value;
  const email = document.querySelector('.input-email').value;
  const message = document.querySelector('.input-message').value;

  if (name.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (email.trim() === '') {
    alert('Please enter your email address.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }
  const params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = 'service_l4i727a';
  const templateID = 'template_i5np5wd';

  emailjs
    .send(serviceID, templateID, params)
    .then(function (res) {
      document.querySelector('.input-name').value = '';
      document.querySelector('.input-email').value = '';
      document.querySelector('.input-message').value = '';
      alert('Your message has been sent!');
    })
    .catch(function (err) {
      alert('Oops! An error occurred. Please try again later.');
      console.error('Error:', err);
    });
});
