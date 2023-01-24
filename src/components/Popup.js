export default class Popup {
  constructor(popup) {
    this.popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupByClick = this._closePopupByClick.bind(this);
  }

  open() {
    this.popup.classList.add("popup_show");
    // this.setEventListeners();
    document.addEventListener("keydown", this._handleEscClose);
    this.popup.addEventListener("mousedown", this._closePopupByClick);
  }

  close() {
    this.popup.classList.remove("popup_show");
    // this.removeEventListeners();
    document.removeEventListener("keydown", this._handleEscClose);
    this.popup.removeEventListener("mousedown", this._closePopupByClick);
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

  // setEventListeners() {
  //   this.popup.addEventListener("mousedown", this._closePopupByClick);
  //     document.addEventListener("keydown", this._handleEscClose);
  // }

  // removeEventListeners() {
  //   this.popup.removeEventListener("mousedown", this._closePopupByClick);
  //   document.removeEventListener("keydown", this._handleEscClose);
  // }
}
