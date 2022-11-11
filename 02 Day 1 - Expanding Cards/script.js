// const panels = document.querySelectorAll(".panel");

// panels.forEach(panel => {
// panel.addEventListener('click', () => {

//     panelClassremove();
//     panel.classList.add('active');

// })
// });

// function panelClassremove() {
//     panels.forEach(panel=> {
//         panel.classList.remove("active");
//     })
// }


// const panels1 = document.querySelectorAll(".panel");

// panels1.forEach(panel1 => {
//     panel1.addEventListener("click", () => {
//         panel1Classremove();
//         panel1.classList.add("active");
//     });
// });

// function panel1Classremove() {
//     panels1.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }


const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {

    panel.addEventListener("click" , () => {
        
        panelClassremove();
        panel.classList.add("active");

    })
});


function panelClassremove() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}