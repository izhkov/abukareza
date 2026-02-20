// mini Header
$(function () {
  let header = $("#header");
  let topButton = $("#top");

  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();

  // if (scrollPos > 50) {
  //   header.addClass("fixedMini");
  // } else {
  //   header.removeClass("fixedMini");
  // }

  $(window).on("scroll load resize", function () {
    headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > 50) {
      header.addClass("fixedMini");
    } else {
      header.removeClass("fixedMini");
    }

    if (scrollPos > 700) {
      topButton.addClass('visible')
    } else {
      topButton.removeClass('visible')
      
    }

    // console.log(topButton);
  });
});

// Form popup

const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
// const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
  }
}

function bodyUnlock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = "0px";
      }
    }
    body.style.paddingRight = "0px";
    body.classList.remove("lock");
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});

// Form
const formChoice = document.querySelector('.form_choice')
const choiceItems = document.querySelectorAll('.form_choice ul li')
const choiceAreaPhone = document.querySelector('.phone__area')
const choiceAreaEmail = document.querySelector('.email__area')
const choiceAreaEmailInput = document.querySelector('.email__area input')
const phoneInput = document.querySelector('[type="tel"]')
const email = document.querySelector('.email')

formChoice.addEventListener('click', (e) => {
  e.preventDefault()
  choiceItems.forEach((item) => {
    item.classList.remove('selected')
  })
  e.target.classList.add('selected')
  if (email.classList.contains('selected')) {
      
      choiceAreaEmail.style.opacity = 1    
      choiceAreaEmail.style.marginBottom = '-20px'
      choiceAreaEmailInput.required = true
      phoneInput.required = false
      choiceAreaPhone.style.opacity = 0
      formBtn.classList.add('active')


  } else {
      choiceAreaEmail.style.opacity = 0
      choiceAreaEmail.style.marginBottom = '-20px'
      choiceAreaEmailInput.required = false
      phoneInput.required = true
      choiceAreaPhone.style.opacity = 1
      formBtn.classList.remove('active')

  }
  
})

// Input Phone Mask
const formBtn = document.querySelector('.form_btn--send')

const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
})
phoneInput.addEventListener('input', () => {
  if (phoneMask.masked.isComplete) {
    formBtn.classList.add('active')
  } else {
    formBtn.classList.remove('active')
  }
})

// Footer Date
const footerCopyright = document.querySelector('.footer__copyright')
console.log(footerCopyright)
const fullYear = new Date().getFullYear()
footerCopyright.textContent = `© ${fullYear}`

/*Nav Toggle*/

let nav = $("#nav");
let navToggle = $("#navToggle");
let navToggleClose = $("#navToggleClose");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");

    $("body").toggleClass("lock");
});

navToggleClose.on("click", function(event) {
    event.preventDefault();

    nav.removeClass("show");

    $("body").removeClass("lock");
});

// Smooth Scroll with JQuery :-/
$(function () {
  $('[data-goto]').on('click', function (event) {
    event.preventDefault()

    let elementId = $(this).data('goto')
    let elementOffset = $(elementId).offset().top

    nav.removeClass("show");
    $("body").removeClass("lock");

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    )
  })
})


// gallery

const galleryItems = document.querySelectorAll('.galleryIn__item')

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      clearAllClasses()
      item.classList.add('active')
    } else {
      clearAllClasses()
    }
  })
})

const clearAllClasses = () => {
  galleryItems.forEach((item) => {
    item.classList.remove('active')
  })
}