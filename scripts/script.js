$(document).ready(function () {
    const words = [
      { word: "always", translation: "завжди" },
      { word: "never", translation: "ніколи" },
      { word: "see", translation: "бачити" },
      { word: "goodbye", translation: "прощавай" },
      { word: "thanks", translation: "дякую" },
      { word: "please", translation: "будь ласка" },
      { word: "sorry", translation: "вибач" },
      { word: "if", translation: "якщо" },
      { word: "how", translation: "як" },
      { word: "maybe", translation: "можливо" },
    ];
    
    let currentIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
  
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  
    const shuffledWords = shuffle([...words]);
  
    function updateUI() {
      $("#word").text(shuffledWords[currentIndex].word);
      $("#translation").val("");
      $("#progress").text("Крок: " + (currentIndex + 1)  + "/" + words.length);
      $("#stats").text("Правильно: " + correctCount + " ,  Помилок: " + incorrectCount);
    }
  
    function showModal() {
      let level;
      const checkLevel = (correctCount / words.length) * 100;
  
      if (checkLevel >= 80) level = "Високий";
      else if (checkLevel >= 50) level = "Середній";
      else level = "Початківець";
  
      $("#result").text("Ваш рівень: " + level);
      $("#modal").show();
    }
  
    $("#check").click(function () {
      const userInput = $("#translation").val().trim().toLowerCase();
      const correctTranslation = shuffledWords[currentIndex].translation;
  
      if (userInput === correctTranslation) {
        correctCount++;
      } else {
        incorrectCount++;
      }
  
      currentIndex++;
  
      if (currentIndex < words.length) {
        updateUI();
      } else {
        showModal();
      }
    });
  
    $("#restart").click(function () {
      currentIndex = 0;
      correctCount = 0;
      incorrectCount = 0;
  
      shuffle(shuffledWords);
      updateUI();
      $("#modal").hide();
    });
    updateUI();
  });
  