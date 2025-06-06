    //  const bouton = document.getElementById("supprimerBtn");

    //     bouton.addEventListener("click", function() {
    //         const liste = document.getElementById("maListe");
    //         const premierElement = liste.querySelector("li");

    //         if (premierElement) {
    //             liste.removeChild(premierElement);
    //         }
    //     });

                function suprimeElement() {
            const liste = document.getElementById("maListe");
            const premierLi = liste.querySelector("li");

            if (premierLi) {
                liste.removeChild(premierLi);
            }
        }