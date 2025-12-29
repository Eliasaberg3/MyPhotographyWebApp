document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = 'Thank you for your message! (This is a demo form.)';
    this.reset();
});