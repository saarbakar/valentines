const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;
let noMessages = [
  "Are you sure? 😳",
  "Really sure? 🥺",
  "Think again 😭",
  "Don't break my heart 💔",
  "Last chance mister 😤"
];

let noIndex = 0;

noBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  if (noIndex < noMessages.length) {
    noBtn.innerText = noMessages[noIndex];
    noIndex++;
  }

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  confetti();
  changeScreen("screen1", "screen2");
  loadQuestion();
});

/* QUIZ QUESTIONS */
const quizData = [
  { question: "Who would be the boss? 😌", options: ["You 😇", "Me 😏", "None 😂"], correct: 0 },
  { question: "Who fell in love first? 💘", options: ["You did 👀", "Me 😇", "At the same time 💞"], correct: 0 },
  { question: "Who is more obsessed? 😏", options: ["You 😌", "Me 😭", "Both equally 🤭"], correct: 2 },
  { question: "Who can't live without the other? 🥺", options: ["You 💘", "Me 💗", "Both 🫶"], correct: 2 }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("quizOptions");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === quizData[currentQuestion].correct) {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      changeScreen("screen2", "screen3");
    }
  } else {
    alert("Oops! Wrong answer 😌 Try again!");
  }
}

function changeScreen(current, next) {
  document.getElementById(current).classList.remove("active");
  document.getElementById(next).classList.add("active");
}

/* GIFTS */
function openLetter() {
  showModal(`<h2>My Dearest Muizey Janu 💌</h2><p> There are honestly sooo many things I want to say, and if I tried to write them all, I would never stop, my words would never run out, and my praise for you would never end. When I tell you that you’re “perfect,” I don’t just mean it casually. You are genuinely perfect in every single way, loving, caring, making me happy, talking, teasing me hehe, matching your energy with mine, making me feel special, excelling at your work, giving respect, your bond with your siblings, with your parents… and the list goes on and on. Being your wife makes me feel like the LUCKIEST person in the world. I notice every little thing you do, and I feel it deeply. Sometimes the distance gets to me, like when I see you tired or having rough days. I just wish I could be there, physically, holding you, sharing those moments. I think about you every second of every day. Wherever I go, whatever I do, every new thing I try, every adventurous video I watch, I imagine doing it with you. I love that I get to live in “our little world” with you januu. It makes me so happy when you tell me that you don’t do things just for me, that you’re taking care of yourself and making sure you’re at your best. You truly are my entire world, janiii. Just like our sweetest first moments together, we’re going to celebrate our first Valentine’s Day over a video call. Just thinking about it makes me feel so warm and calm, knowing that InshaAllah, we’ll make up for this distance. I love EVERYTHING about you, listening to you, staring at you, talking to you, watching you do chores hehe… and yes, when you ask, “Can I make a 3rd cup of coffee?” UFFH 🤐. I love you more than words could ever say, my 💎Husband. Umm i don't even know what to call this, but I've fallen sooo hard.  I miss you soooooooo, sooooooo much, and I can’t wait to be with you again.  </p>`);
}

function openGallery() {
  showModal(`
    <h2 style="margin-bottom:20px;">Our Memories 💞</h2>
    <div class="gallery-grid">
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 8.06.30 PM.jpeg"><p>First Hug 🫂</p></div>
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 7.53.57 PM.jpeg"><p>First Travel</p></div>
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 7.55.03 PM.jpeg"><p>Sleepy Moments 😴</p></div>
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 8.12.16 PM.jpeg"><p>First Month Anniversary ❤️</p></div>
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 8.13.09 PM.jpeg"><p>Unexpected Twinning ❤️</p></div>
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 8.12.35 PM.jpeg"><p>My Baji 😂</p></div>
      <div class="card"><img src="images/WhatsApp Image 2026-02-13 at 8.12.53 PM.jpeg"><p>My Favorite Human 😜</p></div>
    </div>
  `);
}

function openCalendar() {
  showModal(`
    <div class="calendar">
      <h3>November 2025</h3>
      <table>
        <tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>
        <tr><td></td><td></td><td></td><td></td><td></td><td></td><td>1</td></tr>
        <tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
        <tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
        <tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr>
        <tr><td>23</td><td>24</td><td>25</td><td>26</td><td class="highlight">27 ❤️</td><td>28</td><td>29</td></tr>
        <tr><td>30</td></tr>
      </table>
      <p>The day when you and I became "US" 💍</p>
      <button onclick="goFinal()">Continue ❤️</button>
    </div>
  `);
}

function showModal(content) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalContent").innerHTML = `
    <button class="back-btn" onclick="closeModal()">← Back</button>
    ${content}
  `;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function goFinal() {
  closeModal();
  changeScreen("screen3", "finalScreen");
  typeMessage();
}

function typeMessage() {
  const text = "I wish i could give you the ability to see yourself through my eyes, only then you would realize how special you are to me janiii💖";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();
}

/* HEART CURSOR */
document.addEventListener("mousemove", function(e) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 1000);
});
