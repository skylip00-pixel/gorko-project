const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
const contactForm = document.querySelector('#contact-form');
const phoneInput = document.querySelector('#phone');
const formStatus = document.querySelector('#form-status');

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
}

menuButton.addEventListener('click', function () {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});

navigation.addEventListener('click', function (event) {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

phoneInput.addEventListener('input', function () {
  phoneInput.setCustomValidity('');
  formStatus.textContent = '';
});

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const digits = phoneInput.value.replace(/\D/g, '');

  if (digits.length < 10 || digits.length > 15) {
    phoneInput.setCustomValidity('Введите номер телефона: от 10 до 15 цифр.');
    phoneInput.reportValidity();
    return;
  }

  formStatus.textContent =
    'Отправка заявки пока не подключена. Позвоните нам: +7 999 999-99-99.';
});


