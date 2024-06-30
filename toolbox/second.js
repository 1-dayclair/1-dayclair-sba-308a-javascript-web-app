fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
            body: JSON.stringify({
                title: "7,000,000", 
                body: "The Saintity of Following Urges", 
                user: "Menes", 
            }),
            headers: {
                "Content-type": "application/json"
            },
        })
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log("Wait, the mummy is learnig how to turn on his computer. He has been asleep for thousands of years."))