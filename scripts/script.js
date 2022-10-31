const popupEdit = document.querySelector(".popup_edit");
const popupAddPost = document.querySelector(".popup_add-post");
const popupImage = document.querySelector(".popup_open-image");

const popupEditCloseIcon = popupEdit.querySelector(".popup__close-icon");
const popupAddPostCloseIcon = popupAddPost.querySelector(".popup__close-icon");
const popupImgCloseIcon = popupImage.querySelector(".popup__close-icon");

const iconDataEdit = document.querySelector(".profile__edit-icon");
const iconPostAdd = document.querySelector(".profile__add-button");
const imgPost = document.querySelector(".post__img");

const buttonSaveInPopup = document.querySelector(".popup__button-save");

const formEditUserData = popupEdit.querySelector(".popup__form-edit");
const formAddPostData = popupAddPost.querySelector(".popup__form-add-post");

const userNameInput = document.querySelector(".popup__input_name-area");
const userJobInput = document.querySelector(".popup__input_addictions");
const imgNameInput = document.querySelector(".popup__input_name-img");
const imgUrlInput = document.querySelector(".popup__input_url-img");
const titleProfile = document.querySelector(".profile__title");
const subtitleProfile = document.querySelector(".profile__subtitle");
const titlePost = document.querySelector(".post__title");
const titleImgInPopup = document.querySelector(".popup__image-title");
const imgInPopup = document.querySelector(".popup__image");
const containerPosts = document.querySelector(".posts");
const postTemplate = document.querySelector("#post-template").content;

const initialCards = cards;

function saveValueUserPopup() {
  userNameInput.value = titleProfile.textContent;
  userJobInput.value = subtitleProfile.textContent;
}

function emptyValuePostsPopup() {
  imgNameInput.value = "";
  imgUrlInput.value = "";
}

function openEditPopup() {
  popupEdit.classList.add("popup_show");
  saveValueUserPopup();
}
function openAddPostPopup() {
  popupAddPost.classList.add("popup_show");
  emptyValuePostsPopup();
}
function openImgPopup(event) {
  popupImage.classList.add("popup_show");
  const target = event.target;
  imgInPopup.src = target.src;
  imgInPopup.alt = target.alt;
  titleImgInPopup.textContent = target.alt;
}

function closeEditPopup() {
  popupEdit.classList.remove("popup_show");
}

function closeAddPostPopup() {
  popupAddPost.classList.remove("popup_show");
}

function closeImgPopup() {
  popupImage.classList.remove("popup_show");
}

function transferValueToUserInfo() {
  titleProfile.textContent = userNameInput.value;
  subtitleProfile.textContent = userJobInput.value;
}

const setEventListener = (postElement) => {
  const buttonDeletePost = postElement.querySelector(".post__delete");
  buttonDeletePost.addEventListener("click", deletePost);
  const imgOpenPopup = postElement.querySelector(".post__img");
  imgOpenPopup.addEventListener("click", openImgPopup);
};

const deletePost = (event) => {
  const target = event.target;
  const postCurrent = target.closest(".post");
  postCurrent.remove();
};

const addPosts = (nameValue, linkValue) => {
  const postElement = postTemplate.querySelector(".post").cloneNode(true);
  const postImg = postElement.querySelector(".post__img");

  postElement.querySelector(".post__title").textContent = nameValue;
  postImg.src = linkValue;
  postImg.alt = nameValue;
  postElement
    .querySelector(".post__like-icon")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("post__like-icon_active");
    });

  setEventListener(postElement);

  containerPosts.prepend(postElement);
};

initialCards.forEach(function (element) {
  const postElement = postTemplate.querySelector(".post").cloneNode(true);
  const postImg = postElement.querySelector(".post__img");

  postElement.querySelector(".post__title").textContent = element.name;
  postImg.src = element.link;
  postImg.alt = element.name;
  postElement
    .querySelector(".post__like-icon")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("post__like-icon_active");
    });

  setEventListener(postElement);

  containerPosts.prepend(postElement);
});

formEditUserData.addEventListener("submit", (event) => {
  event.preventDefault();
  transferValueToUserInfo();
  popupEdit.classList.remove("popup_show");
});

formAddPostData.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameImg = document.querySelector(".popup__input_name-img");
  const linkImg = document.querySelector(".popup__input_url-img");

  addPosts(nameImg.value, linkImg.value);
  nameImg.value = "";
  linkImg.value = "";

  popupAddPost.classList.remove("popup_show");
});

iconDataEdit.addEventListener("click", openEditPopup);
iconPostAdd.addEventListener("click", openAddPostPopup);

popupEditCloseIcon.addEventListener("click", closeEditPopup);
popupAddPostCloseIcon.addEventListener("click", closeAddPostPopup);
popupImgCloseIcon.addEventListener("click", closeImgPopup);
