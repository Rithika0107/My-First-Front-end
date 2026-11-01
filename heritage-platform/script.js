 // Heritage sites data
const sites = {
  "brihadeeswarar temple": {
    name: "Brihadeeswarar Temple",
    info: "Built by Raja Raja Chola I in the 11th century, this UNESCO site is known for its massive Nandi and unique architecture.",
    quiz: {
      question: "Who built the Brihadeeswarar Temple?",
      options: ["Raja Raja Chola I", "Krishnadevaraya", "Ashoka", "Akbar"],
      answer: "Raja Raja Chola I"
    }
  },
  "red fort": {
    name: "Red Fort",
    info: "Constructed in 1648 by Mughal emperor Shah Jahan, it was the main residence of the Mughal rulers.",
    quiz: {
      question: "Which Mughal emperor built the Red Fort?",
      options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
      answer: "Shah Jahan"
    }
  }
};

// Text search
function searchSite() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  if (sites[query]) {
    displaySite(query);
  } else {
    alert("Site not found. Try 'Brihadeeswarar Temple' or 'Red Fort'.");
  }
}

// Popular site click
function showSite(siteKey) {
  displaySite(siteKey);
}

// Display site info
function displaySite(siteKey) {
  document.getElementById("siteName").innerText = sites[siteKey].name;
  document.getElementById("siteInfo").innerText = sites[siteKey].info;
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("infoPage").classList.remove("hidden");
  window.currentSite = siteKey;
}

// Quiz start
function startQuiz() {
  const quiz = sites[window.currentSite].quiz;
  document.getElementById("question").innerText = quiz.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  quiz.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === quiz.answer) {
        alert("✅ Correct!");
      } else {
        alert("❌ Wrong! Correct Answer: " + quiz.answer);
      }
    };
    optionsDiv.appendChild(btn);
    optionsDiv.appendChild(document.createElement("br"));
  });

  document.getElementById("infoPage").classList.add("hidden");
  document.getElementById("quizPage").classList.remove("hidden");
}

// Back to home
function goHome() {
  document.getElementById("quizPage").classList.add("hidden");
  document.getElementById("infoPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("searchInput").value = "";
}

// Photo upload handling (demo)
function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (file) {
    alert("📸 You uploaded: " + file.name + "\n(Feature: AI recognition can be added here)");
  }
}

// Welcome message
function showMessage() {
  alert("Welcome to Heritage for Kids!");
  console.log("Button clicked!");
}
