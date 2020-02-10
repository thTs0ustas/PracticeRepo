async function getWeather() {
    try {
        const response = await fetch("https://api.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8")
        const data = await response.json();
        console.log(data)
        return data;
    } catch {
        error =>
            console.error(error);

    }
}
getWeather()
    .then(data => {
        let img = data.results[0].url
        let li = createNode('img')
        li.src = img
    })