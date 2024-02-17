const cards = document.querySelectorAll(".card");
cards.forEach(card => 
{
    card.addEventListener("click", function () 
    {
        const currentCategory = this.closest(".card-category");
        currentCategory.querySelectorAll(".card").forEach(card => 
        {
            card.classList.remove("active");
        });
        this.classList.add("active");
    });
});

let rot = 0;
const randomSelectButton = document.getElementById("random-select");
randomSelectButton.addEventListener("click", function () 
{
    const categories = document.querySelectorAll(".card-category");

    rot += 720;
    randomSelectButton.style.rotate = rot + "deg";

    categories.forEach(category => 
    {
        const cardsInCategory = category.querySelectorAll(".card");
        const randomIndex = Math.floor(Math.random() * cardsInCategory.length);
        cardsInCategory.forEach(card => 
        {
            card.classList.remove("active");
        });
        cardsInCategory[randomIndex].classList.add("active");
    });
});