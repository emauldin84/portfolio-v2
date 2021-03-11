const protextImages = [
  {
    title: 'Login Page',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.07.29 AM.png",
  },
  {
    title: 'Loan Dashboard Page',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.07.48 AM.png",
  },
  {
    title: 'Loan General Tab',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.08.54 AM.png",
  },
  {
    title: 'Loan Proceeds Tab',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.09.43 AM.png",
  },
  {
    title: 'Review Loan Page',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.10.09 AM.png",
  },
  {
    title: 'Loan Generating Page',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.10.34 AM.png",
  },
  {
    title: 'Loan Errors Page',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.11.34 AM.png",
  },
  {
    title: 'My Account Page',
    imgSrc: "./images/protext/Screen Shot 2021-03-10 at 11.16.12 AM.png",
  },
]

document.addEventListener('DOMContentLoaded', () => {
  let protextCardThumbContainer = document.querySelector('#protext-thumb-container')
  let protextCardThumbs = []

  let protextModalThumbContainer = document.querySelector('#protext-modal-thumb-container')
  let protextModalThumbs = []

  let protextSlideContainer = document.querySelector('#protext-slide-container')
  let protextModalSlides = []

  protextImages.map((img, i) => {
    console.log(img, i)
    protextCardThumbs.push(
      `<div class="img-column">
        <img src="${img.imgSrc}" onclick="openModal();currentSlide(${i+1})" class="hover-shadow" alt="${img.title}">
      </div>`
    )
    protextModalThumbs.push(
      `<div class="img-column">
        <img class="demo" src="${img.imgSrc}" onclick="currentSlide(${i+1})" alt="${img.title}">
      </div>`
    )
    protextModalSlides.push(
      `<div class="mySlides">
        <div class="numbertext">${i+1} / ${protextImages.length}</div>
        <img src="${img.imgSrc}" alt="${img.title}" style="width:100%">
      </div>`
    )

  })

  protextCardThumbContainer.innerHTML = protextCardThumbs.join('')
  protextModalThumbContainer.innerHTML = protextModalThumbs.join('')
  protextSlideContainer.insertAdjacentHTML('afterbegin', protextModalSlides.join(''))

})


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1] ? slides[slideIndex-1].style.display = "block" : null;
  dots[slideIndex-1] ? dots[slideIndex-1].className += " active" : null;
}
