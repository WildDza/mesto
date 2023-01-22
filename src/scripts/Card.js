export default class Card {
  constructor(data, selectors, templateSelector, handleOpenPopup, handleDeleteClick, userId, handleLikeClick) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._postSelector = selectors.post;
    this._postImgSelector = selectors.postImg;
    this._postLikeIconSelector = selectors.postLikeIcon;
    this._postLikeIconActiveSelector = selectors.postLikeIconActive;
    this._postDeleteSelector = selectors.postDelete;
    this._postTitleSelector = selectors.postTitle;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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
    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._element.querySelector(".post__delete").style.display = "none";
    }

    return this._element;
  }

  setLikes(likes) {
    this._likes = likes;
    const likesCounter = this._element.querySelector(".post__likes-counter");

    if (!this._likes.length) {
      likesCounter.textContent = "";
    } else {
      likesCounter.textContent = this._likes.length;
    }

    this._handlePostLike();
  }

  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  _setEventListeners() {
    this._element.querySelector(this._postLikeIconSelector).addEventListener("click", () => this._handleLikeClick(this._id));
    this._element.querySelector(this._postDeleteSelector).addEventListener("click", () => this._handleDeleteClick(this._id));
    this._postImage.addEventListener("click", () => this._handleOpenPopup(this._name, this._link));
  }

  _handlePostLike() {
    if (this.isLiked()) {
      this._element.querySelector(this._postLikeIconSelector).classList.add(this._postLikeIconActiveSelector);
    } else {
      this._element.querySelector(this._postLikeIconSelector).classList.remove(this._postLikeIconActiveSelector);
    }
  }

  deletePost() {
    this._element.remove();
    this._element = null;
  }
}
