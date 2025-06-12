   function gererClic(event) {
    const boutonClique = event.target.id;
    console.log("id :" + boutonClique);
}
    const boutons = document.querySelectorAll("button");

    boutons.forEach(function(bouton) {
    bouton.addEventListener("click", gererClic);
});

    // ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        
    //     function gererClic(event) {
    //         const boutonClique = event.target;
    //         console.log("Bouton cliqué : " + boutonClique.id);
    //     }

    //     function showId(clicked_id) {
    //     console.log(clicked_id);
    // }


    // :::::::::::::::::::::::::::::::::::::::::::::

//     const btn1 = document.getElementById("monBouton1")
//     const btn2 = document.getElementById("monBouton2")
//     const btn3 = document.getElementById("monBouton3")

//     function btnPress (){
//     btn1.addEventListener('click', () => {
//         console.log(btn1.id);
//     });
//     btn2.addEventListener('click', () => {
//         console.log(btn2.id);
//     });
//     btn3.addEventListener('click', () => {
//         console.log(btn3.id);
//     });
// }

// btnPress ()