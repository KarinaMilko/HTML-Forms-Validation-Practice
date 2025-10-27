"use strict";

const form = document.querySelector(".cont-form");

const REG_FORM = {
  "user-name": /^[A-Z][a-z]*$/,
  "user-surname": /^[A-Z][a-z]{1,31}(-[A-Z][a-z]{1,31})?$/,
  "user-email": /^.+@.+$/,
  "user-phone1": /^\+380\d{2}$/,
  "user-phone2": /^\d{3}$/,
  "user-phone3": /^\d{4}$/,
  "form-textarea": /^.{1,500}$/,
};

const inputForms = document.querySelectorAll("input, textarea");

function inputHandler(e) {
  const target = e.target;
  let value = target.value;

  if (target.tagName.toLowerCase() === "textarea") {
    value = value.replace(/\s{2,}/g, " ");
    target.value = value;
  }

  if (REG_FORM[target.name].test(value)) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.remove("valid");
    target.classList.add("invalid");
  }
}

inputForms.forEach((i) => i.addEventListener("input", inputHandler));

form.onsubmit = (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    console.error("❌ Форма містить невалідні дані. Неможливо відправити.");
    return;
  }

  let messageValue = form.elements["form-textarea"].value;
  messageValue = messageValue.trim();
  messageValue = messageValue.replace(/\s{2,}/g, " ");

  const formDataObject = {
    name: form.elements["user-name"].value.trim(),
    surname: form.elements["user-surname"].value.trim(),
    email: form.elements["user-email"].value.trim(),
    phone:
      form.elements["user-phone1"].value +
      form.elements["user-phone2"].value +
      form.elements["user-phone3"].value,
    subject: form.elements["user-msg"].value,
    message: messageValue,
  };
  console.log(formDataObject);
};
