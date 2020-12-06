//onload
document.addEventListener("DOMContentLoaded", loadDatas);

// load data 
function loadDatas(e) {


            // Parse 
            const data = DATA;

            let output = '';
            for (const property in data) {

                output += `
           
                <div class="four columns">
                <div class="card">
                    <img src="${data [property].Logo}" id="app-image">
                    <div class="info-card">
                        <h4>${data [property].Name}</h4>
                        <p>${data [property].Version}</p>
                        <p><img src="./assets/img/stars.png"></p>
                        <h5>${data [property].Technology}</h5>
                        <h5><a href="detail.html?data=${ encodeURIComponent(JSON.stringify(data[property]))}" >View More</a></h5>
                    </div>
                </div> 
            </div>
                    `;

            }

            document.getElementById('myrow').innerHTML = output;
        


}