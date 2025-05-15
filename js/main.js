// 1. Greeting
document.addEventListener('DOMContentLoaded', () => {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' :
                hour < 18 ? 'Good afternoon' : 'Good evening';
  const el = document.getElementById('greeting') ||
             document.getElementById('greeting') ||
             document.querySelector('h2#greeting');
  if (el) el.textContent = `${greet}, welcome!`;

  // Year in footer
  document.querySelectorAll('span[id^="year"]').forEach(span => {
    span.textContent = new Date().getFullYear();
  });

  // Load theme
  if (localStorage.getItem('theme') === 'dark')
    document.body.classList.add('dark-mode');
});

// 2. Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^\+?\d{7,15}$/;
    const email = e.target.email.value, phone = e.target.phone.value;
    if (!emailRe.test(email) || !phoneRe.test(phone)) {
      alert('Enter valid email & phone');
      e.preventDefault();
    }
  });
}

// 3. Dark/light toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
  });
}

// 4. Project card toggle
document.querySelectorAll('.toggle-details').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('hidden');
  });
});
