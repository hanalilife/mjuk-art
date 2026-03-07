/* =========================
頁面內容
========================= */

const pages = {

  about:`
  <div class="about-text">
  <h1>Hi, 我是Hanali</h1>
  <h3>從翻糖蛋糕設計師到AI工具設計者</h3>
  <p>
  我在客製翻糖蛋糕產業工作多年，熟悉接單、溝通、製作的每一個環節。
  正因為待在這個現場夠久，我對這些細節有第一手的理解，哪些流程在每天悄悄消耗時間與精力。<br>
  這套 AI 搜圖與建檔系統，是我從產業痛點出發、自學技術、獨立開發的第一個完整作品。
  我想做的不是展示技術能力，而是證明一件事：真正好用的工具，應該由懂這個工作的人來設計。
  </p>
  <h5>關注領域：垂直產業 × AI工具化 × 使用者體驗 × 工作流程優化</h5>
  
  </div>
  <div class="about-image">
  <img src="./assets/images/Portrait.png" alt="Hanali 個人照">
  </div>
  `,

  why:`
  <div class="about-text">
  <h1>為什麼開始做這套系統?</h1>
  <p>
  客製蛋糕的作品會越累積越多，客戶詢問時常常拿我們該店的作品來問價。
  當作品數量到了一定程度，沒有人能記住每一張圖對應的價格區間，每次報價都得重新翻找、比對、確認，
  這個流程在接單高峰時會不斷重複，耗掉大量時間與精力。
  </p>
  <p>
  另一個契機來自參與委外網站開發的經驗。
  開發過程中我發現，店家很難在短時間內把自己的需求完整說清楚——不是不清楚自己要什麼，而是沒有時間，也不知道該怎麼描述。
  需求沒說清楚，後續每一次修改都會變得更困難，做出來的東西也很難真正貼近實際工作方式。<br>
  這讓我意識到：產業裡的工具，最好由產業裡的人來做。
  我知道自己在工作中遇到什麼問題、需要什麼功能，這是最直接的優勢。<br>
  同時我也希望這套系統不只適合我自己用，而是能讓其他店家也能輕鬆上手，真正解決日常工作中的重複負擔。
  </p>
  </div>
  `,

  modules:`
  <div class="about-text module-full">
  <h1>目前完成模組</h1>
  <div class="module-grid">
  <div class="module-card"><div class="icon icon-archive"></div><p>圖片建檔與自動命名工具</p></div>
  <div class="module-card"><div class="icon icon-tag"></div><p>多層標籤分類系統</p></div>
  <div class="module-card"><div class="icon icon-search"></div><p>圖片搜尋介面</p></div>
  <div class="module-card"><div class="icon icon-card"></div><p>搜尋結果價格卡片產生</p></div>
  <div class="module-card"><div class="icon icon-drag"></div><p>圖片拖曳搜尋流程</p></div>
  <div class="module-card"><div class="icon icon-db"></div><p>本地資料庫與向量索引建立</p></div>
  <div class="module-card"><div class="icon icon-package"></div><p>系統打包部署版本</p></div>
  </div>
  </div>
  `,

  learning:`
  <div class="about-text">
  <h1>技術學習轉換歷程</h1>
  <p>我沒有工程背景，所有技術都是為了「做出這個東西」才去學的。<br>每一個知識點的起點，都是一個卡關的實際問題。</p>
  <ul>
  <li>從 HTML / CSS / JavaScript 開始建立前端基礎</li>
  <li>學習 API 概念與前後端資料傳遞</li>
  <li>使用 FastAPI 建立後端服務</li>
  <li>導入影像 embedding 與向量相似度搜尋</li>
  <li>建立資料結構與標籤模型</li>
  <li>實作本地部署與工具化流程</li>
  </ul>
  <p>這條路不是照課綱走的，但每一步都有真實的用途作為理由。</p>
  </div>
  `,

  thinking:`
  <div class="about-text">
  <h1>我的產品思維</h1>
  <p>
  我設計系統的起點從來不是「這個技術能做什麼」，而是「這個人在工作中卡在哪裡」。<br>
  以這套系統為例：在決定用向量搜尋之前，我先確認的是——接單者每天花最多時間在哪個步驟？那個步驟有沒有辦法被省掉或加速？
  </p>
  <p>
  我相信一個好的 AI 工具不需要使用者學習新的工作習慣。
  它應該像一個熟練的助手，悄悄接手那些重複又費神的部分，讓人能把注意力放在真正需要判斷的地方。<br>
  這是我在每一個功能決策背後，始終在問自己的一件事。
  </p>
  </div>
  `,

  future:`
  <div class="about-text">
  <h1>未來規劃</h1>
  <p>
  這套系統目前解決的是「找圖與報價」這個單一場景，但背後的設計邏輯可以走得更遠。<br>
  接下來我想做的，是讓標籤生成更自動化、讓搜尋結果更精準，並把資料庫擴展到能支援多人協作的規模。
  </p>
  <p>
  更長遠的方向，是把「圖片即資料」這個概念帶進其他客製化產業——
  任何以視覺溝通為主、需要快速比對歷史案例的工作現場，都可能是下一個應用場景。<br>
  我想成為那個能把 AI 技術翻譯成產業語言的人，讓工具真正被需要它的人用起來。
  </p>
  </div>
  `

};


/* =========================
載入頁面內容
========================= */

function loadPage(page) {

  const contentArea = document.getElementById("contentArea");
  if (!contentArea) return;

  contentArea.innerHTML = pages[page];

  /* 圖片判斷 */
  if (contentArea.querySelector(".about-image")) {
    contentArea.classList.add("has-image");
    contentArea.classList.remove("no-image");
  } else {
    contentArea.classList.add("no-image");
    contentArea.classList.remove("has-image");
  }

  /* active 狀態 */
  document.querySelectorAll(".about-nav a").forEach(l => l.classList.remove("active"));
  const activeLink = document.querySelector(`.about-nav a[onclick="loadPage('${page}')"]`);
  if (activeLink) activeLink.classList.add("active");

}

/* 初始載入預設頁面 */
loadPage('about');
