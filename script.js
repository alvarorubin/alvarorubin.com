document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});

function updateGreeting() {
  const greetingElement = document.createElement('p');
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) {
    greeting = 'Buenos días';
  } else if (hour < 18) {
    greeting = 'Buenas tardes';
  } else {
    greeting = 'Buenas noches';
  }
  greetingElement.textContent = `${greeting}, ¡bienvenido a mi sitio web!`;
  const aboutSection = document.getElementById('acerca-de');
  aboutSection.insertBefore(greetingElement, aboutSection.firstChild);
}

updateGreeting();
