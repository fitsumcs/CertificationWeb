//onload
document.addEventListener("DOMContentLoaded", loadSingleItem);

let output = "";
let output2 = "";

// load data 
function loadSingleItem(e) {

    let urlparm = new URLSearchParams(window.location.search);


    let data = JSON.parse(urlparm.get('data'));


    output += `
            <div class="six columns">
            <div class="card">
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

    document.querySelector('#Dmyrow').innerHTML = output;

    output2 += `<div class="carousel-item active">
    <img class="myImage" src="${data.Logo}" alt="First slide">
  </div>`;

    // Second image slider 
    data.Images.forEach(element => {

        output2 += `
        <div class="carousel-item ">
        <img  class = "myImage" src="${element}">
      </div>
        `;
        console.log(element);

    });

    output2 += `
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
    `;

    document.querySelector('#myid').innerHTML = output2;

}