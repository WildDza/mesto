import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, handleConfirm, selector) {
    super(popup);
    this._handleConfirmDel = handleConfirm.bind(this);
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

  _handleConfirm() {
    this._handleConfirmDel(this._id);
  }

  open(id) {
    super.open();
    this._id = id;
    this._setEventListeners();
  }

  close() {
    super.close();
  }
  _setEventListeners() {
    this._buttonSave.addEventListener("mousedown", this._handleConfirm.bind(this));
  }
}
