

async function fetchData() {
    try {

        const match_id = document.getElementById("matchid").value;
        const response = await fetch(`https://api.deadlock-api.com/v1/matches/${match_id}/metadata`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
        alert("Error! Invalid match id");
    }
}