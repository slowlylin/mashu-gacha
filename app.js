const feelings = [
  ["我感到討厭所有人", "去吃飯。", "先補充一點能量，再決定人類文明是否值得延續。"],
  ["我覺得所有人都恨我", "去睡覺。", "今天先不要進行人格判決。睡醒後再重新載入人際關係。"],
  ["我覺得自我厭惡", "去洗澡。", "洗乾淨、換上舒服的衣服，讓身體先回到可以安放自己的狀態。"],
  ["我覺得所有人都互相憎恨", "出門走走。", "去看看真實世界。街上的人通常只是買菜、等車，沒有忙著彼此憎恨。"],
  ["腦海中的想法讓我壓力很大", "把它們寫下來。", "不用整理，不用判斷。先把腦內分頁全部倒到紙上。"],
  ["我覺得孤單、迷失", "打給朋友。", "不用準備完整故事，只要說：「我今天有點需要陪伴，可以說幾分鐘話嗎？」"],
  ["我覺得自己困在過去", "去計劃未來。", "安排一件很小、確實會到來的事，讓時間重新向前流動。"],
  ["我對未來感到緊張", "只處理接下來十分鐘。", "未來不必一次活完。先把眼前這十分鐘過好。"],
  ["我覺得自己不夠好", "寫下自己達成過的成就。", "大小都算。完成、撐過、學會、拒絕過，全部都是證據。"],
  ["我感覺控制不了一切", "去做一件微小的事。", "丟一件垃圾、洗一個杯子、回一則訊息。只做一件。"],
  ["我感覺不到有人愛我", "先鼓勵一下自己。", "對自己說：「我已經很努力了。今天不必證明全部。」"],
  ["我覺得沒有人理解我", "創造性地表達自己。", "寫一段話、畫一張圖，或選一首能替你說話的歌。"],
  ["我覺得焦慮不安", "去散步。", "不用走很遠。讓腳步替腦袋接管一會兒節奏。"],
  ["我想放棄", "回想上一次成功時的喜悅。", "找出照片、紀錄或一個具體畫面。你曾經走到過，那是真實資料。"],
  ["我覺得自己被忽視", "去幫助一個需要幫助的人。", "做一件能力範圍內的小事，讓善意重新在世界裡產生回音。"],
  ["我覺得壓力太大", "做一件你享受的簡單小事。", "先不用有生產力。選一件做完會舒服一點的事。"],
];

const topics = {
  work: {
    label: "工作／事業",
    icon: "✦",
    intro: "先確認是工作本身、工作量，還是環境不值得。",
    items: [
      ["我不想上班", "先分清楚：你是不想工作，還是不想做這份工作？", "前者可能需要休息；後者需要準備下一站。兩種問題不能使用同一份解法。"],
      ["我想離職", "先算錢，再找下一站。", "離職可以，先確認能承受多久沒有收入。自由很好，別讓自由立刻變成房租。"],
      ["工作永遠做不完", "請有決定權的人排優先順序。", "列出全部事項。資源不足時，不要一個人承擔所有需求同時成立的幻想。"],
      ["我不知道自己能做什麼", "做一個成本最低的小型試驗。", "先試一小塊，不必立刻決定餘生。能得到真實回饋的行動，比腦內模擬更有用。"],
      ["我很努力，卻沒有回報", "確認這個環境有沒有能力回報你。", "有些地方不是你做得不夠，而是它的結構本來就不會把成果還給你。"],
      ["我被職場欺負", "保存紀錄，準備出口。", "先留下時間、對話與事件紀錄，減少單獨接觸，再決定正式處理或離開。"],
    ],
  },
  people: {
    label: "人際關係",
    icon: "☁",
    intro: "把說出口的話交給自己處理；沒說出口的，退回原發送者。",
    items: [
      ["有人不喜歡我", "那就讓他不喜歡。", "被所有人喜歡不是正常的人生目標，也不是你的工作內容。"],
      ["對方一直要我猜", "未說出口的需求，不建立待辦事項。", "超過五歲、能使用語言，就應該把需求說出來。說出來再處理。"],
      ["我說清楚了，他還是不理", "減少接觸。", "溝通已經完成，對方的回應也是答案。不要把同一份申請重送十七次。"],
      ["不知道該不該維持友情", "看它長期帶來的是滋養，還是耗損。", "不用因為認識很久，就替一段已經失去功能的關係無限續約。"],
      ["我們吵架了", "先確認你想解決事情，還是只想證明自己對。", "兩個目標需要完全不同的說話方式。先選一個。"],
    ],
  },
  family: {
    label: "家庭",
    icon: "⌂",
    intro: "家庭關係常綁著居住、金錢與責任，要處理的是權限。",
    items: [
      ["家人不尊重我的界線", "減少他能進入你生活的權限。", "界線不只是一句話，也包括資訊、時間、金錢、空間與決定權。"],
      ["家人要求我負責所有事", "誰的需求，誰先提出方案。", "你可以協助，但不用自動接任整個專案。"],
      ["我們根本無法溝通", "停止重複同一場無效會議。", "有些關係需要的不是更精準的說明，而是更少的接觸與更清楚的安排。"],
      ["我想離開家", "先準備住處、收入與重要物品。", "把出口做成真的，再決定何時走出去。"],
      ["因為是家人，所以我很內疚", "親屬關係不等於無限授權。", "你可以在乎家人，同時保留自己的人生。"],
    ],
  },
  money: {
    label: "金錢",
    icon: "◌",
    intro: "錢的問題有時需要計算，有時只能先誠實。",
    items: [
      ["我沒有錢", "我也沒有。", "很遺憾，本系統目前無法提供資金援助。但已確認你並不孤單。"],
      ["我想買東西，但怕後悔", "先放進購物車，明天再看。", "喜歡經得起一晚；衝動通常會在睡醒後自行離場。"],
      ["有人跟我借錢", "只借你能接受永遠拿不回來的數字。", "借出以前先把最壞結果算進去，友情才不會和帳款一起失蹤。"],
      ["錢不知道花去哪裡", "先記七天，不急著檢討。", "先取得資料，再判斷問題。不要在沒有紀錄時審判自己。"],
      ["我想為感情花一大筆錢", "先拿一千九百塊去吃燒肉。", "吃完再回來評估那個人值不值得剩下的預算。"],
    ],
  },
  body: {
    label: "身體不舒服",
    icon: "＋",
    intro: "身體問題不在這裡猜答案，該交給醫療專業。",
    items: [
      ["不舒服持續或反覆發生", "去看醫生。", "把症狀、發生時間與變化記下來，帶著可用的資料去。"],
      ["看過了，但沒有改善", "回診，或換一位醫生。", "沒有改善本身就是需要重新評估的資訊。"],
      ["突然很嚴重", "立即就醫。", "呼吸困難、胸痛、意識異常或快速惡化，不在網頁上等待答案。"],
      ["我怕只是自己想太多", "身體不需要先說服你，才能獲得檢查。", "不確定也可以詢問專業。確認沒有事，也是一種有用的結果。"],
    ],
  },
};

const loveResults = {
  married: ["已婚", "先抓資產。", "感情可以晚點談。先盤點帳戶、債務、重要文件與自己的權利，再決定何時攤牌。"],
  dating: ["交往中", "建議分手。", "既然已經困擾到需要進入本系統，就先誠實評估：現在這個版本，你還要不要？"],
  vague: ["曖昧中", "及時止損。", "尚未取得正式關係，已經開始支付精神成本。本案投報率過低。"],
};

const app = document.querySelector("#app");
const homeButton = document.querySelector("#home-button");
const history = [];
let screen = "home";
let currentTopic = null;
let currentResult = null;
let loveResult = null;

const esc = (text) =>
  String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

function navigate(next, remember = true) {
  if (remember) history.push(screen);
  screen = next;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goBack() {
  screen = history.pop() || "home";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  history.length = 0;
  screen = "home";
  currentTopic = null;
  currentResult = null;
  loveResult = null;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResult(item, isLove = false) {
  currentResult = item;
  loveResult = isLove ? item : null;
  navigate("result");
}

function backButton() {
  return screen === "home"
    ? ""
    : '<button class="back-button" data-action="back">← 回上一頁</button>';
}

function homeTemplate() {
  return `
    <div class="home-layout">
      <div class="character-wrap">
        <img class="question-mochi" src="images/mochi-question.jpg" alt="戴著花冠、歪頭詢問的小麻糬" />
        <span class="tiny-flower flower-a">✿</span>
        <span class="tiny-flower flower-b">✿</span>
      </div>
      <div class="home-copy">
        <p class="eyebrow">小麻糬生活急救站</p>
        <h1>怎麼了？</h1>
        <p class="lead">不急著解釋自己。先選一個最接近現在的狀況，小麻糬陪你找下一步。</p>
        <div class="primary-actions">
          <button class="choice-card choice-primary" data-go="feelings">
            <span class="choice-icon">☁</span>
            <span><strong>我只是整個人不對勁</strong><small>沒有具體事情，就是很煩</small></span><b>→</b>
          </button>
          <button class="choice-card" data-go="specific">
            <span class="choice-icon">✦</span>
            <span><strong>我有具體事情</strong><small>感情、工作、人際、家庭、金錢或身體</small></span><b>→</b>
          </button>
          <a class="choice-card" href="gacha.html">
            <span class="choice-icon">●</span>
            <span><strong>我只想抽一顆扭蛋</strong><small>誇誇、安慰或鼓勵，免費補給</small></span><b>→</b>
          </a>
        </div>
      </div>
    </div>`;
}

function listTemplate(eyebrow, title, intro, items, source) {
  return `
    <div class="content-screen">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h2>${esc(title)}</h2>
      <p class="screen-intro">${esc(intro)}</p>
      <div class="option-list">
        ${items
          .map(
            (item, index) => `
              <button data-result-source="${source}" data-result-index="${index}">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${esc(item[0])}</strong><b>→</b>
              </button>`,
          )
          .join("")}
      </div>
    </div>`;
}

function specificTemplate() {
  const cards = Object.entries(topics)
    .map(
      ([key, topic]) => `
        <button class="topic-card" data-topic="${key}">
          <span>${topic.icon}</span><strong>${topic.label}</strong><small>${topic.intro}</small>
        </button>`,
    )
    .join("");
  return `
    <div class="content-screen">
      <p class="eyebrow">有一件事情正在煩你</p>
      <h2>是哪一類？</h2>
      <p class="screen-intro">先把問題放進正確的抽屜，不必一次處理整個人生。</p>
      <div class="topic-grid">
        <button class="topic-card love-card" data-go="love-status">
          <span>♡</span><strong>感情關係</strong><small>已婚、交往、曖昧</small>
        </button>
        ${cards}
      </div>
    </div>`;
}

function loveStatusTemplate() {
  return `
    <div class="content-screen">
      <p class="eyebrow">感情煩惱</p>
      <h2>目前是什麼關係？</h2>
      <p class="screen-intro">先確認關係狀態。浪漫可以瞎，結構不行。</p>
      <div class="status-grid">
        <button data-love="married"><span>壹</span><strong>已婚</strong><small>先處理結構</small></button>
        <button data-love="dating"><span>貳</span><strong>交往中</strong><small>先處理關係</small></button>
        <button data-love="vague"><span>參</span><strong>曖昧中</strong><small>先處理投入</small></button>
      </div>
    </div>`;
}

function resultTemplate() {
  const [, title, body, note] = currentResult;
  const isLove = loveResult && loveResult[1] === title;
  return `
    <div class="result-layout">
      <img class="full-mochi" src="images/mochi-full.jpg" alt="拿著棉花糖的小麻糬" />
      <div class="result-panel">
        <p class="eyebrow">小麻糬的處置建議</p>
        <h2>${esc(title)}</h2>
        <p>${esc(body)}</p>
        ${note ? `<div class="notice">${esc(note)}</div>` : ""}
        ${isLove ? '<button class="but-button" data-go="love-accept">可是……</button>' : ""}
        <div class="result-actions">
          <button class="outline-button" data-action="home">換一件事</button>
          <a class="pink-button" href="gacha.html">再領一顆小麻糬</a>
        </div>
      </div>
    </div>`;
}

function loveAcceptTemplate() {
  return `
    <div class="result-layout">
      <img class="full-mochi" src="images/mochi-full.jpg" alt="拿著棉花糖的小麻糬" />
      <div class="result-panel">
        <p class="eyebrow">收到你的「可是」</p>
        <h2>好，你還要這段感情。</h2>
        <p>那就接受：這段感情帶給你的快樂，與令你困擾的部分，目前屬於同一份組合。</p>
        <div class="notice">你可以選擇保留，但無法只保留其中一半。要留住一個人，就要承擔相應的代價。</div>
        <p class="next-question">接下來，你想做什麼？</p>
        <div class="two-actions">
          <button class="soft-button" data-change="him">我想改變他</button>
          <button class="soft-button" data-change="me">我想改變我自己</button>
        </div>
      </div>
    </div>`;
}

function loveChangeTemplate() {
  const [, title, body, note] = currentResult;
  const showMillion = currentResult[0] === "我想改變他";
  return `
    <div class="result-layout">
      <img class="full-mochi" src="images/mochi-full.jpg" alt="拿著棉花糖的小麻糬" />
      <div class="result-panel">
        <p class="eyebrow">${esc(currentResult[0])}</p>
        <h2>${esc(title)}</h2>
        <p>${esc(body)}</p>
        ${note ? `<div class="notice">${esc(note)}</div>` : ""}
        ${showMillion ? '<button class="million-button" data-action="million">我願意花一千九百萬</button>' : ""}
        <div class="result-actions">
          <button class="outline-button" data-action="home">回到首頁</button>
          <a class="pink-button" href="gacha.html">抽一顆小麻糬</a>
        </div>
      </div>
    </div>`;
}

function render() {
  let content = "";
  if (screen === "home") content = homeTemplate();
  if (screen === "feelings") {
    content = listTemplate("先看現在的感覺", "哪一句最接近？", "不用先找到根源。選表面上的感受就好。", feelings, "feelings");
  }
  if (screen === "specific") content = specificTemplate();
  if (screen === "topic" && currentTopic) {
    content = listTemplate(currentTopic.label, "具體是哪一件？", currentTopic.intro, currentTopic.items, "topic");
  }
  if (screen === "love-status") content = loveStatusTemplate();
  if (screen === "result") content = resultTemplate();
  if (screen === "love-accept") content = loveAcceptTemplate();
  if (screen === "love-change") content = loveChangeTemplate();
  app.innerHTML = backButton() + content;
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button, a");
  if (!target || target.tagName === "A") return;

  if (target.dataset.action === "back") return goBack();
  if (target.dataset.action === "home") return goHome();
  if (target.dataset.go) return navigate(target.dataset.go);

  if (target.dataset.topic) {
    currentTopic = topics[target.dataset.topic];
    return navigate("topic");
  }

  if (target.dataset.resultSource) {
    const source = target.dataset.resultSource === "feelings" ? feelings : currentTopic.items;
    return showResult(source[Number(target.dataset.resultIndex)]);
  }

  if (target.dataset.love) {
    const item = loveResults[target.dataset.love];
    return showResult(item, true);
  }

  if (target.dataset.change === "him") {
    currentResult = [
      "我想改變他",
      "我是療癒師，不是法師。",
      "本系統無法隔空修改另一名成年人的人格、價值觀與行為模式。",
      "對方若沒有改變意願，你再努力，也只是替兩個人加班。",
    ];
    return navigate("love-change");
  }

  if (target.dataset.change === "me") {
    currentResult = [
      "我想改變我自己",
      "很好，找心理諮商師。",
      "去理解自己為什麼選擇留下、真正需要什麼、願意承擔到哪裡，以及界線應該放在哪裡。",
      "改變自己不等於把忍耐上限調高。",
    ];
    return navigate("love-change");
  }

  if (target.dataset.action === "million") {
    currentResult = [
      "特別專案",
      "先等等。",
      "如果預算是一千九百萬，請先不要匯給外部法師。小麻糬幫你想想辦法。",
      "不保證對方回頭，但會先認真評估：這個人到底值多少錢？",
    ];
    return render();
  }
});

homeButton.addEventListener("click", goHome);
render();
