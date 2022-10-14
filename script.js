let showPopup = document.querySelector(".profile__edit-icon");
let hidePopup = document.querySelector(".popup-edit__close-icon");
let saveAndHidePopup = document.querySelector(".popup-edit__button-save");
let popup = document.querySelector(".popup-edit");
let formElement = document.querySelector(".popup-edit__content-container");
let nameInput = document.querySelector(".popup-edit__name-area");
let jobInput = document.querySelector(".popup-edit__addictions");

showPopup.addEventListener("click", function () {
  popup.classList.add("popup-edit_show");
});

hidePopup.addEventListener("click", function () {
  popup.classList.remove("popup-edit_show");
});

saveAndHidePopup.addEventListener("click", function () {
  popup.classList.remove("popup-edit_show");
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  let profileTitle = document.querySelector(".profile__title");
  let profileSubtitle = document.querySelector(".profile__subtitle");

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener("submit", formSubmitHandler);
