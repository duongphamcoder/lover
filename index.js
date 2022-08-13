const root = document.querySelector("#app");

const audio = document.querySelector("audio");

const HTML_START = `<div id="overlay_btn">
<h1>Click &rarr;</h1>
<span id="scale_animate"> <button id="btn_start"></button></span>
</div>`;

const HMTL_Letter = `<div id="letter">
<div id="title_letter">
  <h1>chào cậu!</h1>
</div>
<div class="content_letter--title">
  <h2>Hãy chọn một số bất kỳ nhé.</h2>
</div>
<div id="ready">
  <h3>Bạn đã sẵn sàng chưa. Vừa nghe nhạc vừa trả lời nhé.</h3>
</div>
<div id="content_letter">
  <div id="question">
    <div id="question_title">
      <h3>
       Chọn 1 lần thôi nhé ?
      </h3>
    </div>
    <div id="question_btn">
      ${Array(9)
        .fill(1)
        .map((item, index) => {
          return `<button class="question_btn-item yes">${index + 1}</button>`;
        })
        .join("")}
    </div>
  </div>
</div>
</div>`;

const href = "https://www.facebook.com/ptduong01";

const HTML_Congratulations = `<div id="congratulations_overlay">
<div id="congratulations">
  <div id="congratulations_title">
    <h2>Chúc mừng bạn đã có một anh người yêu quá chi là toẹt dời.</h2>
  </div>
  <div id="congratulations_img"></div>
  <div id="congratulations_btn">
    <a href="${href}" id="congratulations_btn--item">
      Xin mời bạn nhận hàng
    </a>
  </div>
</div>
</div>`;

const hanldeCatreWrapper = (innerHTML) => {
  const Fragment = document.createElement("div");
  Fragment.innerHTML = innerHTML;
  return Fragment;
};

const handleHiddenStart = () => {
  root.appendChild(hanldeCatreWrapper(HTML_START));
  const btn_start = document.querySelector("#btn_start");
  const overlay_btn = document.querySelector("#overlay_btn");
  btn_start.addEventListener("click", () => {
    audio.play();
    overlay_btn.style.display = "none";
    setTimeout(() => {
      handleCreateLetter();
    }, 2000);
  });
};

const hanldeCreateCongratulations = () => {
  root.appendChild(hanldeCatreWrapper(HTML_Congratulations));
};

const handleCreateLetter = () => {
  root.appendChild(hanldeCatreWrapper(HMTL_Letter));
  const btns = document.querySelectorAll(".question_btn-item");
  btns.forEach((item) => {
    item.addEventListener("click", hanldeCreateCongratulations);
  });
};

const handleStart = () => {
  handleHiddenStart();
};

handleStart();
