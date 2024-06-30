async function spinner() {
    try{
        const name = document.getElementById("name").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!response.ok){
            throw new Error("Not around at the moment");
        }
        const data = await response.json();
        const foundation = data.sprites.front_default;

        const stage = document.getElementById("star");
        stage.src = foundation; 
        stage.style.display = "block";
    }
    catch(error) {
        console.error(error);
    }
}

// const success = async function momentum() {
//     try {
//         const reply = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto");
//         console.log("reply")
//         if(!reply.ok) {
//             throw new Error("Hoooooly, woooooah there partner, there something that there wrong with this here thingamuhjig. Now, wait a up a New York second...");
//         }
//         const load = await reply.json();

//     }
//     catch(error) {
//         console.error(error);
//     }
// }
