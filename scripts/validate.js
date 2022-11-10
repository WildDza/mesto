const settings = {
  popupForm: ".popup__content-container",
  popupInput: ".popup__input",
  submitButton: ".popup__button-save",
  submitButtonInactive: "popup__button-save_inactive",
  popupInputTypeError: "popup__input_type_error",
  popupInputErrorActive: "popup__input-error_active",
};

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.popupInputTypeError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.popupInputErrorActive);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.popupInputTypeError);
  errorElement.classList.remove(settings.popupInputErrorActive);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.popupInput)
  );
  const buttonElement = formElement.querySelector(settings.submitButton);
  toggleButtonState(inputList, buttonElement, settings);

  // добавлен↓
  formElement.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, settings);
    }, 0);
  });
  //↑

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const resetValidation = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.popupInput)
  );
  const buttonElement = formElement.querySelector(settings.submitButton);
  toggleButtonState(inputList, buttonElement, settings);
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings);
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(settings.popupForm));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

const resetValidate = () => {
  const formList = Array.from(document.querySelectorAll(settings.popupForm));
  formList.forEach((formElement) => {
    resetValidation(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputList) => {
    return !inputList.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.submitButtonInactive);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(settings.submitButtonInactive);
    buttonElement.removeAttribute("disabled");
  }
};

enableValidation(settings);
