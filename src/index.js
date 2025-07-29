import { inputInformation, items } from './constants/index.js';

const form = document.createElement('form');
form.classList.add('form');

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Weather';

form.appendChild(title);

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

function createInputs(data) {
  const inputField = document.createElement('div');
  inputField.classList.add('input-field');

  data.forEach((item) => {
    const input = document.createElement('input');
    input.classList.add('set-inputs');
    const label = document.createElement('label');

    input.type = item.type;
    input.id = item.id;
    input.name = item.name;
    label.textContent = item.label;

    inputField.appendChild(label);
    inputField.appendChild(input);
  });
  return inputField;
}
inputContainer.appendChild(createInputs(inputInformation));
form.appendChild(inputContainer);

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

form.appendChild(indicators);

const okButton = document.createElement('button');
okButton.classList.add('set-button');
okButton.textContent = 'OK';

const cancelButton = document.createElement('button');
cancelButton.classList.add('set-button');
cancelButton.textContent = 'Cancel';

form.appendChild(okButton);
form.appendChild(cancelButton);

document.body.appendChild(form);
