/*  const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const  toggleArrow = document.getElementById("arrow");

const toggelDropdown = function() {
    dropdownMenu.classList.toggle("show");

    toggleArrow.classList.toggle("arrow");
}

dropdownBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    toggelDropdown();
});

document.documentElement.addEventListener("click", function() {
    if(dropdownMenu.classList.contains("show")) {
        toggelDropdown();
    }
});



const dropdowns = document.querySelectorAll(
  ".dropdown1-box, .dropdown2-box, .dropdown3-box"
);

dropdowns.forEach(container => {
  const btn = container.querySelector("button");
  const menu = container.querySelector("div");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // بستن سایر منوها
    document.querySelectorAll(".dropdown1-menu, .dropdown2-menu, .dropdown3-menu")
      .forEach(m => {
        if (m !== menu) m.classList.remove("show");
      });

    menu.classList.toggle("show");
  });
});

// بستن هنگام کلیک بیرون
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown1-menu, .dropdown2-menu, .dropdown3-menu")
    .forEach(menu => {
      menu.classList.remove("show");
    });
});
*/

const dropdowns = document.querySelectorAll(
  ".dropdown1-box, .dropdown2-box, .dropdown3-box"
);

dropdowns.forEach(container => {
  const btn = container.querySelector("button");
  const menu = container.querySelector("div");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // بستن سایر منوها
    document.querySelectorAll(".dropdown1-menu, .dropdown2-menu, .dropdown3-menu")
      .forEach(m => {
        if (m !== menu) m.classList.remove("show");
      });

    menu.classList.toggle("show");
  });
});

// جلوگیری از بسته شدن هنگام کلیک روی عناصر داخل منو
document.querySelectorAll(
  ".dropdown1-menu *, .dropdown2-menu *, .dropdown3-menu *"
).forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});


// بستن هنگام کلیک بیرون
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown1-menu, .dropdown2-menu, .dropdown3-menu")
    .forEach(menu => {
      menu.classList.remove("show");
    });
});



const toggle = document.getElementById("toggle-switch");
const solarText = document.getElementById("solar-text");
const gregorianText = document.getElementById("gregorian-text");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    gregorianText.classList.add("active");
    solarText.classList.remove("active");
  } else {
    solarText.classList.add("active");
    gregorianText.classList.remove("active");
  }
});


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // جلوگیری از اسکرول پس‌زمینه
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};




const counters = document.querySelectorAll("[data-counter]");

counters.forEach(counter => {
    let countEl = counter.querySelector(".count");
    let plusBtn = counter.querySelector(".plus");
    let minusBtn = counter.querySelector(".minus");

    let value = parseInt(countEl.textContent);

    plusBtn.addEventListener("click", () => {
        value++;
        countEl.textContent = value;
    });

    minusBtn.addEventListener("click", () => {
        if (value > 0) {
            value--;
            countEl.textContent = value;
        }
    });
});


const track = document.querySelector(".pakeg-track");
const cards = document.querySelectorAll(".pakeg-card");

let currentIndex = 0;
const visibleCards = 5;
const cardWidth = cards[0].offsetWidth + 30;

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
    track.style.transform = `translateX(${currentIndex * cardWidth}px)`; // + به جای -
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(${currentIndex * cardWidth}px)`; // + به جای -
  }
});



const toggleBtn = document.getElementById("toggle-btn");
const hiddenItems = document.querySelectorAll(".best-cont.hidden");

toggleBtn.addEventListener("click", function () {
    // اگر مخفی هستند → نمایش بده
    if (toggleBtn.innerText === "نمایش بیشتر") {

        hiddenItems.forEach(item => item.classList.remove("hidden"));
        toggleBtn.innerText = "نمایش کمتر";

    } else {
        // اگر نمایش داده شده‌اند → مخفی کن
        hiddenItems.forEach(item => item.classList.add("hidden"));
        toggleBtn.innerText = "نمایش بیشتر";
    }
});


var acc = document.getElementsByClassName("quik-box");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* حذف کلاس active */
    this.classList.toggle("active");

    /* نمایش کلاس active */
    var panel = this.nextElementSibling;
   if (panel.style.display === "block") {
     panel.style.display = "none";
   } else {
     panel.style.display = "block";
   }
 });
} 

function closeConsult() {
  document.getElementById("consultBox").style.display = "none";
}

