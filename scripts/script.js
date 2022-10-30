let editPopup = document.querySelector(".popup_edit");
let addPostPopup = document.querySelector(".popup_add-post");
let imagePopup = document.querySelector(".popup_open-image");

let closeEditPopupIcon = editPopup.querySelector(".popup__close-icon");
let closeAddPostPopupIcon = addPostPopup.querySelector(".popup__close-icon");
let closeImagePopupIcon = imagePopup.querySelector(".popup__close-icon");

let editDataIcon = document.querySelector(".profile__edit-icon");
let addPostIcon = document.querySelector(".profile__add-button");
let imageForOpenPopup = document.querySelector(".post__img");

let saveAndHidePopupButton = document.querySelector(".popup__button-save");

let editForm = editPopup.querySelector(".popup__form-edit");
let addPostForm = addPostPopup.querySelector(".popup__form-add-post");

let nameInput = document.querySelector(".popup__input_name-area");
let jobInput = document.querySelector(".popup__input_addictions");
let imgNameInput = document.querySelector(".popup__input_name-img");
let imgUrlInput = document.querySelector(".popup__input_url-img");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let imgName = document.querySelector(".post__title");
let imgNameInPopup = document.querySelector(".popup__image-title");
let imgInPopup = document.querySelector(".popup__image");
let postsContainer = document.querySelector(".posts");
let postTemplate = document.querySelector("#post-template").content;

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
    link: "https://i.imgur.com/quT8rE8.jpg",
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
