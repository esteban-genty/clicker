document.addEventListener("DOMContentLoaded", function () {
    function clicker() {
        console.log("Clicker started");

        // Variables
        let count = 0;
        let clickPower = 1000;
        let autoClickPower = 100;
        const countCoffee = document.querySelector("#coffee-count");
        const coffeeCup = document.querySelector(".coffee-cup");
        const clickValue = document.querySelector("#click");
        const autoClickValue = document.querySelector("#count-sec");

        clickValue.innerHTML = clickPower;
        autoClickValue.innerHTML = autoClickPower;



        if (!countCoffee || !coffeeCup) {
            console.warn("Elements #coffee-count or .coffee-cup not found.");
            return;
        }

        // Manual click
        coffeeCup.addEventListener("click", function () {
            count += clickPower;
            countCoffee.innerHTML = count;
            console.log("Clicked! Coffee count: " + count);
        });

        setInterval(function () {
            count += autoClickPower;
            countCoffee.innerHTML = count;
            console.log("Auto-click! Coffee count: " + count);
        }, 1000);
    }

    clicker();
});
