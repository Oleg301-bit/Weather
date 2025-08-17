import {
  inputInformation,
  items,
  radioInputsInform,
} from './constants/index.js';
const form = document.createElement('form');
form.classList.add('form');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Weather map';
form.appendChild(title);

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

function createInputs(data) {
  const inputField = document.createElement('div');
  inputField.classList.add('input-field');

  data.forEach((data) => {
    const label = document.createElement('label');
    label.textContent = data.label;

    const input = document.createElement('input');
    input.type = data.type;
    input.id = data.id;

    inputField.appendChild(label);
    inputField.appendChild(input);
  });
  return inputField;
}
inputContainer.appendChild(createInputs(inputInformation));
form.appendChild(inputContainer);

const radioInputs = document.createElement('div');
radioInputs.classList.add('input-container');

function createRadioInputs(data) {
  const inputRadioField = document.createElement('div');
  inputRadioField.classList.add('input-field');

  data.forEach((data) => {
    const label = document.createElement('label');
    label.textContent = data.label;

    const input = document.createElement('input');
    input.type = data.type;
    input.name = data.name;

    inputRadioField.appendChild(label);
    inputRadioField.appendChild(input);
  });
  return inputRadioField;
}
radioInputs.appendChild(createRadioInputs(radioInputsInform));
form.appendChild(radioInputs);

const outputValue = document.createElement('div');
outputValue.classList.add('input-indicators-container');

function createTextValue() {
  const indicators = document.createElement('div');
  indicators.classList.add('indicator-container');

  items.forEach((item) => {
    const title = document.createElement('p');
    title.classList.add('set-title');
    title.textContent = item.title;
    const value = document.createElement('span');
    value.classList.add('set-value');
    value.textContent = item.value;
    indicators.appendChild(title);
    indicators.appendChild(value);
  });
  return indicators;
}
outputValue.appendChild(createTextValue(items));
form.appendChild(outputValue);

const okButton = document.createElement('button');
okButton.classList.add('set-button');
okButton.textContent = 'OK';

const cancelButton = document.createElement('button');
cancelButton.classList.add('set-button');
cancelButton.textContent = 'Cancel';

form.appendChild(okButton);
form.appendChild(cancelButton);
document.body.appendChild(form);
