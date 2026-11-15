const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');
const menuLinks = navigation.getElementsByTagName('a');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function closeMenu()
{navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');}

menuButton.onclick = function ()
{if (navigation.classList.contains('open'))
  {closeMenu();} else
  {navigation.classList.add('open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Закрыть меню');}};

for (let i = 0; i < menuLinks.length; i++)
{menuLinks[i].onclick = closeMenu;}

document.onkeydown = function (event)
{if (event.key === 'Escape' && navigation.classList.contains('open'))
  {closeMenu();
    menuButton.focus();}};

contactForm.oninput = function ()
{formStatus.textContent = '';};

contactForm.onsubmit = function (event)
{event.preventDefault();
  formStatus.textContent =
    'Отправка заявки пока не подключена. Позвоните нам: +7 999 999-99-99.';};
