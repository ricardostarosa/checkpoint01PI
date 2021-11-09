
// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 


let micro = (tipo , tempo) => {

    let segundos = 0;

    // let tipo = "Pipoca";
    // let tempo = 10;
    
    switch(tipo){

        case "Pipoca": segundos = 10;
        break;
        case "Macarrão": segundos = 8;
        break;
        case "Carne": segundos = 15;
        break;
        case "Feijão": segundos = 12;
        break;
        case "Brigadeiro": segundos = 8;
        break;
        default:
            console.log("Prato Inexistente!");
    }

    segundos;

    if(tempo > (3*segundos)){

        console.log('kabumm');
    
    }else if(tempo > (2*segundos)){

        console.log("A comida queimou!");
    
    }else if(tempo < segundos){

        console.log("tempo insuficiente");
    
    }else{

        console.log("Prato pronto, bom apetite!!!");

    }


}

micro("Feijão" , 12);