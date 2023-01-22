import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._popupForm = this.popup.querySelector(".popup__form");
    this._popupInputList = Array.from(this._popupForm.querySelectorAll(".popup__input"));
    this._submitFormHandler = this._submitFormHandler.bind(this);
    this._formInputData = {};
    this._textInButton = this.popup.querySelector(".popup__button-save");
    this._defaultTextInButton = this._textInButton.textContent;
  }

  renderLoadingChanges(isLoading) {
    if (isLoading) {
      this._textInButton.textContent = "Сохранение...";
    } else {
      this._textInButton.textContent = this._defaultTextInButton;
    }
  }

  _getInputValues() {
    this._popupInputList.forEach((inputElement) => {
      this._formInputData[inputElement.name] = inputElement.value;
    });
    return this._formInputData;
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    const inputData = this._getInputValues();
    this._submitForm(inputData);
    this._popupForm.reset();
  }

  confirmDeleteSubmitHandler(newSubmitHandler) {
    this._submitForm = newSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", this._submitFormHandler);
  }
}
