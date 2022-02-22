let submit = document.getElementById('submit');
let username = document.getElementById('username');
let platform = document.getElementsByName('plateform');
let button = document.getElementById('btntracker').addEventListener('click', jeclic);

function checkradiobtn(){
    for (i = 0; i < platform.length; i++){
        if(platform[i].checked){
            val = platform[i].value;
            return val;
        }
    }
}

function jeclic() {
    let val;
    val = checkradiobtn();
    console.log(username.value);
    console.log(val);
    try {
        fetchPlayers(username.value, val).then((res) => console.log(res))
    } catch(e) {
        console.log(e)
    }
}

const fetchPlayers = async(tag, val)=>{
    const api_calls = await fetch('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/'+val+'/'+tag,
        {
            headers: {
                "TRN-Api-Key": "0dcdcdf7-cbfc-430a-b149-66d6fe507811"
            }
        })
    const data = await api_calls
    return data.json();
}
