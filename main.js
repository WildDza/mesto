(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(i)?i:String(i)),r)}var i}var n=function(){function t(e,n,o,r,i,u,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._likes=e.likes,this._id=e._id,this._userId=u,this._ownerId=e.owner._id,this._postSelector=n.post,this._postImgSelector=n.postImg,this._postLikeIconSelector=n.postLikeIcon,this._postLikeIconActiveSelector=n.postLikeIconActive,this._postDeleteSelector=n.postDelete,this._postTitleSelector=n.postTitle,this._templateSelector=o,this._handleOpenPopup=r,this._handleDeleteClick=i,this._handleLikeClick=s}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(this._postSelector).cloneNode(!0)}},{key:"generatePost",value:function(){return this._element=this._getTemplate(),this._postImage=this._element.querySelector(this._postImgSelector),this._setEventListeners(),this._postImage.src=this._link,this._element.querySelector(this._postTitleSelector).textContent=this._name,this._postImage.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".post__delete").style.display="none"),this._element}},{key:"setLikes",value:function(t){this._likes=t;var e=this._element.querySelector(".post__likes-counter");this._likes.length?e.textContent=this._likes.length:e.textContent="",this._handlePostLike()}},{key:"isLiked",value:function(){var t=this;return this._likes.find((function(e){return e._id===t._userId}))}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(this._postLikeIconSelector).addEventListener("click",(function(){return t._handleLikeClick(t._id)})),this._element.querySelector(this._postDeleteSelector).addEventListener("click",(function(){return t._handleDeleteClick(t._id)})),this._postImage.addEventListener("click",(function(){return t._handleOpenPopup(t._name,t._link)}))}},{key:"_handlePostLike",value:function(){this.isLiked()?this._element.querySelector(this._postLikeIconSelector).classList.add(this._postLikeIconActiveSelector):this._element.querySelector(this._postLikeIconSelector).classList.remove(this._postLikeIconActiveSelector)}},{key:"deletePost",value:function(){this._element.remove(),this._element=null}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i(o.key),o)}}function i(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var u=function(){function t(e,n){var o,r,u,s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,u=function(){s.toggleButtonState(),s._popupInputList.forEach((function(t){s._hideInputError(t)}))},(r=i(r="resetValidation"))in o?Object.defineProperty(o,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[r]=u,this._form=n,this._popupInputSelector=e.popupInput,this._popupInputTypeError=e.popupInputTypeError,this._popupInputErrorActive=e.popupInputErrorActive,this._submitButtonSelector=e.submitButton,this._submitButtonInactive=e.submitButtonInactive,this._popupInputList=Array.from(this._form.querySelectorAll(this._popupInputSelector)),this._popupButtonSubmit=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonState(),this._popupInputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t.toggleButtonState()}))}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._popupButtonSubmit.disabled=!1,this._popupButtonSubmit.classList.remove(this._submitButtonInactive)):(this._popupButtonSubmit.classList.add(this._submitButtonInactive),this._popupButtonSubmit.disabled=!0)}},{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._popupInputTypeError),n.classList.add(this._popupInputErrorActive),n.textContent=e}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._popupInputTypeError),e.classList.remove(this._popupInputErrorActive),e.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._popupInputList.every((function(t){return t.validity.valid}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===s(r)?r:String(r)),o)}var r}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.popup=e,this._handleEscClose=this._handleEscClose.bind(this),this._closePopupByClick=this._closePopupByClick.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this.popup.classList.add("popup_show"),this.setEventListeners()}},{key:"close",value:function(){this.popup.classList.remove("popup_show"),this.removeEventListeners()}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closePopupByClick",value:function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close-icon"))&&this.close()}},{key:"setEventListeners",value:function(){this.popup.addEventListener("mousedown",this._closePopupByClick),document.addEventListener("keydown",this._handleEscClose)}},{key:"removeEventListeners",value:function(){this.popup.removeEventListener("mousedown",this._closePopupByClick),document.removeEventListener("keydown",this._handleEscClose)}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===l(r)?r:String(r)),o)}var r}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=y(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},f.apply(this,arguments)}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(r){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=e,n._popupForm=n.popup.querySelector(".popup__form"),n._popupInputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n._submitFormHandler=n._submitFormHandler.bind(d(n)),n._formInputData={},n._textInButton=n.popup.querySelector(".popup__button-save"),n._defaultTextInButton=n._textInButton.textContent,n}return e=u,(n=[{key:"renderLoadingChanges",value:function(t){this._textInButton.textContent=t?"Сохранение...":this._defaultTextInButton}},{key:"_getInputValues",value:function(){var t=this;return this._popupInputList.forEach((function(e){t._formInputData[e.name]=e.value})),this._formInputData}},{key:"_submitFormHandler",value:function(t){t.preventDefault();var e=this._getInputValues();this._submitForm(e),this._popupForm.reset()}},{key:"confirmDeleteSubmitHandler",value:function(t){this._submitForm=t}},{key:"setEventListeners",value:function(){f(v(u.prototype),"setEventListeners",this).call(this),this.popup.addEventListener("submit",this._submitFormHandler)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===b(r)?r:String(r)),o)}var r}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var o=k(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},g.apply(this,arguments)}function k(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function I(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(o);if(r){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return I(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPostImg=e.popup.querySelector(".popup__image"),e._popupPostTitle=e.popup.querySelector(".popup__image-title"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupPostImg.src=e,this._popupPostImg.alt=t,this._popupPostTitle.textContent=t,g(P(u.prototype),"open",this).call(this)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(a);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===L(r)?r:String(r)),o)}var r}var O=function(){function t(e,n){var o=e.items,r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=o,this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"render",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==C(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===C(r)?r:String(r)),o)}var r}var B=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=e,this._userJob=n,this._userAvatar=o}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent,userAvatar:this._userAvatar.src}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userJob.textContent=t.about,this._userAvatar.src=t.avatar}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),q={post:".post",postImg:".post__img",postLikeIcon:".post__like-icon",postLikeIconActive:"post__like-icon_active",postDelete:".post__delete",postTitle:".post__title"},A={popupForm:".popup__content-container",popupInput:".popup__input",submitButton:".popup__button-save",submitButtonInactive:"popup__button-save_inactive",popupInputTypeError:"popup__input_type_error",popupInputErrorActive:"popup__input-error_active"},x=document.querySelector(".popup_open-image"),U=document.querySelector(".popup_add-post"),D=document.querySelector(".popup_edit"),R=document.querySelector(".popup_change-avatar"),F=document.querySelector(".posts"),V=document.querySelector(".profile__title"),H=document.querySelector(".profile__subtitle"),N=document.querySelector(".popup_confirm-delete-post"),J=document.querySelector(".profile__edit-icon"),M=document.querySelector(".profile__add-button"),z=document.forms["profile-form"],G=document.forms["card-form"],K=document.forms["change-avatar-form"],Q=document.querySelector(".profile__avatar-container"),W=document.querySelector(".profile__img");function X(t){return X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},X(t)}function Y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==X(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==X(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===X(r)?r:String(r)),o)}var r}var Z,$=function(){function t(e){var n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=o,this._baseUrl=n}var e,n;return e=t,n=[{key:"getProfileInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"editProfileInformation",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"addPost",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"deletePost",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}},{key:"editUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject(t.status)})).catch(console.log)}}],n&&Y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),tt=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-57",headers:{authorization:"4d08c1b9-14a0-48e8-89c5-c346c0ddc652","Content-Type":"application/json"}}),et=D.querySelector(".popup__input_name-area"),nt=D.querySelector(".popup__input_addictions");tt.getProfileInformation().then((function(t){console.log(t),pt.setUserInfo(t),Z=t._id})),tt.getInitialCards().then((function(t){t.forEach((function(t){var e=yt(t);ft.addItem(e)}))}));var ot=new u(A,z),rt=new u(A,G),it=new u(A,K),ut=new E(x),st=new _(U,(function(t){st.renderLoadingChanges(!0),tt.addPost(t.name,t.link).then((function(t){ht(t),st.close()})).catch(console.log).finally((function(){st.renderLoadingChanges(!1)}))})),ct=new _(D,(function(t){ct.renderLoadingChanges(!0),tt.editProfileInformation(t.name,t.about).then((function(t){pt.setUserInfo(t),ct.close()})).catch(console.log).finally((function(){ct.renderLoadingChanges(!1)}))})),at=new _(R,(function(t){at.renderLoadingChanges(!0),tt.editUserAvatar(t.avatar).then((function(t){pt.setUserInfo(t),at.close()})).catch(console.log).finally((function(){at.renderLoadingChanges(!1)}))})),lt=new _(N),pt=new B(V,H,W),ft=new O({items:[],renderer:function(t){ht(t)}},F);function yt(t){var e=new n(t,q,"#post-template",mt,(function(t){lt.open(),lt.confirmDeleteSubmitHandler((function(){tt.deletePost(t).then((function(t){lt.close(),e.deletePost()}))}))}),Z,(function(t){e.isLiked()?tt.deleteLike(t).then((function(t){e.setLikes(t.likes)})):tt.addLike(t).then((function(t){e.setLikes(t.likes)}))}));return e.generatePost()}function ht(t){var e=yt(t);ft.addItem(e)}function mt(t,e){ut.open(t,e)}ft.render(),J.addEventListener("click",(function(){var t=pt.getUserInfo(),e=t.userName,n=t.userJob;et.value=e,nt.value=n,ot.resetValidation(),ct.open()})),Q.addEventListener("click",(function(){at.open(),it.toggleButtonState()})),M.addEventListener("click",(function(){st.open(),rt.toggleButtonState()})),lt.setEventListeners(),ot.enableValidation(),rt.enableValidation(),it.enableValidation()})();