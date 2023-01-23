import "./index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import {
  postSelectors,
  validationConfig,
  popupImage,
  popupAddPost,
  popupEdit,
  popupAvatar,
  containerPosts,
  titleProfile,
  subtitleProfile,
  popupWithConfirmDelPost,
  iconDataEdit,
  formEditUserData,
  iconPostAdd,
  formAddPostData,
  formChangeAvatar,
  buttonAvatar,
  avatar,
  userNameInput,
  userJobInput,
} from "../utils/constants.js";
import { api } from "../scripts/Api.js";

const formValidatorEditInfo = new FormValidator(validationConfig, formEditUserData);
const formValidatorAddPost = new FormValidator(validationConfig, formAddPostData);
const formValidatorChangeAvatar = new FormValidator(validationConfig, formChangeAvatar);
const popupOpenImage = new PopupWithImage(popupImage);
const popupWithFormAddPost = new PopupWithForm(popupAddPost, submitPost);
const popupWithFormEdit = new PopupWithForm(popupEdit, submitEditProfile);
const popupWithFormAvatar = new PopupWithForm(popupAvatar, submitEditAvatar);
const confirmationPopup = new PopupWithForm(popupWithConfirmDelPost);
const userInfo = new UserInfo(titleProfile, subtitleProfile, avatar);
const postsSection = new Section({ renderer: createPost }, containerPosts);

let userId;

Promise.all([api.getProfileInformation(), api.getInitialCards()])
  .then(([res, data]) => {
    userInfo.setUserInfo(res);
    userId = res._id;
    postsSection.renderItems(data);
  })
  .catch(console.log);

function createPost(data) {
  const post = new Card(
    data,
    postSelectors,
    "#post-template",
    handleOpenPopup,
    (id) => {
      confirmationPopup.open();
      confirmationPopup.confirmDeleteSubmitHandler(() => {
        api.deletePost(id).then((res) => {
          confirmationPopup.close();
          post.deletePost();
        });
      });
    },
    userId,
    (id) => {
      if (post.isLiked()) {
        api.deleteLike(id).then((res) => {
          post.setLikes(res.likes);
        });
      } else {
        api.addLike(id).then((res) => {
          post.setLikes(res.likes);
        });
      }
    }
  );
  return post.generatePost();
}

function submitPost(data) {
  popupWithFormAddPost.renderLoadingChanges(true);
  api
    .addPost(data.name, data.link)
    .then((res) => {
      addPost(res);
      popupWithFormAddPost.close();
    })
    .catch(console.log)
    .finally(() => {
      popupWithFormAddPost.renderLoadingChanges(false);
    });
}

function addPost(data) {
  const postElement = createPost(data);
  postsSection.addItem(postElement);
}

function submitEditProfile(data) {
  popupWithFormEdit.renderLoadingChanges(true);
  api
    .editProfileInformation(data.name, data.about)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupWithFormEdit.close();
    })
    .catch(console.log)
    .finally(() => {
      popupWithFormEdit.renderLoadingChanges(false);
    });
}

function submitEditAvatar(data) {
  popupWithFormAvatar.renderLoadingChanges(true);
  api
    .editUserAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupWithFormAvatar.close();
    })
    .catch(console.log)
    .finally(() => {
      popupWithFormAvatar.renderLoadingChanges(false);
    });
}

iconDataEdit.addEventListener("click", () => {
  const { userName, userJob } = userInfo.getUserInfo();
  userNameInput.value = userName;
  userJobInput.value = userJob;
  formValidatorEditInfo.resetValidation();
  popupWithFormEdit.open();
});

buttonAvatar.addEventListener("click", () => {
  popupWithFormAvatar.open();
  formValidatorChangeAvatar.toggleButtonState();
});

iconPostAdd.addEventListener("click", function () {
  popupWithFormAddPost.open();
  formValidatorAddPost.toggleButtonState();
});

function handleOpenPopup(name, link) {
  popupOpenImage.open(name, link);
}

confirmationPopup.setEventListeners();

formValidatorEditInfo.enableValidation();
formValidatorAddPost.enableValidation();
formValidatorChangeAvatar.enableValidation();
