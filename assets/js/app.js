
//onload
document.addEventListener("DOMContentLoaded", loadDatas);



// load data 
function loadDatas(e)
{
  
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', '/assets/js/myApps.json', true);

  // xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
  // xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function()
{
  if(xhr.status === 200)
  {
    
    // Parse 
    const data = JSON.parse(this.responseText);

 
      for (const property in data ) {
        console.log(`${property}`);

        for (const pr in data [property] ) {
          console.log(`${pr}`);
        }
      }


   


    // let output = '';
    // cu.forEach(cu => {
    //   output += `
    // <ul>
    // <li>ID : ${cu.id}</li>
    // <li>Name : ${cu.name}</li>
    // <li>Company : ${cu.company}</li>
    // <li>phone : ${cu.phone}</li>
    // </ul>`;
    // });

  
    
    
    // document.getElementById('customers').innerHTML = output;
  }
}
xhr.send();

}