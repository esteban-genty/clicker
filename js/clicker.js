document.addEventListener("DOMContentLoaded", function () {
function clicker(){

    console.log("Clicker started");

    // Variables
    let count = 0;
    const countCoffee = document.querySelector("#coffee-count");
    const coffeeCup = document.querySelector(".coffee-cup");

    // Event Listeners
    function addCount(){
        coffeeCup.addEventListener("click", function(){
            count++;
            countCoffee.innerHTML = count;
            console.log("Clicked! Coffee count: " + count);
        });
    }

    addCount();

}

clicker();
});