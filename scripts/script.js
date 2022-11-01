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
const nameImg = document.querySelector(".popup__input_name-img");
const linkImg = document.querySelector(".popup__input_url-img");
const containerPosts = document.querySelector(".posts");
const postTemplate = document.querySelector("#post-template").content;

const initialCards = cards;

function saveValueUserPopup() {
  userNameInput.value = titleProfile.textContent;
  userJobInput.value = subtitleProfile.textContent;
}

function resetValuePostsPopup() {
  imgNameInput.reset;
  imgUrlInput.reset;
}

function openPopup(popup) {
  popup.classList.add("popup_show");
}

function closePopup(popup) {
  popup.classList.remove("popup_show");
}

function openEditPopup() {
  openPopup(popupEdit);
  saveValueUserPopup();
}

function openAddPostPopup() {
  openPopup(popupAddPost);
  resetValuePostsPopup();
}
function openImgPopup(event) {
  openPopup(popupImage);
  const target = event.target;
  imgInPopup.src = target.src;
  imgInPopup.alt = target.alt;
  titleImgInPopup.textContent = target.alt;
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
  nameImg.value = "";
  linkImg.value = "";
  closePopup(popupAddPost);
}

const setEventListener = (postElement) => {
  const buttonDeletePost = postElement.querySelector(".post__delete");
  buttonDeletePost.addEventListener("click", deletePost);
  const imgOpenPopup = postElement.querySelector(".post__img");
  imgOpenPopup.addEventListener("click", openImgPopup);
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

formEditUserData.addEventListener("submit", handleEditUserSubmit);

formAddPostData.addEventListener("submit", handleAddPostSubmit);

iconDataEdit.addEventListener("click", openEditPopup);
iconPostAdd.addEventListener("click", openAddPostPopup);
popupEditCloseIcon.addEventListener("click", closeEditPopup);
popupAddPostCloseIcon.addEventListener("click", closeAddPostPopup);
popupImgCloseIcon.addEventListener("click", closeImgPopup);
