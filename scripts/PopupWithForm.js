import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._popupForm = this.popup.querySelector(".popup__form");
    this._inputList = Array.from(this._popupForm.querySelectorAll(".popup__input"));
    this._formInputData = {};
  }

  _getInputValues() {
    this._inputList.forEach((inputElement) => {
      this._formInputData[inputElement.name] = inputElement.value;
    });
    return this._formInputData;
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    const formData = this._getInputValues();
    this._submitForm(formData);
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", this._submitFormHandler);
  }

  сlose() {
    this._popupForm.reset();
    super.close();
  }
}
