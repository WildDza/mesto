export default class Card {
  constructor(data, selectors, templateSelector, handleOpenPopup) {
    this._link = data.link;
    this._name = data.name;
    this._postSelector = selectors.post;
    this._postImgSelector = selectors.postImg;
    this._postLikeIconSelector = selectors.postLikeIcon;
    this._postLikeIconActiveSelector = selectors.postLikeIconActive;
    this._postDeleteSelector = selectors.postDelete;
    this._postTitleSelector = selectors.postTitle;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(this._postSelector).cloneNode(true);
    return cardElement;
  }

  generatePost() {
    this._element = this._getTemplate();
    this._postImage = this._element.querySelector(this._postImgSelector);
    this._setEventListeners();
    this._postImage.src = this._link;
    this._element.querySelector(this._postTitleSelector).textContent = this._name;
    this._postImage.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    const postLike = this._element.querySelector(this._postLikeIconSelector);
    postLike.addEventListener("click", () => this._handlePostLike(postLike));
    this._element.querySelector(this._postDeleteSelector).addEventListener("click", () => this._handlePostDelete());
    this._postImage.addEventListener("click", () => this._handleOpenPopup(this._name, this._link));
  }

  _handlePostLike(postLike) {
    postLike.classList.toggle(this._postLikeIconActiveSelector);
  }

  _handlePostDelete() {
    this._element.remove();
  }
}
