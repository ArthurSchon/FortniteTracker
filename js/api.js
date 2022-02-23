function affStats(data){
    try{
        document.getElementById('matchp').innerHTML = data.lifeTimeStats[7]['value'];
        document.getElementById('wins').innerHTML = data.lifeTimeStats[8]['value'];
        document.getElementById('winpourc').innerHTML = data.lifeTimeStats[9]['value'];
        document.getElementById('kills').innerHTML = data.lifeTimeStats[10]['value'];
        document.getElementById('kd').innerHTML = data.lifeTimeStats[11]['value'];
    }catch(e){
        console.error(e);
    }
}

function checkRadioBtn(){
    let platform = document.getElementsByName('platform');
    for (let i = 0; i < platform.length; i++){
        if(platform[i].checked){
            let val = platform[i].value;
            return val;
        }
    }
}

 async function jeClick() {
    try{
        let username = document.getElementById('username').value;
        const apikey = "0dcdcdf7-cbfc-430a-b149-66d6fe507811";
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        let val = checkRadioBtn();
        let url = 'https://api.fortnitetracker.com/v1/profile/' + val + '/' + username;
        console.log(username);
        console.log(val);
        console.log(proxyurl + url);
        if (username.length === 0) {
            document.getElementById('error').style.visibility = 'visible';
        } else {
            document.getElementById('error').style.visibility = 'hidden'
            return (await fetch(proxyurl + url, {
                headers: {
                    "TRN-Api-Key": apikey
                }
            })).json();
        }
    } catch (e){
        console.error(e);
    }
}
let button = document.getElementById('btntracker').addEventListener('click', async function(){
    try{
        let data = await jeClick();
        if(data){
            affStats(data);
        }
        console.log(data);
    } catch (e){
        console.error(e);
    }
});
