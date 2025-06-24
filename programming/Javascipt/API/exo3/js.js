const btnSubmit = document.querySelector('.btnSubmit');
const btnText = document.querySelector('btnText');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('.btnText');
    let text = name.value;
    console.log(text);
})


