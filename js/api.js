let submit = document.getElementById('submit');
let username = document.getElementById('username');
let platform = document.getElementById('platform');

const fetchPlayers = async(tag, platform)=>{
    const api_calls = await fetch('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/'+platform+'/'+tag,
        {
            headers: {
                "TRN-Api-Key": "0dcdcdf7-cbfc-430a-b149-66d6fe507811"
            }
        })
    const data = await api_calls
    return data.json()
}

try {
    fetchPlayers("Ninja", "pc").then((res) => console.log(res))
} catch(e) {
    console.log(e)
}