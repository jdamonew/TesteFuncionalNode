var chai = require('chai').assert;
var Recorde = require('../indexTest');

describe('\t TESTE DE FUNCIONALIDADES ', function(){

    let baguio = Recorde;
    let lengthListID = baguio.id;
    let lengthListIdade = baguio.old;
    let lengthListNome = baguio.name;

    // 1
    it.skip('VERIFICA SE EXISTE UM ID IGUAL A 2;', function(){
        
        for(let i=0; i < lengthListIdade.length; i++){
            
            chai.oneOf( 2 ,baguio.id);
        }
    });

    // 2
    it.skip('VERIFICA SE O NOME RETORNA APENAS STRING;', function(){
        //chai.isString(baguio.nome(), 'string');

        for(let i=0; i < lengthListNome.length; i++){
            
            chai.isString(lengthListNome[i], 'string');
        }
    });

    // 3
    it('VERIFICA SE A IDADE É MAIOR QUE 18;', function(){
     chai.isAtLeast(baguio.idade(), 18, 'Idade menor que o permitido.');
    });

    // 4    
    it.skip('VERIFICA SE EXISTE O ID INDICADO;', function(){
    
        for(let i=0; i < lengthListID.length; i++){
            
            
            chai.oneOf( 2000 ,baguio.id);
        }
    });

    // 5
    it.skip('VERIFICA SE EXISTE APENAS IDADE É INTEIRO;', function(){
        
        for(let i=0; i < lengthListIdade.length; i++){
            
            chai.isTrue(Number.isInteger(lengthListIdade[i]), 'Não é um numero inteiro: '  + lengthListIdade[i]);
            
        
        }


    });

});

