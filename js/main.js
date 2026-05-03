document.addEventListener("DOMContentLoaded", function () {

  function getGreeting() {
    const h = new Date().getHours();

    if (h < 11) {
      return {
        en: "Good morning",
        zh: "早安，這是一套讓找圖與報價在10秒內完成的系統"
      };
    }

    if (h < 17) {
      return {
        en: "Good afternoon",
        zh: "午安，這是一套讓找圖與報價在10秒內完成的系統"
      };
    }

    return {
      en: "Good evening",
      zh: "晚安，這是一套讓找圖與報價在10秒內完成的系統"
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
    type();
    }, 1200);

});

  
/* =========================
滾動浮現動畫
========================= */

document.addEventListener("DOMContentLoaded", function () {

  // 要觀察的元素：標題、說明文、bubble、卡片
  const revealTargets = [
    { selector: ".intro__head",        delay: 0   },
    { selector: ".intro__bubble",      delay: 0   },
    { selector: ".intro__desc",        delay: 0   },
    { selector: ".p-card",             delay: true }, // 依序
    { selector: ".capability-about",   delay: 0   },
    { selector: ".mobile-copyright",   delay: 0   },
  ];

  // 每個目標加上 scroll-reveal class，卡片加上依序 delay
  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add("scroll-reveal");
      if (delay === true && i < 4) {
        el.classList.add(`delay-${i + 1}`);
      }
    });
  });

  // IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // 動畫只觸發一次
      }
    });
  }, {
    threshold: 0.15,      // 元素 15% 進入視窗就觸發
    rootMargin: "0px 0px -40px 0px"  // 稍微提前一點觸發
  });

  document.querySelectorAll(".scroll-reveal").forEach(el => {
    observer.observe(el);
  });

});
