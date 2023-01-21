export default class Card {
  constructor(data, selectors, templateSelector, handleOpenPopup, handleDeleteClick) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._postSelector = selectors.post;
    this._postImgSelector = selectors.postImg;
    this._postLikeIconSelector = selectors.postLikeIcon;
    this._postLikeIconActiveSelector = selectors.postLikeIconActive;
    this._postDeleteSelector = selectors.postDelete;
    this._postTitleSelector = selectors.postTitle;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
    this._handleDeleteClick = handleDeleteClick;
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
    this._setLikes();

    if (this._ownerId !== this._userId) {
      this._postDeleteSelector.style.display = "none";
    }

    return this._element;
  }

  _setLikes() {
    const likesCounter = this._element.querySelector(".post__likes-counter");
    likesCounter.textContent = this._likes.length;
  }

  _setEventListeners() {
    const postLike = this._element.querySelector(this._postLikeIconSelector);
    postLike.addEventListener("click", () => this._handlePostLike(postLike));
    this._element.querySelector(this._postDeleteSelector).addEventListener("click", () => this._handleDeleteClick(this._id));
    this._postImage.addEventListener("click", () => this._handleOpenPopup(this._name, this._link));
  }

  _handlePostLike(postLike) {
    postLike.classList.toggle(this._postLikeIconActiveSelector);
  }

  deletePost() {
    this._element.remove();
    this._element = null;
  }
}
