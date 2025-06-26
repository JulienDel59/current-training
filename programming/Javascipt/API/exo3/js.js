const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupération des valeurs des champs
    const firstName = document.querySelector('input[name="FirstName"]').value;
    const lastName = document.querySelector('input[name="LastName"]').value;
    const age = document.querySelector('input[name=Age]').value;

    console.log(`Prénom: ${firstName}, Nom: ${lastName}`);

    // Envoi des données à l'API
    fetch('https://685a75ec9f6ef96111567ea2.mockapi.io/utilisateur', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Prenom: firstName,
            Nom: lastName ,
            Age : age
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