import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._handleSubmit = submitForm;
    this._popupForm = this.popup.querySelector(".popup__form");
    this._popupInputList = Array.from(this._popupForm.querySelectorAll(".popup__input"));
    this._submitFormHandler = this._handleFormSubmit.bind(this);
    this._formInputData = {};
    this._buttonSubmit = this.popup.querySelector(".popup__button-save");
    this._defaultTextInButton = this._buttonSubmit.textContent;
  }

  renderLoadingChanges(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = "Сохранение...";
    } else {
      this._buttonSubmit.textContent = this._defaultTextInButton;
    }
  }

  _getInputValues() {
    this._popupInputList.forEach((inputElement) => {
      this._formInputData[inputElement.name] = inputElement.value;
    });
    return this._formInputData;
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    const inputData = this._getInputValues();
    this._handleSubmit(inputData);
    this._popupForm.reset();
  }

  open() {
    super.open();
    this.popup.addEventListener("submit", this._submitFormHandler);
  }

  close() {
    super.close();
    this.popup.removeEventListener("submit", this._submitFormHandler);
  }
}
