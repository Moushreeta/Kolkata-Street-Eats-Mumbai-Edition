document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-btn");

    orderButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-item");
            alert(`Order placed for ${itemName}`);
        });
    });
});
