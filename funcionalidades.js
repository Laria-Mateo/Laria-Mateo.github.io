document.addEventListener('click', function(){
    
})

let modo = true;
document.getElementById('btnNoche').addEventListener( 'click' , function()

{
    
    const pintar = document.getElementById('prueba');
    const pintar2 = document.getElementById('separado');
    const pintar3 = document.getElementById('Titulo');
    if (modo === true)
    {
        document.body.style.backgroundColor = 'black';
        pintar3.style.backgroundColor = '#566678';
        pintar2.style.backgroundColor = '#566678';
        pintar.style.backgroundColor = '#566678';
        modo = false;
        document.getElementById('btnNoche').textContent=" Modo Dia ☼ ";
            
        
    } 
    else if(modo === false) {
        document.body.style.backgroundColor = 'white';
        pintar.style.backgroundColor = 'rgb(246, 247, 241)';
        modo = true;
        pintar2.style.backgroundColor = 'rgb(244, 248, 190)';
        pintar3.style.backgroundColor = 'rgb(244, 248, 190)';
        document.getElementById('btnNoche').textContent="Modo Noche ☽";
    }
    
});


