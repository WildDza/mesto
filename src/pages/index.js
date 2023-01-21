import "./index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import {
  initialCards,
  postSelectors,
  validationConfig,
  popupImage,
  popupAddPost,
  popupEdit,
  containerPosts,
  titleProfile,
  subtitleProfile,
  popupWithConfirmDelPost,
} from "../utils/constants.js";
import { api } from "../scripts/Api.js";

const iconDataEdit = document.querySelector(".profile__edit-icon");

const userNameInput = popupEdit.querySelector(".popup__input_name-area");
const userJobInput = popupEdit.querySelector(".popup__input_addictions");
const formEditUserData = document.forms["profile-form"];

const iconPostAdd = document.querySelector(".profile__add-button");

let userId;

api.getProfileInformation().then((res) => {
  console.log(res);
  userInfo.setUserInfo(res);
  userId = res._id;
});

api.getInitialCards().then((cardList) => {
  cardList.forEach((data) => {
    const postElement = createPost(data);
    postsList.addItem(postElement);
  });
});

const formAddPostData = document.forms["card-form"];

const formValidatorEditInfo = new FormValidator(validationConfig, formEditUserData);
const formValidatorAddPost = new FormValidator(validationConfig, formAddPostData);
const popupOpenImage = new PopupWithImage(popupImage);
const popupWithFormAddPost = new PopupWithForm(popupAddPost, submitPost);
const popupWithFormEdit = new PopupWithForm(popupEdit, submitEditProfile);
const userInfo = new UserInfo(titleProfile, subtitleProfile);
const postsList = new Section(
  {
    items: [],
    renderer: (item) => {
      addPost(item);
    },
  },
  containerPosts
);
const confirmDelPost = new PopupWithForm(popupWithConfirmDelPost);

postsList.render();

function createPost(data) {
  const post = new Card(data, postSelectors, "#post-template", handleOpenPopup, (_id) => {
    confirmDelPost.open();
    confirmDelPost.confirmDeleteSubmitHandler(() => {
      api.deletePost(_id).then((res) => {
        confirmDelPost.close();
        post.deletePost();
      });
    });
  });
  return post.generatePost();
}

function submitPost(data) {
  api.addPost(data.name, data.link).then((res) => {
    addPost(res);
  });
  popupWithFormAddPost.close();
}

function addPost(data) {
  const postElement = createPost(data);
  postsList.addItem(postElement);
}

function submitEditProfile(data) {
  api.editProfileInformation(data.name, data.about).then((res) => {
    userInfo.setUserInfo(res);
    popupWithFormEdit.close();
  });
}

iconDataEdit.addEventListener("click", () => {
  const { userName, userJob } = userInfo.getUserInfo();
  userNameInput.value = userName;
  userJobInput.value = userJob;
  formValidatorEditInfo.resetValidation();
  popupWithFormEdit.open();
});

iconPostAdd.addEventListener("click", function () {
  popupWithFormAddPost.open();
  formValidatorAddPost.toggleButtonState();
});

function handleOpenPopup(name, link) {
  popupOpenImage.open(name, link);
}

confirmDelPost.setEventListeners();

formValidatorEditInfo.enableValidation();
formValidatorAddPost.enableValidation();
