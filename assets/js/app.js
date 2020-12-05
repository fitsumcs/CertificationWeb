//onload
document.addEventListener("DOMContentLoaded", loadDatas);



// load data 
function loadDatas(e) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/assets/js/myApps.json', true);

    // xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    // xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {

            // Parse 
            const data = JSON.parse(this.responseText);

            let output = '';
            for (const property in data) {
                console.log(`${property}`);
                console.log(`${data [property].Name}`);
                console.log(`${data [property].Version}`);
                console.log(`${data [property].Description}`);
                console.log(`${data [property].Technology}`);
                console.log(`${data [property].Logo}`);

                output += `
           
                <div class="four columns">
                <div class="card">
                    <img src="${data [property].Logo}" class="course-image u-full-width">
                    <div class="info-card">
                        <h4>${data [property].Name}</h4>
                        <p>${data [property].Version}</p>
                        <img src="./assets/img/stars.png">
                        <p class="price">$200  <span class="u-pull-right ">$15</span></p>
                        <a href="#" >View More</a>
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