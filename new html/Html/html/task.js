function initiate(){
    let saveBtn = document.getElementById('button');
    saveBtn.addEventListener('click',saveItem);
}

function saveItem(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('same').value;
    let designation = document.getElementById('designation').value;
    let salary = document.getElementById('salary').value;
    let loc = document.getElementById('location').value;
    let email = document.getElementById('email').value;
    let date = document.getElementById('Date').value;
    let contact = document.getElementById('contact').value;

let data=[
    {Name:name},
    {age:age},
    {gender:gender},
    {designation:designation},
    {salary:salary},
    {Loc:loc},
    {Email:email},
    {Date:date},
    {contact:contact},
]
let jsondata = JSON.stringify(data);
sessionStorage.setItem(name,jsondata);

}
addEventListener("load",initiate);