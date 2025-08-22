import {
  inputInformation,
  items,
  radioInputsInform,
} from './constants/index.js';

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Weather map';
document.body.appendChild(title);
const form = document.createElement('form');
form.classList.add('form');

const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');

function createInputs(data) {
  const inputField = document.createElement('div');
  inputField.classList.add('input-field');

  data.forEach((data) => {
    const label = document.createElement('label');
    label.classList.add('set-label');
    label.textContent = data.label;

    const input = document.createElement('input');
    input.classList.add('set-input');

    input.type = data.type;
    input.id = data.id;

    const container = document.createElement('div');
    container.classList.add('container');

    container.appendChild(label);
    container.appendChild(input);
    inputField.appendChild(container);

    let cityName, cityId;
    if (data.id === 'cityName') {
      cityName = input;
    } else if (data.id === 'cityId') {
      cityId = input;
    }
  });
  return inputField;
}
inputContainer.appendChild(createInputs(inputInformation));
form.appendChild(inputContainer);

const radioInputs = document.createElement('div');
radioInputs.classList.add('input-container');

function createRadioInputs(data) {
  const inputRadioField = document.createElement('div');
  inputRadioField.classList.add('input-radio-field');

  data.forEach((data) => {
    const label = document.createElement('label');
    label.classList.add('radio-label');
    label.textContent = data.label;

    const input = document.createElement('input');
    input.type = data.type;
    input.name = data.name;

    const radioContainer = document.createElement('div');
    radioContainer.classList.add('radio-container');

    radioContainer.appendChild(label);
    radioContainer.appendChild(input);

    inputRadioField.appendChild(radioContainer);
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

    const outputContainer = document.createElement('div');
    outputContainer.classList.add('output-container');

    outputContainer.appendChild(title);
    outputContainer.appendChild(value);

    indicators.appendChild(outputContainer);
  });
  return indicators;
}
outputValue.appendChild(createTextValue(items));
form.appendChild(outputValue);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

const okButton = document.createElement('button');
okButton.classList.add('set-button');
okButton.textContent = 'OK';

const cancelButton = document.createElement('button');
cancelButton.classList.add('set-button');
cancelButton.textContent = 'Cancel';

buttonContainer.appendChild(okButton);
buttonContainer.appendChild(cancelButton);

form.appendChild(buttonContainer);
document.body.appendChild(form);

function toggleInputs(e) {
  if (e.target === cityName) {
    cityId.disabled = true;
    cityName.disabled = false;
  } else if (e.target === cityId) {
    cityName.disabled = true;
    cityId.disabled = false;
  }
}
cityName.addEventListener('focus', toggleInputs);
cityId.addEventListener('focus', toggleInputs);

const apiKey = '8455cc7554e44eaa37df3bc75ce8e06c';

async function getWeather(event) {
  event.preventDefault();

  const cityNameInput = document.getElementById('cityName').value.trim();
  const cityIdInput = document.getElementById('cityId').value.trim();

  let url = '';
  if (cityNameInput) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=${apiKey}&units=metric`;
  } else if (cityIdInput) {
    url = `https://api.openweathermap.org/data/2.5/weather?id=${cityIdInput}&appid=${apiKey}&units=metric`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();

    const temperature = `${data.main.temp}°C`;
    const windSpeed = `${data.wind.speed} м/с`;
    const humidity = `${data.main.humidity}%`;

    const values = document.querySelectorAll('.set-value');

    if (values.length >= 3) {
      values[0].textContent = temperature;
      values[1].textContent = windSpeed;
      values[2].textContent = humidity;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
okButton.addEventListener('click', getWeather);
