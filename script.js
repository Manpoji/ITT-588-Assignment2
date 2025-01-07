
function updateDateTime() {
  const now = new Date();
  document.getElementById('dateTime').textContent = now.toLocaleString();
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  alert('Thank you for your message! We will get back to you soon.');

  this.reset();
});