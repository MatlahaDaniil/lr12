let words;
let shuffledWords;
$(document).ready(function () {
  $('#submit-button').click(function() {
    const selectedDifficulty = $('input[name="difficulty"]:checked').val();

    if(selectedDifficulty === "easy"){
      words = [
        { word: "always", translation: "завжди" },
        { word: "never", translation: "ніколи" },
        { word: "see", translation: "бачити" },
        { word: "goodbye", translation: "прощавай" },
        { word: "thanks", translation: "дякую" },
        { word: "please", translation: "будь ласка" },
        { word: "sorry", translation: "вибач" },
        { word: "if", translation: "якщо" },
        { word: "how", translation: "як" },
        { word: "maybe", translation: "можливо" }
      ];
      shuffledWords = shuffle([...words]);
    } else if (selectedDifficulty === "mid"){
      words = [
        { word: "usually", translation: "зазвичай" },
        { word: "across", translation: "через" },
        { word: "style", translation: "стиль" },
        { word: "small", translation: "малий" },
        { word: "like", translation: "подобатися" },
        { word: "play", translation: "грати" },
        { word: "stay", translation: "залишатися" },
        { word: "what", translation: "що" },
        { word: "how", translation: "як" },
        { word: "yeah", translation: "так" },      
        { word: "key", translation: "ключ" },
        { word: "rainbow", translation: "райдуга" },
        { word: "wolf", translation: "вовк" },
        { word: "father", translation: "батько" },
        { word: "brother", translation: "брат" }
      ];
      shuffledWords = shuffle([...words]);
    }else if (selectedDifficulty === "high"){
      words = [
      { word: "junk", translation: "непотріб" },
      { word: "plywood",  translation: "фанера" },
      { word: "swivel",  translation: "поворотний" },
      { word: "fret",   translation: "лад" },
      { word: "weirdo",   translation: "дивак" },
      { word: "freckles", translation: "веснянки" },
      { word: "dandruff", translation: "лупа" },
      { word: "gig", translation: "концерт" },
      { word: "hand", translation: "рука" },      
      { word: "look", translation: "дивитися" },
      { word: "say", translation: "сказати" },
      { word: "took", translation: "взяв" },
      { word: "heard", translation: "чув" },
      { word: "search", translation: "пошук" },    
      { word: "sword", translation: "меч" },
      { word: "bow", translation: "лук" },
      { word: "way", translation: "шлях" },
      { word: "with", translation: "з" },
      { word: "throw", translation: "кинути" },
      { word: "grow", translation: "рости" }
    ];
      shuffledWords = shuffle([...words]);
    }

    let currentIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
  
    function shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  
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
});
