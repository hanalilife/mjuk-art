document.addEventListener("DOMContentLoaded", function () {

  function getGreeting() {
    const h = new Date().getHours();

    if (h < 11) {
      return {
        en: "Good morning",
        zh: "早安，很高興你來到這裡。"
      };
    }

    if (h < 17) {
      return {
        en: "Good afternoon",
        zh: "午安，很高興你來到這裡。"
      };
    }

    return {
      en: "Good evening",
      zh: "晚安，很高興你來到這裡。"
    };
  }

  const greet = getGreeting();
  const text = greet.en;

  const hero = document.querySelector(".hero");
  const titleEl = document.getElementById("greeting");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const arrow = document.querySelector(".hero__arrow");


  line1.innerText = greet.zh;

  let i = 0;

  function type() {
    if (i < text.length) {
      titleEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 85);
    } else {
      setTimeout(() => line1.classList.add("fade-in"), 400);
      setTimeout(() => line2.classList.add("fade-in"), 750);
      setTimeout(() => arrow.classList.add("show"), 1100);
    }
  }

/* ✅ 只在這裡啟動一次 */

setTimeout(() => {
    hero.style.opacity = 1;
    hero.style.transition = "opacity .6s ease";
    type();
    }, 1200);

});

  