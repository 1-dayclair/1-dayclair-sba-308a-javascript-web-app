const right = "Trump"
const left = "Biden" 
const philosophie = "Everyday folks"


function unitedStatesOfAmerica() {
    let x = philosophie
    return new Promise((resolve, reject) => { 
        if(x === right) {
           reject({
            message: "Start a riot!!"
           })
        }else if(x === left) {
            reject({
                message: "Start a riot!!"
            })
        } else if(x === philosophie) {
            resolve("Yaaaaaay!! That's how it should beeeeeeee!! Ahhhhhhhh")
        } else{
            reject({
                message: "Who would Everyday folks appoint without the parties?"
            })
        }
    })    
}
unitedStatesOfAmerica().then((message) => {
    console.log("That's right," + "" + message)
}).catch((error) => {
    console.log("ERROR!!, WAIT, HOLD ON... I didn't think about it like that, hmm...")
})