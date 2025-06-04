let studyButton = document.getElementById('study-btn');
let breakButton = document.getElementById('break-btn');
let timerDisplay = document.getElementById('time-left');
let studyCountDisplay = document.getElementById('study-count');
let breakCountDisplay = document.getElementById('break-count');
let id;
let running = false;



let totalSeconds = 25 * 60;
let studyCount = 0;
let breakCount = 0;


studyButton.addEventListener("click", () => {
    if (!running){
        id = setInterval(() => {
            totalSeconds--;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;
            timerDisplay.textContent = minutes + ":" + seconds;
            if (totalSeconds < 0) {
                totalSeconds = 25 * 60;
                clearInterval(id);
                running = false;
            }

        }, 1000);
        studyCountDisplay.textContent = ++studyCount;
        running = true;
    }


});

breakButton.addEventListener("click", () => {
    clearInterval(id);
    running = false;
    breakCountDisplay.textContent = ++breakCount;

});
