    const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

//////////////////
// همه عناصر قابل مشاهده
const elementsToObserve = document.querySelectorAll(
  ".scroll-item, .time-line .fade-from-left, .time-line .fade-from-right"
);

// یک Observer واحد
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // اگر نمی‌خوای دوباره افکت اجرا بشه، این خط را فعال نگه‌دار
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });

// ثبت همه المان‌ها
elementsToObserve.forEach(el => observer.observe(el));


////////////////
function openPage(pageName, elmnt) {

  var i, tabcontent, tablinks;

  // پنهان کردن محتوا
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // حذف active از همه دکمه‌ها
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // نمایش تب فعلی
  document.getElementById(pageName).style.display = "flex";

  // فعال کردن دکمه فعلی
  elmnt.classList.add("active");
}

document.getElementById("defaultOpen").click();


/////////////////
document.addEventListener("DOMContentLoaded", () => {
  const sliderCards = document.querySelectorAll('.card');
  if (sliderCards.length === 0) return; // اگر کارت نیست، ادامه نده

  let sliderIndex = 0;

  function showCard(i) {
      sliderCards.forEach((c, x) => {
          c.classList.remove("slider-active", "prev");

          if (x === i) {
              c.classList.add("slider-active");
          } else if (x === i - 1) {
              c.classList.add("prev");
          }
      });
  }

  showCard(sliderIndex);

  setInterval(() => {
      sliderIndex++;
      if (sliderIndex >= sliderCards.length) sliderIndex = 0;
      showCard(sliderIndex);
  }, 3000);
});