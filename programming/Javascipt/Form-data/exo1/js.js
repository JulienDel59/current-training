const inputPrenom = document.querySelector('Prenom')
const inputNom = document.querySelector('Nom')
let form = document.querySelector('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let data = new FormData(form)

    console.log(data.get("Nom"));
    console.log(data.get("Prenom"));
    
});