export default class Popup {
  constructor(popup) {
    this.popup = popup;
  }

  open() {
    this.popup.classList.add("popup_show");
    this.setEventListeners();
  }

  close() {
    this.popup.classList.remove("popup_show");
    this.removeEventListeners();
  }

  _handleEscClose() {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closePopupByClick(evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
      this.close();
    }
  }

  setEventListeners() {
    this.popup.addEventListener("click", this._closePopupByClick);
    document.addEventListener("keydown", this._handleEscClose);
  }

  removeEventListeners() {
    this.popup.removeEventListener("click", this._closePopupByClick);
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
