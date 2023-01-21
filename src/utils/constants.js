export { initialCards, postSelectors, validationConfig };

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
    link: "https://cdnb.artstation.com/p/assets/images/images/042/245/217/medium/rostislav-prokop-bosozoku-3751.jpg?1633979390",
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

const postSelectors = {
  post: ".post",
  postImg: ".post__img",
  postLikeIcon: ".post__like-icon",
  postLikeIconActive: "post__like-icon_active",
  postDelete: ".post__delete",
  postTitle: ".post__title",
};

const validationConfig = {
  popupForm: ".popup__content-container",
  popupInput: ".popup__input",
  submitButton: ".popup__button-save",
  submitButtonInactive: "popup__button-save_inactive",
  popupInputTypeError: "popup__input_type_error",
  popupInputErrorActive: "popup__input-error_active",
};

export const popupImage = document.querySelector(".popup_open-image");
export const popupAddPost = document.querySelector(".popup_add-post");
export const popupEdit = document.querySelector(".popup_edit");
export const containerPosts = document.querySelector(".posts");
export const titleProfile = document.querySelector(".profile__title");
export const subtitleProfile = document.querySelector(".profile__subtitle");
export const popupWithConfirmDelPost = document.querySelector(".popup_confirm-delete-post");
