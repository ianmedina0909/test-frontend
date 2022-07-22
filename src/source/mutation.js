const SERVER_URL_DEV = "http://localhost:5000" 

const Mutation = {
    CreateHero: async (data) => {
        const result = await fetch(`${SERVER_URL_DEV}/api/v1/create/heroes`,{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(function(res){ return { error: true} })

        return result
    },
    RemoveHero: async (data) => {
        console.log(data)
        const result = await fetch(`${SERVER_URL_DEV}/api/v1/delete/heroes`,{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(function(res){ return { error: true} })

        return result
    }
}
 

export default Mutation