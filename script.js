function numbersToWords() {
    let n = document.getElementById("numero").value;
    
  

    //let n = 100;
    let d = n.toString() 
    arr100 = []
    resp100 = []
    count20 = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezeseis', 'dezessete', 'dezoito', 'dezenove', 'vinte']

    for (let i = 0; i < d.length; i++){
        arr100.push(d[i]);
    }

    if ( n == 1000){
        resp100.push("mil")
    } else if (n <= 20){ 
        // até 20:
        resp100.push(count20[n])
    } else if ((n > 20) && (n <= 100)){
        // até 100:
        if (arr100[0] === '2'){
            resp100.push("vinte");        
        } else if (arr100[0] === '3'){
            resp100.push("trinta");
        } else if (arr100[0] === '4'){
            resp100.push("quarenta");
        } else if (arr100[0] === '5'){
            resp100.push("cinquenta");
        } else if (arr100[0] === '6'){
            resp100.push("sessenta");
        } else if (arr100[0] === '7'){
            resp100.push("Setenta");
        } else if (arr100[0] === '8'){
            resp100.push("ointenta");
        } else if (arr100[0] === '9'){
            resp100.push("noventa");
        } else {
            resp100.push("cem")
        }  
        if (arr100[1] === '0'){
            resp100.push("")    
        } else if (arr100[1] === '1'){
            resp100.push('e um.')
        } else if (arr100[1] === '2'){
            resp100.push('e dois.')
        } else if (arr100[1] === '3'){
            resp100.push('e três.')
        } else if (arr100[1] === '4'){
            resp100.push('e quatro.')
        } else if (arr100[1] === '5'){
            resp100.push('e cinco.')
        } else if (arr100[1] === '6'){
            resp100.push('e seis.')
        } else if (arr100[1] === '7'){
            resp100.push('e sete.')
        } else if (arr100[1] === '8'){
            resp100.push('e oito.')
        } else if (arr100[1] === '9'){
            resp100.push('e nove.')
        }
    } else if ((n > 100) && (n <= 1000)) {
        if (arr100[0] === '1'){
            resp100.push("cento"); 
        } else if (arr100[0] === '2'){
            resp100.push("duzentos");        
        } else if (arr100[0] === '3'){
            resp100.push("trezentos");
        } else if (arr100[0] === '4'){
            resp100.push("quatrocentos");
        } else if (arr100[0] === '5'){
            resp100.push("quinhentos");
        } else if (arr100[0] === '6'){
            resp100.push("seiscentos");
        } else if (arr100[0] === '7'){
            resp100.push("Setecentos");
        } else if (arr100[0] === '8'){
            resp100.push("oitocentos");
        } else if (arr100[0] === '9'){
            resp100.push("novecentos");
        } 
        if (arr100[1] === '0'){
            resp100.push(""); 
        } else if(arr100[1] ==='1'){
            if ((n > 110) && (n < 120)){
                resp100.push(" e " + count20[n-100])
            }else if ((n > 210) && (n < 220)){
                resp100.push(" e " + count20[n-200])
            } else if ((n > 310) && (n < 320)){
                resp100.push(" e " + count20[n-300])
            } else if ((n > 410) && (n < 420)){
                resp100.push(" e " + count20[n-400])
            } else if ((n > 510) && (n < 520)){
                resp100.push(" e " + count20[n-500])
            } else if ((n > 610) && (n < 620)){
                resp100.push(" e " + count20[n-600])
            } else if ((n > 710) && (n < 720)){
                resp100.push(" e " + count20[n-700])
            } else if ((n > 810) && (n < 820)){
                resp100.push(" e " + count20[n-800])
            } else if ((n > 910) && (n < 920)){
                resp100.push(" e " + count20[n-900])
            } else {
                resp100.push("e dez"); 
            }                     
        } else if (arr100[1] === '2'){
            resp100.push("e vinte");        
        } else if (arr100[1] === '3'){
            resp100.push("e trinta");
        } else if (arr100[1] === '4'){
            resp100.push("e quarenta");
        } else if (arr100[1] === '5'){
            resp100.push("e cinquenta");
        } else if (arr100[1] === '6'){
            resp100.push("e sessenta");
        } else if (arr100[1] === '7'){
            resp100.push(" e setenta");
        } else if (arr100[1] === '8'){
            resp100.push("e ointenta");
        } else if (arr100[1] === '9'){
            resp100.push("e noventa");
        } else {
            resp100.push("cem")
        }  
        if (arr100[2] === '0'){
            resp100.push("")    
        } else if (arr100[2] === '1'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
                resp100.push('e um.')
            }
        } else if (arr100[2] === '2'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e dois.')
            }
        } else if (arr100[2] === '3'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e três.')
            }
        } else if (arr100[2] === '4'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e quatro.')
            }
        } else if (arr100[2] === '5'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e cinco.')
            }
        } else if (arr100[2] === '6'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e seis.')
            }
        } else if (arr100[2] === '7'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e sete.')
            }
        } else if (arr100[2] === '8'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e oito.')
            }
        } else if (arr100[2] === '9'){
            if (((n > 110) && (n < 120)) || ((n > 210) && (n < 220)) || ((n > 310) && (n < 320)) || ((n > 410) && (n < 420)) || ((n > 510) && (n < 520)) || ((n > 610) && (n < 620)) || ((n > 710) && (n < 720)) || ((n > 810) && (n < 820)) || ((n > 910) && (n < 920))){
                resp100.push('')
            } else {
            resp100.push('e nove.')
            }
        }        

    } else {
        resp100.push('Número inválido! Digite um número de 0 a 1000.')
    }

    let aux = resp100.join(' ') 
    let respfim = aux[0].toUpperCase() + aux.substr(1); 

document.getElementById("demo").innerHTML = respfim;


}


//const str = 'ricardo';
//const capitalized = str[0].toUpperCase() + str.substr(1); // Ricardo




