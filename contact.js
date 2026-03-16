/* ========================================
   ALI KAMAL — CONTACT FORM JS
   ======================================== */

function sendMessage() {
  const name    = document.getElementById('inputName')?.value.trim();
  const email   = document.getElementById('inputEmail')?.value.trim();
  const message = document.getElementById('inputMessage')?.value.trim();
  const feedback = document.getElementById('formFeedback');

  // Validation
  if (!name || !email || !message) {
    feedback.textContent = '⚠ Veuillez remplir tous les champs.';
    feedback.classList.remove('hidden', 'text-[#4F9EFF]');
    feedback.classList.add('text-red-400');
    return;
  }

  if (!isValidEmail(email)) {
    feedback.textContent = '⚠ Adresse email invalide.';
    feedback.classList.remove('hidden', 'text-[#4F9EFF]');
    feedback.classList.add('text-red-400');
    return;
  }

  // Open default email client
  const subject = encodeURIComponent(`Message de ${name} — Portfolio`);
  const body    = encodeURIComponent(
    `Bonjour Ali,\n\nJe m'appelle ${name} (${email}).\n\n${message}\n\nCordialement,\n${name}`
  );
  window.location.href = `mailto:alikamal0675@gmail.com?subject=${subject}&body=${body}`;

  // Feedback
  feedback.textContent = '✓ Votre client email va s\'ouvrir.';
  feedback.classList.remove('hidden', 'text-red-400');
  feedback.classList.add('text-[#4F9EFF]');

  // Clear fields
  document.getElementById('inputName').value    = '';
  document.getElementById('inputEmail').value   = '';
  document.getElementById('inputMessage').value = '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
