
function loadPage(page){
  const contentArea=document.getElementById("contentArea");
  contentArea.innerHTML=pages[page];
  /* 判斷有沒有圖片 */
  if(contentArea.querySelector(".about-image")){
  contentArea.classList.add("has-image");
  contentArea.classList.remove("no-image");
  }
  else{
  contentArea.classList.add("no-image");
  contentArea.classList.remove("has-image");
  }
  }
  function loadPage(page){
const contentArea =
document.getElementById("contentArea");
contentArea.innerHTML=
pages[page];


/* 圖片判斷 */
if(contentArea.querySelector(".about-image")){
contentArea.classList.add("has-image");
contentArea.classList.remove("no-image");

}else{
contentArea.classList.add("no-image");
contentArea.classList.remove("has-image");

}
document.querySelector(
`.about-nav a[onclick="loadPage('${page}')"]`
).classList.add("active");

}

const navLinks = document.querySelectorAll(".about-nav a");

navLinks.forEach(link => {

  link.addEventListener("click", function(){

    // 移除所有 active
    navLinks.forEach(l => l.classList.remove("active"));

    // 加到目前點擊的
    this.classList.add("active");

  });

});

const pages = {
  about:`
  <div class="about-text">
  <h1>Hi, 我是Hanali</h1>
  <h3>
  打造蛋糕產業的 AI 搜圖與資料系統工具
  </h3>
  <p>
  我來自客製翻糖蛋糕產業的一線實務環境，
  目前專注於 AI 應用與系統設計領域。
  <br>
  長期在客製製作與接單流程中工作，
  使我對實際營運流程、
  資料整理與現場效率問題具有深刻理解。
  我致力於設計真正能在工作現場使用的 AI 工具，
  強調可落地性與實際效益。
  </p>
  <h5>
  關注領域：
  垂直產業 × AI工具化 × 系統設計 × 工作流程優化
  </h5>
  <p>希望成為能將 AI 技術轉化為實際工作工具的應用設計者，讓技術真正解決產業中的具體問題。</p>
  </div>
  <div class="about-image">
  <img src="./assets/images/Portrait.png">
  </div>
  
  `,
  
  
  why:`
  
  <div class="about-text">
  
  <h1>為什麼開始做這套系統?</h1>
  
  <p>
  在客製蛋糕接單流程中，客戶多半以圖片詢問款式與價格。每一次詢問都需要重新翻找歷史作品、比對相似款式、確認尺寸與報價區間，這是每天都會反覆發生的高頻工作。
當同一天有多位客戶詢問相似風格時，往往需要重複搜尋資料與重複回覆說明，不僅耗時，也容易因個人判斷不同而產生報價落差。
  </p>
  
  <p>
  在過去的工作經驗中，我曾參與公司委外網站開發的需求溝通過程，也實際看到一個問題：當需求在初期沒有被完整定義，後續每一次調整都會變得困難，修改成本與時間成本都會快速上升，而新增功能往往伴隨持續增加的費用。
客製化產業的流程與需求高度變動，許多細節只有實際使用者才會理解；若由非產業背景的開發者直接實作，往往需要大量來回溝通，
才能逐步貼近真實使用情境。<br>
因此，我決定由自己從實務流程出發設計這套系統。以產業使用者的角度邊開發、邊測試、邊調整功能，讓系統能真正對應現場需求，而不是停留在功能規格文件上的設計。<br>
這個專案的出發點，是希望把自己曾經遇過的痛點，轉化為能幫助同產業工作者的實用工具。
  </p>
  
  </div>
  
  `,
  
  modules:`

  <div class="about-text module-full">
  
  <h1>目前完成模組</h1>
  
  <div class="module-grid">
  <div class="module-card">
  <div class="icon icon-archive"></div>
  <p>圖片建檔與自動命名工具</p>
  </div>
  <div class="module-card">
  <div class="icon icon-tag"></div>
  <p>多層標籤分類系統</p>
  </div>
  <div class="module-card">
  <div class="icon icon-search"></div>
  <p>圖片搜尋介面</p>
  </div>
  <div class="module-card">
  <div class="icon icon-card"></div>
  <p>搜尋結果價格卡片產生</p>
  </div>
  <div class="module-card">
  <div class="icon icon-drag"></div>
  <p>圖片拖曳搜尋流程</p>
  </div>
  
  
  <div class="module-card">
  <div class="icon icon-db"></div>
  <p>本地資料庫與向量索引建立</p>
  </div>
  
  
  <div class="module-card">
  <div class="icon icon-package"></div>
  <p>系統打包部署版本</p>
  </div>
  
  
  </div>
  
  </div>
  
  `,

  learning:`
  
  <div class="about-text">
  
  <h1>技術學習轉換歷程</h1>
  
  <p>
  我的技術學習並非來自正式工程背景，而是從實務需求反推所需能力。
  </p>
  <ul>
  <li>從 HTML / CSS / JavaScript 開始建立前端基礎</li>
  <li>學習 API 概念與前後端資料傳遞</li>
  <li>使用 FastAPI 建立後端服務</li>
  <li>導入影像 embedding 與向量相似度搜尋</li>
  <li>建立資料結構與標籤模型</li>
  <li>實作本地部署與工具化流程</li>
   </ul>
<p>整個過程以「做出可用工具」為核心，而非只完成教學範例。</p>
  </div>

  
  `,
  
  
  
  thinking:`
  
  <div class="about-text">
  
  <h1>我的產品思維</h1>
  
  <p>
  我的產品設計思考來自實際工作流程，而不是單純技術實現。<br>
在設計系統時，我會先思考使用者在實際工作中需要完成什麼任務，再決定應該使用什麼技術來實現。<br>
  我相信好的 AI 工具應該能自然融入既有工作流程，降低學習成本，並實際提升效率，而不是增加新的操作負擔。<br>
因此在這套系統的設計過程中，我持續透過實際使用情境測試與調整功能，使系統逐步貼近真實需求。<br>
  </p>
  
  
  </div>
  
  `,
  
  future:`
  <div class="about-text">
  <h1>未來規劃</h1>
  <p>
  未來我希望持續優化這套系統，使其能支援更多實際工作場景，例如自動標籤生成、搜尋精度優化與資料庫擴展。<br>

同時也希望將這套「圖片即資料」的設計概念延伸至其他客製化產業，探索 AI 在垂直產業工具化上的更多可能性。<br>

長期目標是建立一系列以 AI 為核心的實務工具系統，讓 AI 技術能真正服務於日常工作流程。<br>
  </p>
  </div>
  `
  };
  
  
  
  function loadPage(page){
  
  document.getElementById("contentArea").innerHTML
  =pages[page];
  
  }
  
  
  
  /* 預設載入 */
  
  loadPage("about");