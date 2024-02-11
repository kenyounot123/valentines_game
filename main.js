//Meter class to initialize the bar
class Meter {
    constructor() {
        this.yesBtn = document.querySelector('#yes-btn');
        this.noBtn = document.querySelector('#no-btn');
        this.meter = document.querySelector('.meter');
        this.createMeterBar();
    }
    createMeterBar() {
        for (let i = 6; i > 0; i--) {
            const newBar = document.createElement('div');
            newBar.classList.add('meter-fill');
            newBar.classList.add(`meter-${i}`);
            this.meter.append(newBar);
        }
    }
    fillBar(bar) {
        bar.classList.add('fill');
    }
    deleteFillBar(bar) {
        bar.classList.remove('fill');
    }
}
class Game {
    constructor() {
        this.counter = 5;
        this.meter = new Meter();
        this.allBars = document.querySelectorAll('.meter-fill');
        this.imgContainer = document.querySelector('.cat-img');
        this.initEvents();
    }
    initEvents() {
        this.meter.yesBtn.addEventListener('click', () => {
            if (this.counter <= -1) {
                // Create a new image element
                this.newImg = document.createElement('img');
                this.newImg.src = 'smiling-dog.gif';
                this.newImg.alt = 'Smiling Dog';
                this.newImg.style.height = '450px';

                // Replace the existing image with the new one
                this.imgContainer.innerHTML = '';
                this.imgContainer.appendChild(this.newImg);

                // this.counter = 0;
            } else {
                this.meter.fillBar(this.allBars[this.counter]);
                this.counter -= 1;
                this.imgContainer.innerHTML = "<img src='cute_cat.gif' alt='Animated Cat' height=450px;>"
            }


        })
        this.meter.noBtn.addEventListener('click', () => {
            if (this.counter >= 5) {
                this.newImg = document.createElement('img');
                this.newImg.src = 'dog.gif';
                this.newImg.alt = 'Sad Dog';
                this.newImg.style.height = '450px';

                this.imgContainer.innerHTML = '';
                this.imgContainer.appendChild(this.newImg);
                // this.counter = 4;
            } else {
                this.counter += 1;
                this.meter.deleteFillBar(this.allBars[this.counter]);
                this.imgContainer.innerHTML = "<img src='cute_cat.gif' alt='Animated Cat' height=450px;>"
            }

        })
    }
}
new Game();