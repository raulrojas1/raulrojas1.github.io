let aleatnum = tamano=>{
    
    return Math.floor(Math.random()*tamano);
}

let getdistancia = (e,lugar) =>{
    let difx= e.offsetX-lugar.x;
    let dify= e.offsetY-lugar.y;
    return Math.sqrt((difx*difx)+(dify*dify));
}

let avisodistancia = distance =>{
    if(distance<5){
        alert("Oh sí, justo ahí");
        return "Encontrado en ";
    }
    else if(distance<10){
        return "Casi uiuiui!";
    }
    else if (distance<30 ) {
        return "Muy Muy cerca";
    }
    else if (distance<150) {
        return "Caliente";
    }
    else if (distance<180 ) {
        return "Frío";
    }
    else {
        return "Muy Frío"
    }
}
