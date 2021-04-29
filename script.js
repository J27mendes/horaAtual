function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora =data.getHours() 
    msg.innerHTML=(`Agora são ${hora} horas`) 

    if (hora == 1){
        msg.innerHTML=(`Estamos de madrugada mas já é Bom dia, é ${hora} hora`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        document.body.style.background= 'rgb(2, 70, 114)'
        //De madrugada
    }
    
    else if (hora >=2 && hora <= 4){ 
        msg.innerHTML=(`Estamos de madrugada mas já é Bom dia, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        document.body.style.background='rgb(34, 113, 168)'
        //De madrugada
    }

    else if (hora >=5 && hora <= 12){        
        msg.innerHTML=(`Bom dia, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/dia.png`
        document.body.style.background='rgb(226, 215, 94)'
        //Bom dia
    }
  
    else if(hora > 12 && hora <= 18  ){
        msg.innerHTML=(`Boa tarde, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/tarde.png`
        document.body.style.background='rgb(171, 140, 146)'
        //Boa tarde
    }

    else if(hora == 0){
        msg.innerHTML=(`A madrugada começa, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        document.body.style.background='rgb(12, 41, 65)'
        //De madrugada 
    }
     
    else {
        msg.innerHTML=(`Boa noite, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        document.body.style.background='rgb(142, 183, 215)'
        //Boa noite
    }

}
