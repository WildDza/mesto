export default class Card {
  constructor(data, selectors, handleOpenPopup, handleOpenConfirmDeletePopup, userId, handleLikeClick) {
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
    this._postLikeCounterSelector = selectors.postLikeCounter;
    this._postDeleteSelector = selectors.postDelete;
    this._postTitleSelector = selectors.postTitle;
    this._templateSelector = selectors.templateSelector;
    this._handleOpenPopup = handleOpenPopup;
    this._handleOpenConfirmDeletePopup = handleOpenConfirmDeletePopup.bind(this);
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector).content.querySelector(this._postSelector).cloneNode(true);
  }
  _handleClickDeleteButton() {
    this._handleOpenConfirmDeletePopup(this);
  }

  generatePost() {
    this._element = this._getTemplate();
    this._postImage = this._element.querySelector(this._postImgSelector);
    this._setEventListeners();
    this._postImage.src = this._link;
    this._element.querySelector(this._postTitleSelector).textContent = this._name;
    this._postImage.alt = this._name;
    this._likesCounter = this._element.querySelector(this._postLikeCounterSelector);
    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._element.querySelector(this._postDeleteSelector).style.display = "none";
    }

    return this._element;
  }

  setLikes(likes) {
    this._likes = likes;

    if (!this._likes.length) {
      this._likesCounter.textContent = "";
    } else {
      this._likesCounter.textContent = this._likes.length;
    }

    this._toggleLike();
  }

  isLiked() {
    return this._likes.find((user) => user._id === this._userId);
  }

  _setEventListeners() {
    this._postLike = this._element.querySelector(this._postLikeIconSelector);
    this._postLike.addEventListener("click", () => this._handleLikeClick(this));

    this._element.querySelector(this._postDeleteSelector).addEventListener("click", this._handleClickDeleteButton.bind(this));

    this._postImage.addEventListener("click", () => this._handleOpenPopup(this._name, this._link));
  }

  _toggleLike() {
    if (this.isLiked()) {
      this._postLike.classList.add(this._postLikeIconActiveSelector);
    } else {
      this._postLike.classList.remove(this._postLikeIconActiveSelector);
    }
  }

  deletePost() {
    this._element.remove();
    this._element = null;
  }

  getPostId() {
    return this._id;
  }
}
