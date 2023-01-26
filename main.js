(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n,o,r,i,u,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this._id=e._id,this._userId=u,this._ownerId=e.owner._id,this._postSelector=n.post,this._postImgSelector=n.postImg,this._postLikeIconSelector=n.postLikeIcon,this._postLikeIconActiveSelector=n.postLikeIconActive,this._postLikeCounterSelector=n.postLikeCounter,this._postDeleteSelector=n.postDelete,this._postTitleSelector=n.postTitle,this._templateSelector=n.templateSelector,this._handleOpenPopup=o,this._handleOpenConfirmDeletePopup=r.bind(this),this._handleLikeClick=s}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(this._postSelector).cloneNode(!0)}},{key:"_handleClickDeleteButton",value:function(){this._handleOpenConfirmDeletePopup(this._id)}},{key:"generatePost",value:function(){return this._element=this._getTemplate(),this._element.setAttribute("id",this._id),this._postImage=this._element.querySelector(this._postImgSelector),this._setEventListeners(),this._postImage.src=this._link,this._element.querySelector(this._postTitleSelector).textContent=this._name,this._postImage.alt=this._name,this._likesCounter=this._element.querySelector(this._postLikeCounterSelector),this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(this._postDeleteSelector).style.display="none"),this._element}},{key:"setLikes",value:function(t){this._likes=t,this._likes.length?this._likesCounter.textContent=this._likes.length:this._likesCounter.textContent="",this._toggleLike()}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"_setEventListeners",value:function(){var t=this;this._postLike=this._element.querySelector(this._postLikeIconSelector),this._postLike.addEventListener("click",(function(){return t._handleLikeClick(t._id)})),this._element.querySelector(this._postDeleteSelector).addEventListener("click",this._handleClickDeleteButton.bind(this)),this._postImage.addEventListener("click",(function(){return t._handleOpenPopup(t._name,t._link)}))}},{key:"_toggleLike",value:function(){this.isLiked()?this._postLike.classList.add(this._postLikeIconActiveSelector):this._postLike.classList.remove(this._postLikeIconActiveSelector)}},{key:"deletePost",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i(o.key),o)}}function i(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var u=function(){function t(e,n){var o,r,u,s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,u=function(){s.toggleButtonState(),s._popupInputList.forEach((function(t){s._hideInputError(t)}))},(r=i(r="resetValidation"))in o?Object.defineProperty(o,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[r]=u,this._form=n,this._popupInputSelector=e.popupInput,this._popupInputTypeError=e.popupInputTypeError,this._popupInputErrorActive=e.popupInputErrorActive,this._submitButtonSelector=e.saveButton,this._submitButtonInactive=e.saveButtonInactive,this._popupInputList=Array.from(this._form.querySelectorAll(this._popupInputSelector)),this._popupButtonSubmit=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._popupInputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._popupButtonSubmit.disabled=!1,this._popupButtonSubmit.classList.remove(this._submitButtonInactive)):(this._popupButtonSubmit.classList.add(this._submitButtonInactive),this._popupButtonSubmit.disabled=!0)}},{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._popupInputTypeError),n.classList.add(this._popupInputErrorActive),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._popupInputTypeError),e.classList.remove(this._popupInputErrorActive),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._popupInputList.every((function(t){return t.validity.valid}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===s(r)?r:String(r)),o)}var r}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._closePopupByClick=this._closePopupByClick.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this.setEventListeners()}},{key:"close",value:function(){this.removeEventListeners()}},{key:"setEventListeners",value:function(){this.popup.classList.add("popup_show"),document.addEventListener("keydown",this._handleEscClose),this.popup.addEventListener("mousedown",this._closePopupByClick)}},{key:"removeEventListeners",value:function(){this.popup.classList.remove("popup_show"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closePopupByClick",value:function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-icon"))&&this.close()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===l(r)?r:String(r)),o)}var r}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=y(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},f.apply(this,arguments)}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function d(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(r){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return d(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=e,n._popupForm=n.popup.querySelector(".popup__form"),n._popupInputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n._submitFormHandler=n._handleFormSubmit.bind(v(n)),n._formInputData={},n._buttonSubmit=n.popup.querySelector(".popup__button-save"),n._defaultTextInButton=n._buttonSubmit.textContent,n}return e=u,(n=[{key:"renderLoadingChanges",value:function(t){this._buttonSubmit.textContent=t?"Сохранение...":this._defaultTextInButton}},{key:"_getInputValues",value:function(){var t=this;return this._popupInputList.forEach((function(e){t._formInputData[e.name]=e.value})),this._formInputData}},{key:"_handleFormSubmit",value:function(t){t.preventDefault();var e=this._getInputValues();this._handleSubmit(e),this._popupForm.reset()}},{key:"open",value:function(){f(m(u.prototype),"open",this).call(this),this._setEventListeners()}},{key:"close",value:function(){f(m(u.prototype),"close",this).call(this)}},{key:"_setEventListeners",value:function(){this._popupForm.addEventListener("submit",this._submitFormHandler)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==_(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===_(r)?r:String(r)),o)}var r}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=k(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},S.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function P(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(o);if(r){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPostImg=e.popup.querySelector(".popup__image"),e._popupPostTitle=e.popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupPostImg.src=e,this._popupPostImg.alt=t,this._popupPostTitle.textContent=t,S(I(u.prototype),"open",this).call(this)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==E(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===E(r)?r:String(r)),o)}var r}var j=function(){function t(e,n){var o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=o,this._container=n}var e,n;return e=t,(n=[{key:"addItem",value:function(t){var e=this._renderer(t);this._container.prepend(e)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e.addItem(t)}))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===C(r)?r:String(r)),o)}var r}var B=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=e,this._userJob=n,this._userAvatar=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent,userAvatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.about,this._userAvatar.src=t.avatar}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==R(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===R(r)?r:String(r)),o)}var r}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=A(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},D.apply(this,arguments)}function A(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function U(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(o);if(r){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function u(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t))._handleConfirmDel=e.bind(V(o)),o._buttonSave=o.popup.querySelector(n),o._defaultTextInButton=o._buttonSave.textContent,o}return e=u,(n=[{key:"renderLoadingChanges",value:function(t){this._buttonSave.textContent=t?"Удаление...":this._defaultTextInButton}},{key:"_handleConfirm",value:function(){this._handleConfirmDel(this._id)}},{key:"open",value:function(t){D(F(u.prototype),"open",this).call(this),this._id=t,this._setEventListeners()}},{key:"close",value:function(){D(F(u.prototype),"close",this).call(this)}},{key:"_setEventListeners",value:function(){this._buttonSave.addEventListener("mousedown",this._handleConfirm.bind(this))}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a),J={post:".post",postImg:".post__img",postLikeIcon:".post__like-icon",postLikeIconActive:"post__like-icon_active",postDelete:".post__delete",postTitle:".post__title",templateSelector:"#post-template",postLikeCounter:".post__likes-counter"},H={popupForm:".popup__content-container",popupInput:".popup__input",saveButton:".popup__button-save",saveButtonInactive:"popup__button-save_inactive",popupInputTypeError:"popup__input_type_error",popupInputErrorActive:"popup__input-error_active"},M=document.querySelector(".popup_open-image"),z=document.querySelector(".popup_add-post"),$=document.querySelector(".popup_edit"),G=document.querySelector(".popup_change-avatar"),K=document.querySelector(".posts"),Q=document.querySelector(".profile__title"),W=document.querySelector(".profile__subtitle"),X=document.querySelector(".popup_confirm-delete-post"),Y=document.querySelector(".profile__edit-icon"),Z=document.querySelector(".profile__add-button"),tt=document.forms["profile-form"],et=document.forms["card-form"],nt=document.forms["change-avatar-form"],ot=document.querySelector(".profile__avatar-container"),rt=document.querySelector(".profile__img"),it=$.querySelector(".popup__input_name-area"),ut=$.querySelector(".popup__input_addictions");function st(t){return st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st(t)}function ct(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==st(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==st(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===st(r)?r:String(r)),o)}var r}var at=function(){function t(e){var n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=o,this._baseUrl=n}var e,n;return e=t,n=[{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getProfileInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"editProfileInformation",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then(this._getResponseData)}},{key:"addPost",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then(this._getResponseData)}},{key:"deletePost",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"editUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._getResponseData)}}],n&&ct(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),lt=new at({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"4d08c1b9-14a0-48e8-89c5-c346c0ddc652","Content-Type":"application/json"}});function pt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var ft,yt=new u(H,tt),ht=new u(H,et),dt=new u(H,nt),vt=new L(M),mt=new b(z,(function(t){mt.renderLoadingChanges(!0),lt.addPost(t.name,t.link).then((function(t){St.addItem(t),mt.close()})).catch((function(t){console.log("Ошибка... ".concat(t))})).finally((function(){mt.renderLoadingChanges(!1)}))})),bt=new b($,(function(t){bt.renderLoadingChanges(!0),lt.editProfileInformation(t.name,t.about).then((function(t){gt.setUserInfo(t),bt.close()})).catch((function(t){console.log("Ошибка... ".concat(t))})).finally((function(){bt.renderLoadingChanges(!1)}))})),_t=new b(G,(function(t){_t.renderLoadingChanges(!0),lt.editUserAvatar(t.avatar).then((function(t){gt.setUserInfo(t),_t.close()})).catch((function(t){console.log("Ошибка... ".concat(t))})).finally((function(){_t.renderLoadingChanges(!1)}))})),gt=new B(Q,W,rt),St=new j({renderer:function(t){var e=new n(t,J,It,wt,Pt,ft,(function(t){e.isLiked()?lt.deleteLike(t).then((function(t){e.setLikes(t.likes)})).catch(console.log):lt.addLike(t).then((function(t){e.setLikes(t.likes)})).catch(console.log)}));return e.generatePost()}},K),kt=new N(X,Pt,H.saveButton);function wt(t){kt.open(t)}function Pt(t){kt.renderLoadingChanges(!0),lt.deletePost(t).then((function(e){kt.close();var n=document.getElementById(t);n&&n.remove()})).catch((function(t){console.log("Ошибка... ".concat(t))})).finally((function(){kt.renderLoadingChanges(!1)}))}function It(t,e){vt.open(t,e)}Promise.all([lt.getProfileInformation(),lt.getInitialCards()]).then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i,u,s=[],c=!0,a=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(o=i.call(n)).done)&&(s.push(o.value),s.length!==e);c=!0);}catch(t){a=!0,r=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw r}}return s}}(e,n)||function(t,e){if(t){if("string"==typeof t)return pt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pt(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];gt.setUserInfo(r),ft=r._id,St.renderItems(i.reverse())})).catch(console.log),Y.addEventListener("click",(function(){var t=gt.getUserInfo(),e=t.userName,n=t.userJob;it.value=e,ut.value=n,yt.resetValidation(),bt.open()})),ot.addEventListener("click",(function(){_t.open(),dt.toggleButtonState()})),Z.addEventListener("click",(function(){mt.open(),ht.toggleButtonState()})),yt.enableValidation(),ht.enableValidation(),dt.enableValidation()})();