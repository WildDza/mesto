import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._popupForm = this.popup.querySelector(".popup__form");
    this._popupInputList = Array.from(this._popupForm.querySelectorAll(".popup__input"));
    this._submitFormHandler = this._submitFormHandler.bind(this);
    this._formInputData = {};
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

  setEventListeners() {
    super.setEventListeners();
    this.popup.addEventListener("submit", this._submitFormHandler);
  }
}
