import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPostImg = this.popup.querySelector(".popup__card-image");
    this._popupPostTitle = this.popup.querySelector(".popup__card-title");
  }

  open(link, name) {
    this._popupPostImg.src = link;
    this._popupPostImg.alt = name;
    this._popupPostTitle.textContent = name;
    super.open();
  }
}
