export class FormValidator {
  constructor(data, popup) {
    this._popup = popup;
    this._popupForm = data.popupForm;
    this._popupInput = data.popupInput;
    this._popupInputTypeError = data.popupInputTypeError;
    this._popupInputErrorActive = data.popupInputErrorActive;
    this._submitButton = data.submitButton;
    this._submitButtonInactive = data.submitButtonInactive;
  }

  enableValidation() {
    const formsList = Array.from(document.querySelectorAll(this._popupForm));
    formsList.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  }

  resetValidation = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(this._popupInput));
    const buttonElement = formElement.querySelector(this._submitButton);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      this._hideInputError(formElement, inputElement);
    });
  };

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._popupInput));
    const buttonElement = formElement.querySelector(this._submitButton);
    this._toggleButtonState(inputList, buttonElement);
    formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState(inputList, buttonElement);
      }, 0);
    });
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._submitButtonInactive);
      buttonElement.setAttribute("disabled", true);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this._submitButtonInactive);
    }
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._popupInputTypeError);
    errorElement.classList.add(this._popupInputErrorActive);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._popupInputTypeError);
    errorElement.classList.remove(this._popupInputErrorActive);
    errorElement.textContent = "";
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputList) => {
      return !inputList.validity.valid;
    });
  }
}
