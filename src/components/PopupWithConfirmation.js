import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, handleConfirm, selector) {
    super(popup);
    this._handleConfirmDel = handleConfirm;
    this._buttonSave = this.popup.querySelector(selector);
    this._defaultTextInButton = this._buttonSave.textContent;
  }

  renderLoadingChanges(isLoading) {
    if (isLoading) {
      this._buttonSave.textContent = "Удаление...";
    } else {
      this._buttonSave.textContent = this._defaultTextInButton;
    }
  }

  open(data) {
    super.open();
    this._data = data;
  }

  close() {
    super.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._buttonSave.addEventListener("mousedown", () => this._handleConfirmDel(this._data));
  }
}
