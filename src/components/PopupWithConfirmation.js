import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, handleConfirm, selector) {
    super(popup);
    this._qwe = handleConfirm.bind(this);
    this._buttonSave = this.popup.querySelector(selector);
    this._defaultTextInButton = this._buttonSave.textContent;
  }

  renderLoadingChanges(isLoading) {
    if (isLoading) {
      this._buttonSave.textContent = "Сохранение...";
    } else {
      this._buttonSave.textContent = this._defaultTextInButton;
    }
  }

  _handleConfirm() {
    // console.log(this);
    this._qwe(this._id);
  }

  open(id) {
    super.open();
    this._id = id;
    this._buttonSave.addEventListener("mousedown", this._handleConfirm.bind(this));
    // console.log(id);
  }

  close() {
    super.close();
    this._buttonSave.removeEventListener("mousedown", this._handleConfirm.bind(this));
  }
}
