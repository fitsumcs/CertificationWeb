//onload
document.addEventListener("DOMContentLoaded", loadSingleItem);

let output = "";


// load data 
function loadSingleItem(e) {

    let urlparm = new URLSearchParams(window.location.search);


    let data = JSON.parse(urlparm.get('data'));



    output += `
            <div class="six columns">
            <div class="card">
                <img src="${data.Logo}" >
                <div class="info-card">
                    <h4>${data.Name}</h4>
                    <p>${data.Version}</p>
                    <p><img src="./assets/img/stars.png"></p>
                    <h5>${data.Technology}</h5>
                    <h5>${data.Description}</h5>
                </div>
            </div> 
        </div>
                `;




    document.getElementById('myrow').innerHTML = output;


}