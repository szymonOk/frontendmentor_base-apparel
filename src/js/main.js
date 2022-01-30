const input = document.querySelector('.main__send-input');
const btn = document.querySelector('.main__send-btn');
const main = document.querySelector('.main__send');
const form = document.querySelector('form');

const sendMail = () => {
  form.submit();
};

const checkEmail = (mail) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(mail)) {
    sendMail();
  } else {
    main.classList.add('error');
  }
};

const checkInput = (e) => {
  e.preventDefault();

  if (input.value !== '') {
    main.classList.remove('error');
    checkEmail(input.value);
  } else {
    main.classList.add('error');
  }
};

btn.addEventListener('click', checkInput);
