export class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._popupInput = config.popupInput;
    this._popupInputTypeError = config.popupInputTypeError;
    this._popupInputErrorActive = config.popupInputErrorActive;
    this._submitButton = config.submitButton;
    this._submitButtonInactive = config.submitButtonInactive;
    this._popupInputList = Array.from(this._form.querySelectorAll(this._popupInput));
    this._popupButtonSubmit = this._form.querySelector(this._submitButton);
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation = () => {
    this._toggleButtonState();
    this._popupInputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._popupInputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  disabledSubmit = () => {
    this._toggleButtonState();
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._popupButtonSubmit.disabled = false;
      this._popupButtonSubmit.classList.remove(this._submitButtonInactive);
    } else {
      this._popupButtonSubmit.classList.add(this._submitButtonInactive);
      this._popupButtonSubmit.disabled = true;
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._popupInputTypeError);
    errorElement.classList.add(this._popupInputErrorActive);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._popupInputTypeError);
    errorElement.classList.remove(this._popupInputErrorActive);
    errorElement.textContent = "";
  }

  _hasInvalidInput() {
    return this._popupInputList.every((popupInputElement) => popupInputElement.validity.valid);
  }
}
