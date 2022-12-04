import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: "BMW 507, 1956",
    link: "https://million-wallpapers.ru/wallpapers/1/19/499402977561835/ch-rnyj-kabriolet-bmv-na-asfalte-okolo-polya.jpg",
  },
  {
    name: "Duesenberg model j534",
    link: "https://jooinn.com/images/red-vintage-car-6.jpg",
  },
  {
    name: "Pontiac Firebird, 1972",
    link: "https://amazingclassiccars.com/wp-content/uploads/2022/03/1971-Pontiac-Firebird-Formula-455-001-1536.jpg",
  },
  {
    name: "Ferrari 250 gt Tour de France",
    link: "https://i.pinimg.com/originals/a5/e1/b8/a5e1b8ea5b02d73623b508d2dabcba9f.jpg",
  },
  {
    name: "Ford Shelby AC Cobra, 1962",
    link: "https://i.pinimg.com/originals/a5/96/ef/a596ef321694752b8245a9cf053fe7fb.jpg",
  },
  {
    name: "Bugatti Type 57sc Atlantic",
    link: "https://rmsothebys-cache.azureedge.net/2/8/f/0/f/8/28f0f8db0c5b4cc8bf00a6368b91aa496d222e89.jpg",
  },
  {
    name: "Buick Roadmaster tuning",
    link: "https://get.wallhere.com/photo/car-vehicle-black-cars-Buick-buick-roadmaster-Benoit-Fraylon-1462521.jpg",
  },
  {
    name: "Mercedes Benz 300 SL Gullwing",
    link: "https://www.bobforstner.com/wp-content/uploads/2019/03/roadster-red2.jpg?w=640",
  },
  {
    name: "Porsche 911 Singer",
    link: "https://cimg4.ibsrv.net/gimg/rennlist.com-vbulletin/1000x666/03_singer_911_san_diego_442c7d8d3cb4aae9863fee7abf61e4be865c16f9.jpg",
  },
  {
    name: "Nissan GTR 2000 Skyline Bosozoku",
    link: "https://66.media.tumblr.com/a7484d0bbf0b2fe1e2dbc95509b063c1/tumblr_p32u7yGYBZ1ubc1ibo1_1280.jpg",
  },
  {
    name: "Ваз 2101",
    link: "https://i05.fotocdn.net/s121/e01090d8e39b113d/public_pin_l/2762171144.jpg",
  },
  {
    name: "Рокабилли, 1950",
    link: "https://live.staticflickr.com/2729/5860268474_42a0ecff03_b.jpg",
  },
];

const selectors = {
  post: ".post",
  postImg: ".post__img",
  postLikeIcon: ".post__like-icon",
  postLikeIconActive: "post__like-icon_active",
  postDelete: ".post__delete",
  postTitle: ".post__title",

  popupForm: ".popup__content-container",
  popupInput: ".popup__input",
  submitButton: ".popup__button-save",
  submitButtonInactive: "popup__button-save_inactive",
  popupInputTypeError: "popup__input_type_error",
  popupInputErrorActive: "popup__input-error_active",
};

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

const buttonElement = document.querySelector(".popup__button-save");

const formValidatorEditInfo = new FormValidator(selectors, popupEdit);
const formValidatorAddPost = new FormValidator(selectors, popupAddPost);

initialCards.forEach((item) => {
  const post = new Card(item, selectors, "#post-template", handleOpenPopup);
  const postElement = post.generatePost();
  addPost(postElement);
});

function submitPost(evt) {
  evt.preventDefault();
  const post = new Card({ name: nameImg.value, link: linkImg.value }, selectors, "#post-template", handleOpenPopup);
  const postElement = post.generatePost();
  addPost(postElement);
  formAddPostData.reset();
  closePopup(popupAddPost);
}

function addPost(element) {
  containerPosts.prepend(element);
}

function getValueToUserInfo() {
  titleProfile.textContent = userNameInput.value;
  subtitleProfile.textContent = userJobInput.value;
}

function saveValueUserPopup() {
  userNameInput.value = titleProfile.textContent;
  userJobInput.value = subtitleProfile.textContent;
}

function editProfile(evt) {
  evt.preventDefault();
  getValueToUserInfo();
  closePopup(popupEdit);
}

iconDataEdit.addEventListener("click", function () {
  saveValueUserPopup();
  formValidatorEditInfo.resetValidation(formEditUserData);
  openPopup(popupEdit);
});

iconPostAdd.addEventListener("click", function () {
  openPopup(popupAddPost);
  buttonElement.classList.add(selectors.buttonInactive);
  buttonElement.setAttribute("disabled", "disabled");
});

function closeTab(evt) {
  if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-icon")) {
    closePopup(evt.currentTarget);
  }
}

function closeTabKeydown(evt) {
  if (evt.key === "Escape") {
    const popupOpen = document.querySelector(".popup_show");
    closePopup(popupOpen);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_show");
  popup.addEventListener("mousedown", closeTab);
  document.addEventListener("keydown", closeTabKeydown);
}

function closePopup(popup) {
  popup.classList.remove("popup_show");
  popup.removeEventListener("mousedown", closeTab);
  document.removeEventListener("keydown", closeTabKeydown);
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
