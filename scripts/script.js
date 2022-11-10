const popupEdit = document.querySelector(".popup_edit");
const popupAddPost = document.querySelector(".popup_add-post");
const popupImage = document.querySelector(".popup_open-image");
const popupCloseIcon = document.querySelectorAll(".popup__close-icon");
const iconDataEdit = document.querySelector(".profile__edit-icon");
const iconPostAdd = document.querySelector(".profile__add-button");
const formEditUserData = document.forms["profile-form"];
const formAddPostData = document.forms["card-form"];
const userNameInput = document.querySelector(".popup__input_name-area");
const userJobInput = document.querySelector(".popup__input_addictions");
const titleProfile = document.querySelector(".profile__title");
const subtitleProfile = document.querySelector(".profile__subtitle");
const titleImgInPopup = document.querySelector(".popup__image-title");
const imgInPopup = document.querySelector(".popup__image");
const nameImg = document.querySelector(".popup__input_name-img");
const linkImg = document.querySelector(".popup__input_url-img");
const containerPosts = document.querySelector(".posts");
const postTemplate = document.querySelector("#post-template").content;

const initialCards = cards;

function saveValueUserPopup() {
  userNameInput.value = titleProfile.textContent;
  userJobInput.value = subtitleProfile.textContent;
}

function openPopup(popup) {
  popup.classList.add("popup_show");
  document.addEventListener("keydown", handleClosePopupEsc);
  popup.addEventListener("mousedown", handleOverlayClosePopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_show");
  document.removeEventListener("keydown", handleClosePopupEsc);
  popup.removeEventListener("mousedown", handleOverlayClosePopup);
}

function openEditPopup() {
  openPopup(popupEdit);
  saveValueUserPopup();
  resetValidate();
}

function openAddPostPopup() {
  openPopup(popupAddPost);
  resetValidate();
}
function openImgPopup(src, alt) {
  openPopup(popupImage);
  imgInPopup.src = src;
  imgInPopup.alt = alt;
  titleImgInPopup.textContent = alt;
}

function closeEditPopup() {
  closePopup(popupEdit);
}

function closeAddPostPopup() {
  closePopup(popupAddPost);
}

function closeImgPopup() {
  closePopup(popupImage);
}

function getValueToUserInfo() {
  titleProfile.textContent = userNameInput.value;
  subtitleProfile.textContent = userJobInput.value;
}

function handleEditUserSubmit(event) {
  event.preventDefault();
  getValueToUserInfo();
  closePopup(popupEdit);
}

function handleAddPostSubmit(event) {
  event.preventDefault();
  renderPost({ name: nameImg.value, link: linkImg.value });
  event.target.reset();
  closePopup(popupAddPost);
}

function handleClosePopupEsc(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_show");
    closePopup(openedPopup);
  }
}

function handleOverlayClosePopup(element) {
  if (element.target === element.currentTarget) {
    closePopup(element.target);
  }
}

const setEventListener = (postElement) => {
  const buttonDeletePost = postElement.querySelector(".post__delete");
  buttonDeletePost.addEventListener("click", deletePost);

  const imgOpenPopup = postElement.querySelector(".post__img");
  imgOpenPopup.addEventListener("click", () =>
    openImgPopup(imgOpenPopup.src, imgOpenPopup.alt)
  );

  const iconLike = postElement.querySelector(".post__like-icon");
  iconLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("post__like-icon_active");
  });
};

const deletePost = (event) => {
  const target = event.target;
  const postCurrent = target.closest(".post");
  postCurrent.remove();
};

const createPost = (post) => {
  const postElement = postTemplate.querySelector(".post").cloneNode(true);
  const postImg = postElement.querySelector(".post__img");
  postElement.querySelector(".post__title").textContent = post.name;
  postImg.src = post.link;
  postImg.alt = post.name;
  setEventListener(postElement);
  return postElement;
};

const renderPost = (post) => {
  const postElement = createPost(post);
  containerPosts.prepend(postElement);
};

initialCards.forEach(renderPost);

popupCloseIcon.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

formEditUserData.addEventListener("submit", handleEditUserSubmit);
formAddPostData.addEventListener("submit", handleAddPostSubmit);

iconDataEdit.addEventListener("click", openEditPopup);
iconPostAdd.addEventListener("click", openAddPostPopup);
