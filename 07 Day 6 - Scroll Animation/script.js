const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", seletBoxes);

seletBoxes();

function seletBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    })
}