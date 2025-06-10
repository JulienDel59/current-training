var cercle = document.getElementById("cursor");

document.addEventListener('mousemove', (cursor) => {
    cercle.style.left = cursor.clientX + "px";
    cercle.style.top = cursor.clientY + "px";

    console.log(cursor.clientX, cursor.clientY);
    
});