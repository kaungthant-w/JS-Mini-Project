const btnJoke = document.getElementById("btnJoke");
const Joke = document.getElementById("joke");

btnJoke.addEventListener("click", getJoke);
getJoke();

// async function getJoke() {
//     const config = {
//         headers : {
//             Accept : "application/json",
//         },
//     }

//     const res = await fetch("https://icanhazdadjoke.com" , config)

//     const data = await res.json();

//     Joke.innerHTML = data.joke

// }

function getJoke() {
    const config =  {
        headers : {
            Accept :"application/json",
        },
    }

    fetch("https://icanhazdadjoke.com" , config)
    .then (res => res.json())
    .then(data => {
        Joke.innerHTML = data.joke
    })
}