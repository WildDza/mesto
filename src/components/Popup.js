export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupByClick = this._closePopupByClick.bind(this);
  }

  open() {
    this.popup.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popup.classList.remove("popup_show");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    this.popup.addEventListener("mousedown", this._closePopupByClick);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closePopupByClick(evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
      this.close();
    }
  }
}
