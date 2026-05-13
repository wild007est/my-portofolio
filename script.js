// Load semua section
fetch('home.html').then(res => res.text()).then(data => {
  document.getElementById('home-section').innerHTML = data;
});

fetch('about.html').then(res => res.text()).then(data => {
  document.getElementById('about-section').innerHTML = data;
});

fetch('project.html').then(res => res.text()).then(data => {
  document.getElementById('project-section').innerHTML = data;
});

fetch('contact.html').then(res => res.text()).then(data => {
  document.getElementById('contact-section').innerHTML = data;
});

// typing effect
document.addEventListener("DOMContentLoaded", function () {
  const text = [" Front-end Web Developer ", " Data Analyst ", " UI UX Designer "];
  let i = 0, j = 0, current = "", isDeleting = false;

  function type() {
    const el = document.querySelector('.typing');
    if (!el) return;

    if (!isDeleting) {
      current = text[i].substring(0, j++);
      
      if (j > text[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }

    } else {
      current = text[i].substring(0, j--);

      if (j < 1) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }
    }

    el.textContent = current || " ";
    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
});

function showAlert() {
  alert("Terima kasih sudah mengunjungi portfolio!");
}

const navbarCollapse = document.querySelector('.navbar-collapse');

navbarCollapse.addEventListener('show.bs.collapse', () => {
  document.body.classList.add('nav-open');
});

navbarCollapse.addEventListener('hide.bs.collapse', () => {
  document.body.classList.remove('nav-open');
});


// GLOBAL CLICK / TOUCH EFFECT
document.addEventListener('pointerdown', function(e) {

  const effect = document.createElement('span');

  effect.classList.add('click-effect');

  const size = 100;

  effect.style.width = size + 'px';
  effect.style.height = size + 'px';

  effect.style.left = (e.clientX - size / 2) + 'px';
  effect.style.top = (e.clientY - size / 2) + 'px';

  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 500);

});

// PARALLAX BACKGROUND
window.addEventListener('scroll', () => {

  const scroll = window.scrollY;

  document.querySelector('.stars').style.transform =
    `translateY(${scroll * 0.25}px)`;

  document.querySelector('.stars2').style.transform =
    `translateY(${scroll * 0.15}px)`;

  document.querySelector('.stars3').style.transform =
    `translateY(${scroll * 0.08}px)`;

});