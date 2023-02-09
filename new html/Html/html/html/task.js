function initiate(){
    var saveBtn = document.getElementById('button');
    saveBtn.addEventListener('click',saveItem);
}

function saveItem(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('same').value;
    var designation = document.getElementById('designation').value;
    var salary = document.getElementById('salary').value;
    var loc = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('Date').value;
    var contact = document.getElementById('contact').value;

var data=[
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
var jsondata = JSON.stringify(data);
sessionStorage.setItem(name,jsondata);

}
addEventListener("load",initiate);