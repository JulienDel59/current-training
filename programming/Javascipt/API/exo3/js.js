// const btnSubmit = document.querySelector('.btnSubmit');
// const btnText = document.querySelector('.btnText');
// const firstName = document.querySelector('name');
// const lastName = document.querySelector('name');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const btnText = document.querySelector('.btnText');
//     let text = btnText.value;
//     console.log(text);


//   fetch('https://685a75ec9f6ef96111567ea2.mockapi.io/utilisateur', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       prenom: firstName,
//       nom: lastName
//     })
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
//   })

// });

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupération des valeurs des champs
    const firstName = document.querySelector('input[name="FirstName"]').value;
    const lastName = document.querySelector('input[name="LastName"]').value;

    console.log(`Prénom: ${firstName}, Nom: ${lastName}`);

    // Envoi des données à l'API
    fetch('https://685a75ec9f6ef96111567ea2.mockapi.io/utilisateur', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Prenom: firstName,
            Nom: lastName
        })
    })
    .then((response) => response.json())
    .then((data) => {
        alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
    })
    .catch((error) => {
        console.error('Erreur lors de l’envoi des données :', error);
    });
});