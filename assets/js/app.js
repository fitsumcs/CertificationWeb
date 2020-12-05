
document.addEventListener("DOMContentLoaded", loadDatas);



// load data 
function loadDatas(e)
{
  
  const xhr = new XMLHttpRequest();
 
  xhr.open('GET', './app.js', true);

xhr.onload = function()
{
  if(xhr.status === 200)
  {
    
    // Parse 
    const cu = JSON.parse(this.responseText);
    let output = '';
    cu.forEach(cu => {
      output += `
    <ul>
    <li>ID : ${cu.id}</li>
    <li>Name : ${cu.name}</li>
    <li>Company : ${cu.company}</li>
    <li>phone : ${cu.phone}</li>
    </ul>`;
    });

  
    
    
    document.getElementById('customers').innerHTML = output;
  }
}
xhr.send();

}