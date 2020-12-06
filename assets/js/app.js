//onload
document.addEventListener("DOMContentLoaded", loadDatas);



// load data 
function loadDatas(e) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', './myApps.json', true);

    // xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    // xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {

            // Parse 
            const data = JSON.parse(this.responseText);

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
    }
    xhr.send();

}