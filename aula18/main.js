function ampliaEsq(div){    
    console.log('Ampliou!');
    div.style.transform = 'scale(2,2)';
    div.style.transition = "2s";
    div.style.zIndex = "11";
    div.style.transformOrigin = "center left";
}

function ampliaCent(div){    
    console.log('Ampliou!');
    div.style.transform = 'scale(2,2)';
    div.style.transition = "2s";
    div.style.zIndex = "10";
}

function ampliaDir(div){    
    console.log('Ampliou!');
    div.style.transform = 'scale(2,2)';
    div.style.transition = "2s";
    div.style.zIndex = "10";
    div.style.transformOrigin = "center right";
}

function encolhe(div){
    console.log('Encolheu!');
    div.style.transform = 'scale(1,1)';
    div.style.transition = "2s";
    div.style.zIndex = "9";
}