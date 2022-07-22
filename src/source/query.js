const SERVER_URL_DEV = "http://localhost:5000" 

const Query  = {
    getHeroes: async () => {
        const result = await fetch(`${SERVER_URL_DEV}/api/v1/heroes`,{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(function(res){ return { error: true} })

        return result
    }
}
 

export default Query