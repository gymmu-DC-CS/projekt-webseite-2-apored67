
const passwordInput = document.createElement('input');
const checkButton = document.createElement('button');
const resultDiv = document.createElement('div');


function initPasswordChecker() {
  const section = document.querySelectorAll('section.info')[1];
  
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Gib ein Passwort ein...';
  passwordInput.style.padding = '10px';
  passwordInput.style.width = '250px';
  passwordInput.style.marginRight = '10px';
  
  checkButton.textContent = 'Passwort prüfen';
  checkButton.style.padding = '10px 20px';
  checkButton.style.cursor = 'pointer';
  
  resultDiv.id = 'password-result';
  resultDiv.style.marginTop = '15px';
  
  const container = document.createElement('div');
  container.style.marginTop = '15px';
  container.appendChild(passwordInput);
  container.appendChild(checkButton);
  container.appendChild(resultDiv);
  
  section.appendChild(container);
  
  checkButton.addEventListener('click', checkPasswordStrength);
  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPasswordStrength();
  });
}


function checkPasswordStrength() {
  const password = passwordInput.value;
  let strength = 0;
  let feedback = '';
  
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;
  
  if (password === '') {
    resultDiv.innerHTML = '⚠️ Bitte gib ein Passwort ein!';
    resultDiv.style.color = '#999';
    return;
  }
  
  if (strength <= 2) {
    resultDiv.innerHTML = '🔴 Schwaches Passwort - Zu unsicher!';
    resultDiv.style.color = '#d32f2f';
    feedback = 'Verwende Großbuchstaben, Zahlen und Sonderzeichen!';
  } else if (strength <= 4) {
    resultDiv.innerHTML = '🟡 Mittleres Passwort - Acceptable';
    resultDiv.style.color = '#f57c00';
    feedback = 'Füge mehr Sonderzeichen und Zahlen hinzu!';
  } else {
    resultDiv.innerHTML = '🟢 Starkes Passwort - Sehr sicher!';
    resultDiv.style.color = '#388e3c';
    feedback = 'Dieses Passwort ist sicher!';
  }
  
  resultDiv.innerHTML += `<br><small>${feedback}</small>`;
}


document.addEventListener('DOMContentLoaded', initPasswordChecker);


document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('click', (e) => {
    e.preventDefault();
    const target = box.getAttribute('href');
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
  });
});