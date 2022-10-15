let showPopup = document.querySelector(".profile__edit-icon");
let hidePopup = document.querySelector(".popup-edit__close-icon");
let saveAndHidePopup = document.querySelector(".popup-edit__button-save");
let popup = document.querySelector(".popup-edit");
let formElement = document.querySelector(".popup-edit__content-container");
let nameInput = document.querySelector(".popup-edit__input");
let jobInput = document.querySelector(".popup-edit__input_addictions");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

function userInfoToValue() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function openPopup() {
  popup.classList.add("popup-edit_show");
  userInfoToValue();
}

function closePopup() {
  popup.classList.remove("popup-edit_show");
}

function valueToUserInfo() {
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  valueToUserInfo();
  popup.classList.remove("popup-edit_show");
}

showPopup.addEventListener("click", openPopup);
hidePopup.addEventListener("click", closePopup);

formElement.addEventListener("submit", formSubmitHandler);
