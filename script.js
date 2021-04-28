function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML=(`Agora são ${hora} horas`) 

    if (hora == 1){
        msg.innerHTML=(`Estamos de madrugada mas já é Bom dia, é ${hora} hora`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        //De madrugada
    }
    
    else if (hora >=2 && hora <= 4){ 
        msg.innerHTML=(`Estamos de madrugada mas já é Bom dia, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        //De madrugada
    }

    else if (hora >=5 && hora <= 12){        
        msg.innerHTML=(`Bom dia, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/dia.png`
        //Bom dia
    }
  
    else if(hora > 12 && hora <= 18  ){
        msg.innerHTML=(`Boa tarde, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/tarde.png`
        //Boa tarde
    }

    else if(hora == 0){
        msg.innerHTML=(`A madrugada começa, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        //De madrugada 
    }
     
    else {
        msg.innerHTML=(`Boa noite, são ${hora} horas`)
        img.src = `c:/Programacao/cursoJavascript/aula13/img/noite.png`
        //Boa noite
    }

}

