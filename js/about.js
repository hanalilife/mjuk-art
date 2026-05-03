/* =========================
頁面內容
========================= */

const pages = {

  about:`
  <div class="about-text">
  <h1>Hi, 我是Hanali</h1>
  <h3>從產業實務出發，設計AI解決方案的人</h3>
  <p>
  我在客製翻糖蛋糕產業工作多年，熟悉接單、溝通、製作的每一個環節。
  正因為待在這個現場夠久，我對這些細節有第一手的理解，哪些流程在每天悄悄消耗時間與精力。<br>
  因此，我從實際工作痛點出發，自主設計並開發 AI 圖片搜尋與建檔系統，將原本仰賴人工的流程轉化為可快速查找、即時回應的作業模式。<br>
  我關注的不是單一技術，而是如何結合AI與實務流程，讓工具真正解決現場問題，提升效率與決策品質。
  </p>
  <h5>關注領域：垂直產業 × AI 應用 × 流程優化 × 使用者體驗</h5>
  
  </div>
  <div class="about-image">
  <img src="./assets/images/Portrait.png" alt="Hanali 個人照">
  </div>
  `,

  why:`
  <div class="about-text">
  <h1>為什麼開始做這套系統?</h1>
  <p>
  隨著客製蛋糕作品持續累積，客服在報價時需反覆翻找歷史圖片，比對款式、確認價格，流程高度依賴經驗且耗時不穩定。
  </p>
  <p>
  當作品數量增加後，沒有人能記住每一張圖片與對應價格，每次報價都需要重新搜尋與判斷，特別在接單高峰時，這個流程會不斷重複，消耗大量時間與精力。<br>
  我發現，真正的問題不是「找不到圖片」，而是缺乏一套能將歷史經驗轉化為可查詢資料的系統。<br>
  因此，我從產業實務出發，設計並開發這套 AI 圖片搜尋與建檔系統，
將原本仰賴人工與經驗的流程，轉化為可快速查找與即時回應的作業模式。
  </p>
  </div>
  `,

  modules:`
  <div class="about-text module-full">
  <h1>目前完成模組</h1>
  <div class="module-grid">
  <div class="module-card"><div class="icon icon-archive"></div><p>圖片建檔流程與命名規則設計</p></div>
  <div class="module-card"><div class="icon icon-tag"></div><p>多層分類與標籤管理架構建立</p></div>
  <div class="module-card"><div class="icon icon-search"></div><p>圖片搜尋 UI 與操作介面完成</p></div>
  <div class="module-card"><div class="icon icon-card"></div><p>搜尋結果即時生成價格資訊卡片</p></div>
  <div class="module-card"><div class="icon icon-drag"></div><p>拖曳圖片即時搜尋功能完成</p></div>
  <div class="module-card"><div class="icon icon-db"></div><p>本地資料建置與向量比對機制整合</p></div>
  <div class="module-card"><div class="icon icon-package"></div><p>系統可執行版本與部署流程完成</p></div>
  </div>
  </div>
  `,

  learning:`
  <div class="about-text">
  <h1>技術學習轉換歷程</h1>
  <p>我沒有工程背景，所有技術學習都是為了解決實際工作中的問題。
  <br>在開發蛋糕圖片搜尋系統的過程中，逐步建立跨領域的技術能力，將原本的業務流程轉化為可系統化執行的解決方案。</p>
  <ul>
  <li>建立前端開發能力（HTML / CSS / JavaScript），完成操作介面</li>
  <li>理解前後端資料傳遞流程，設計圖片上傳與查詢機制</li>
  <li>使用FastAPI建立後端服務，串接圖片搜尋API</li>
  <li>導入影像embedding技術，實作圖片相似度搜尋功能 </li>
  <li>設計多層分類與標籤資料結構，提升搜尋精準度</li>
  <li>建立本地資料庫與向量比對流程，完成系統核心運作</li>
  </ul>
  <p>這段技術轉換並非單純學習，而是以實際需求為導向，逐步完成一套可運作的系統。</p>
  </div>
  `,

  thinking:`
  <div class="about-text">
  <h1>我的產品思維</h1>
  <p>
  在設計這套系統時，我從實際痛點出發，評估不同解法的可行性，同時考量維護成本與實際使用情境，確保系統不只可用，也能長期運作。<br>
  以這套系統為例，在導入圖片搜尋之前，我先拆解接單流程中最耗時的環節：客服需要反覆翻找歷史圖片、比對款式、確認價格，整體流程高度依賴個人經驗，且效率不穩定。
  </p>
  <p>
  因此在設計上，我優先解決三件事：<br>
• 如何快速查找歷史圖片（降低搜尋時間）<br>
• 如何同步呈現尺寸與價格資訊（減少人工判斷）<br>
• 如何讓操作維持原本習慣（降低學習成本）<br>
在設計上，我優先優化流程，而非增加功能，讓使用者能以最少操作完成原本最耗時的任務。
  </p>
  </div>
  `,

  future:`
  <div class="about-text">
  <h1>未來規劃</h1>
  <p>
  這套系統目前已解決圖片比對的核心流程，未來將持續優化搜尋精準度與資料整合能力。<br>
  【短期優化】<br>
• 導入自動標籤輔助，減少人工建檔時間<br>  
• 優化搜尋結果呈現，提升報價判斷效率<br>  
• 建立更多歷史資料，提升比對準確度<br>
【中期擴展】<br>
• 串接訂單系統，整合歷史訂單與圖片資料<br>  
• 支援多來源資料搜尋（圖片、文字、訂單）<br>  
• 建立更完整的報價參考機制<br>
【長期方向】<br>
將「圖片即資料」的概念擴展至更多客製化與視覺導向產業，例如電商、設計與內容管理領域，讓需要依賴視覺比對與經驗判斷的流程，都能透過系統快速完成。<br>
我希望能成為將 AI 技術轉化為實際工作工具的人，讓複雜流程變得更直覺、更高效。
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
