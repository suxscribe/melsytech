export const validateForms = () => {
  // validate forms
  var contactForm = document.querySelectorAll('.form');

  if (contactForm) {
    contactForm.forEach((form) => {
      // check inputs on focusout
      form.querySelectorAll('.validate--empty').forEach((input) => {
        input.addEventListener('focusout', () => {
          if (checkIfEmpty(input)) return;
          return true;
        });
      });

      //check email on focusout
      const inputEmail = form.querySelector('.validate--email');
      if (inputEmail) {
        inputEmail.addEventListener('focusout', () => {
          if (checkIfEmpty(inputEmail)) return;
          if (checkIfEmail(inputEmail)) return;
          return true;
        });
      }

      // check phone on foucsout
      const inputPhone = form.querySelector('.validate--phone');
      if (inputPhone) {
        inputPhone.addEventListener('focusout', () => {
          if (checkIfEmpty(inputPhone)) return;
          if (checkIfOnlyDigits(inputPhone)) return;
          return true;
        });
      }

      // check all fields before submit
      // form.addEventListener('submit', (event) => {
      //   //prevent default submit
      //   event.preventDefault();
      //   console.log('submit clicked');

      //   form.querySelectorAll('.validate--empty').forEach((input) => {
      //     if (checkIfEmpty(input)) return;
      //     return true;
      //   });

      //   const inputEmail = form.querySelector('.validate--email');
      //   if (inputEmail) {
      //     if (checkIfEmpty(inputEmail)) return;
      //     if (checkIfEmail(inputEmail)) return;
      //     return true;
      //   }

      //   const inputPhone = form.querySelector('.validate--phone');
      //   if (inputPhone) {
      //     if (checkIfEmpty(inputPhone)) return;
      //     if (checkIfOnlyDigits(inputPhone)) return;
      //     return true;
      //   }

      //   //todo check all inputs (like above) and do something with it
      // });
    });

    document.addEventListener(
      'invalid',
      (function() {
        console.log('invalid');

        return function(e) {
          console.log(e);

          //prevent the browser from showing default error bubble / hint
          e.preventDefault();
          // optionally fire off some custom validation handler
          checkAllFields(e.target.form);
        };
      })(),
      true
    );

    const checkAllFields = (form) => {
      form.querySelectorAll('.validate--empty').forEach((input) => {
        if (checkIfEmpty(input)) return;
        return true;
      });

      const inputEmail = form.querySelector('.validate--email');
      if (inputEmail) {
        if (checkIfEmpty(inputEmail)) return;
        if (checkIfEmail(inputEmail)) return;
        return true;
      }

      const inputPhone = form.querySelector('.validate--phone');
      if (inputPhone) {
        if (checkIfEmpty(inputPhone)) return;
        if (checkIfOnlyDigits(inputPhone)) return;
        return true;
      }
    };

    const checkIfEmpty = (field) => {
      if (isEmpty(field.value.trim())) {
        setInvalid(field, 'Обязательное поле');
        return true;
      } else {
        setValid(field);
        return false;
      }
    };

    const isEmpty = (value) => {
      if (value === '') return true;
      return false;
    };

    const setInvalid = (field, message) => {
      field.classList.add('invalid');
      field.nextElementSibling.innerHTML = message;
      field.nextElementSibling.className = 'form__note form__note--red';
    };
    const setValid = (field) => {
      field.classList.remove('invalid');
      field.nextElementSibling.innerHTML = '';
      field.nextElementSibling.className = 'form__note';
    };

    const checkIfOnlyLetters = (field) => {
      if (/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
      } else {
        setInvalid(field, 'Должно содержать только буквы');
      }
    };
    const checkIfOnlyDigits = (field) => {
      if (
        /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/.test(
          field.value
        )
      ) {
        setValid(field);
        return true;
      } else {
        setInvalid(
          field,
          'Пожалуйста введите номер телефона в формате +XXXXXXXXXX'
        );
      }
    };
    const checkIfEmail = (field) => {
      if (
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          field.value
        )
      ) {
        setValid(field);
        return true;
      } else {
        setInvalid(field, 'Должно быть в формате email@domain.dom');
      }
    };
  }
};
