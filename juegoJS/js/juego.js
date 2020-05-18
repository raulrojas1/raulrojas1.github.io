const ancho= 900;
const alto=574;

let lugar={
    x: aleatnum(ancho),
    y: aleatnum(alto)
}

let cliccont=0;
let puerta=true;
let htmlugar = document.getElementById("fondo");
let $aviso = document.getElementById("aviso");
let reboot= document.getElementById("reiniciar");


htmlugar.addEventListener('click', function(e) {
    if (puerta==true)
    {cliccont+=1;
    let distancia= getdistancia(e,lugar);
    let distanceHint= avisodistancia(distancia);
    $aviso.innerHTML= distanceHint+" "+cliccont+" Clic";
    if(distanceHint=="Encontrado en "){
        console.log("debería parar");
        puerta=false;
        reboot.innerHTML= '<button onClick="history.go(0);" id="reiniciar">Reiniciar</button>';
    }
    }
})
