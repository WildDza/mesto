const editPopup = document.querySelector(".popup_edit");
const addPostPopup = document.querySelector(".popup_add-post");
const imagePopup = document.querySelector(".popup_open-image");

const closeEditPopupIcon = editPopup.querySelector(".popup__close-icon");
const closeAddPostPopupIcon = addPostPopup.querySelector(".popup__close-icon");
const closeImagePopupIcon = imagePopup.querySelector(".popup__close-icon");

const editDataIcon = document.querySelector(".profile__edit-icon");
const addPostIcon = document.querySelector(".profile__add-button");
const imageForOpenPopup = document.querySelector(".post__img");

const saveAndHidePopupButton = document.querySelector(".popup__button-save");

const editForm = editPopup.querySelector(".popup__form-edit");
const addPostForm = addPostPopup.querySelector(".popup__form-add-post");

const nameInput = document.querySelector(".popup__input_name-area");
const jobInput = document.querySelector(".popup__input_addictions");
const imgNameInput = document.querySelector(".popup__input_name-img");
const imgUrlInput = document.querySelector(".popup__input_url-img");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const imgName = document.querySelector(".post__title");
const imgNameInPopup = document.querySelector(".popup__image-title");
const imgInPopup = document.querySelector(".popup__image");
const postsContainer = document.querySelector(".posts");
const postTemplate = document.querySelector("#post-template").content;

const initialCards = cards;

function savedValueUserPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function emptyValuePostsPopup() {
  imgNameInput.value = "";
  imgUrlInput.value = "";
}

function openEditPopup() {
  editPopup.classList.add("popup_show");
  savedValueUserPopup();
}
function openAddPostPopup() {
  addPostPopup.classList.add("popup_show");
  emptyValuePostsPopup();
}
function openImgPopup(event) {
  imagePopup.classList.add("popup_show");
  const target = event.target;
  imgInPopup.src = target.src;
  imgInPopup.alt = target.alt;
  imgNameInPopup.textContent = target.alt;
}

function closeEditPopup() {
  editPopup.classList.remove("popup_show");
}

function closeAddPostPopup() {
  addPostPopup.classList.remove("popup_show");
}

function closeImgPopup() {
  imagePopup.classList.remove("popup_show");
}

function valueToUserInfo() {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

const setEventListener = (postElement) => {
  const deletePostBtn = postElement.querySelector(".post__delete");
  deletePostBtn.addEventListener("click", deletePost);
  const openImage = postElement.querySelector(".post__img");
  openImage.addEventListener("click", openImgPopup);
};

const deletePost = (event) => {
  const target = event.target;
  const currentPostItemElement = target.closest(".post");
  currentPostItemElement.remove();
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

  postsContainer.prepend(postElement);
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

  postsContainer.prepend(postElement);
});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  valueToUserInfo();
  editPopup.classList.remove("popup_show");
});

addPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const imgName = document.querySelector(".popup__input_name-img");
  const imgLink = document.querySelector(".popup__input_url-img");

  addPosts(imgName.value, imgLink.value);
  imgName.value = "";
  imgLink.value = "";

  addPostPopup.classList.remove("popup_show");
});

editDataIcon.addEventListener("click", openEditPopup);
addPostIcon.addEventListener("click", openAddPostPopup);

closeEditPopupIcon.addEventListener("click", closeEditPopup);
closeAddPostPopupIcon.addEventListener("click", closeAddPostPopup);
closeImagePopupIcon.addEventListener("click", closeImgPopup);
