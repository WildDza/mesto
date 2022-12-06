import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards, postSelectors, validationConfig } from "./constants.js";

const iconDataEdit = document.querySelector(".profile__edit-icon");
const titleProfile = document.querySelector(".profile__title");
const subtitleProfile = document.querySelector(".profile__subtitle");
const popupEdit = document.querySelector(".popup_edit");
const userNameInput = popupEdit.querySelector(".popup__input_name-area");
const userJobInput = popupEdit.querySelector(".popup__input_addictions");
const formEditUserData = document.forms["profile-form"];

const iconPostAdd = document.querySelector(".profile__add-button");
const popupAddPost = document.querySelector(".popup_add-post");
const containerPosts = document.querySelector(".posts");

const popupImage = document.querySelector(".popup_open-image");
const imgInPopup = popupImage.querySelector(".popup__image");
const titleImgInPopup = popupImage.querySelector(".popup__image-title");
const nameImg = popupAddPost.querySelector(".popup__input_name-img");
const linkImg = popupAddPost.querySelector(".popup__input_url-img");
const formAddPostData = document.forms["card-form"];

const formValidatorEditInfo = new FormValidator(validationConfig, formEditUserData);
const formValidatorAddPost = new FormValidator(validationConfig, formAddPostData);

initialCards.forEach(createPost);

function submitPost(evt) {
  evt.preventDefault();
  const data = {
    name: nameImg.value,
    link: linkImg.value,
  };
  createPost(data);
  formAddPostData.reset();
  closePopup(popupAddPost);
}

function createPost(data) {
  const post = new Card(data, postSelectors, "#post-template", handleOpenPopup);
  const postElement = post.generatePost();
  addPost(postElement);
}

function addPost(element) {
  containerPosts.prepend(element);
}

function setValuesToUserInfo() {
  titleProfile.textContent = userNameInput.value;
  subtitleProfile.textContent = userJobInput.value;
}

function setValuesToUserPopup() {
  userNameInput.value = titleProfile.textContent;
  userJobInput.value = subtitleProfile.textContent;
}

function editProfile(evt) {
  evt.preventDefault();
  setValuesToUserInfo();
  closePopup(popupEdit);
}

iconDataEdit.addEventListener("click", function () {
  setValuesToUserPopup();
  formValidatorEditInfo.resetValidation();
  openPopup(popupEdit);
});

iconPostAdd.addEventListener("click", function () {
  openPopup(popupAddPost);
  formValidatorAddPost.toggleButtonState();
});

function closePopupByClick(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
    closePopup(evt.currentTarget);
  }
}

function closePopupByKeydown(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_show");
    closePopup(popupOpen);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_show");
  popup.addEventListener("mousedown", closePopupByClick);
  document.addEventListener("keydown", closePopupByKeydown);
}

function closePopup(popup) {
  popup.classList.remove("popup_show");
  popup.removeEventListener("mousedown", closePopupByClick);
  document.removeEventListener("keydown", closePopupByKeydown);
}

function handleOpenPopup(name, link) {
  imgInPopup.src = link;
  imgInPopup.alt = name;
  titleImgInPopup.textContent = name;
  openPopup(popupImage);
}

formValidatorEditInfo.enableValidation();
formValidatorAddPost.enableValidation();
formEditUserData.addEventListener("submit", editProfile);
formAddPostData.addEventListener("submit", submitPost);
