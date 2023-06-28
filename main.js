//фильтр

$(document).ready(function () {
  $(".work_section_item").show();

  $("#all").click(function () {
    $(".work_section_item").show();
    $(this).addClass("active");
    $("#designGraphic, #designWeb, #landingPages, #wordpress").removeClass(
      "active"
    );
  });

  $("#designGraphic").click(function () {
    $(".work_section_item").hide();
    $(".graphic_design").show();
    $(this).addClass("active");
    $("#all, #designWeb, #landingPages, #wordpress").removeClass("active");
  });

  $("#designWeb").click(function () {
    $(".work_section_item").hide();
    $(".web_design").show();
    $(this).addClass("active");
    $("#all, #designGraphic, #landingPages, #wordpress").removeClass("active");
  });

  $("#landingPages").click(function () {
    $(".work_section_item").hide();
    $(".landing_pages").show();
    $(this).addClass("active");
    $("#all, #designWeb ,#designGraphic ,#wordpress").removeClass("active");
  });

  $("#wordpress").click(function () {
    $(".work_section_item").hide();
    $(".wordpress").show();
    $(this).addClass("active");
    $("#all, #designWeb, #designGraphic, #landingPages").removeClass("active");
  });
});

// переключение вкладок

function openTab(evt, tabName) {
  let i, servicesMenuItem, servicesDescription;

  servicesMenuItem = document.getElementsByClassName("services_menu_item");
  for (i = 0; i < servicesMenuItem.length; i++) {
    servicesMenuItem[i].classList.remove("active");
  }

  servicesDescription = document.getElementsByClassName("services_description");
  for (i = 0; i < servicesDescription.length; i++) {
    servicesDescription[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
// карусель
let slides = document.getElementsByClassName("feedback_container");

function getCarousel(evt, tabName) {
  let i, carouselMenuItem;

  carouselMenuItem = document.getElementsByClassName("carousel_menu_item");
  for (i = 0; i < carouselMenuItem.length; i++) {
    carouselMenuItem[i].classList.remove("active");
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}

//
let workContainer = document.getElementById("workContainer");
let loadMoreBtn = workContainer.querySelector(".load_btn");
const addImages = [
  "./img/add-image-1.png",
  "./img/add-image-2.png",
  "./img/add-image-3.png",
  "./img/add-image-4.png",
  "./img/add-image-5.png",
  "./img/add-image-6.png",
  "./img/add-image-7.png",
  "./img/add-image-8.png",
  "./img/add-image-9.png",
  "./img/add-image-10.png",
  "./img/add-image-11.png",
  "./img/add-image-12.png"];

let currentIndex = 0;

function loadMore() {
  let workSection = document.createElement("div");
  workSection.classList.add("work_section");
  workContainer.appendChild(workSection);
  for (let i = 0; i < 12; i++) {
    let image = addImages[currentIndex];
    let wsItem = document.createElement("div");
    wsItem.classList.add("work_section_item");
    wsItem.innerHTML = `<img src="${image}" alt="" />
    <div class="work_hover">
      <img src="./img/hover_icon.png" alt="hover icon" />
      <p class="hover_name">creative design</p>
      <p class="hover_text">Web Design</p>
    </div>`;
    wsItem.style.display = "block"
    workSection.appendChild(wsItem);
    currentIndex++;
  }
  if (currentIndex >= addImages.length) {
    loadMoreBtn.style.display = "none";
  }
}

loadMoreBtn.addEventListener("click", loadMore);

