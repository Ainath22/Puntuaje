var score=0;
function actualizar()
{
    score = score + 1;
    document.getElementById("score").innerHTML="Puntuaje: " + score;

}

function guardar()
{
localStorage.setItem("score", score);
}

function siguiente()
{
    window.location="activity_2.html";
}
