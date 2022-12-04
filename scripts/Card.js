export class Card {
  constructor(data, selectors, templateSelector, handleOpenPopup) {
    this._link = data.link;
    this._name = data.name;
    this._post = selectors.post;
    this._postImg = selectors.postImg;
    this._postLikeIcon = selectors.postLikeIcon;
    this._postLikeIconActive = selectors.postLikeIconActive;
    this._postDelete = selectors.postDelete;
    this._postTitle = selectors.postTitle;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(this._post).cloneNode(true);
    return cardElement;
  }

  generatePost() {
    this._element = this._getTemplate();
    this._postImage = this._element.querySelector(this._postImg);
    this._setEventListeners();
    this._postImage.src = this._link;
    this._element.querySelector(this._postTitle).textContent = this._name;
    this._postImage.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    const postLike = this._element.querySelector(this._postLikeIcon);
    postLike.addEventListener("click", () => this._handlePostLike(postLike));
    this._element.querySelector(this._postDelete).addEventListener("click", () => this._handlePostDelete());
    this._postImage.addEventListener("click", () => this._handleOpenPopup(this._name, this._link));
  }

  _handlePostLike(postLike) {
    postLike.classList.toggle(this._postLikeIconActive);
  }

  _handlePostDelete() {
    this._element.remove();
  }
}
