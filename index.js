"use strict";

const form = document.querySelector(".cont-form");
form.onsubmit = (e) => {
  e.preventDefault();
};

const REG_FORM = {
  "user-name": /^[A-Z][a-z]*$/,
  "user-surname": /^[A-Z][a-z]{1,31}(-[A-Z][a-z]{1,31})?$/,
  "user-email": /^.+@.+$/,
  "user-phone1": /^\+380\d{2}$/,
  "user-phone2": /^\d{3}$/,
  "user-phone3": /^\d{4}$/,
  "form-textarea": /^.{1,500}$/,
};

const inputForms = document.querySelectorAll("input");

inputForms.forEach((i) => i.addEventListener("input", inputHandler));

function inputHandler(e) {
  if (REG_FORM[e.target.name].test(e.target.value)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
}
const textArea = document.querySelector("textarea");
const textAreaClass = textArea.classList.add("form-textarea");
const resInputForm = textAreaClass.replace(/\s{2,}/g, " ");
