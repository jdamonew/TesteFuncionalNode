var chai = require('chai').assert;
var Recorde = require('../indexTest');

describe('Teste de Funcionalidade', function(){

    let baguio = Recorde;
    let lengthListID = baguio.id;


    it.skip('VERIFICA SE EXISTE UM ID IGUAL A 2', function(){
        chai.equal(baguio.identidade(), 2);       
    });


    it.skip('VERIFICA SE O NOME RETORNA UMA STRING', function(){
        chai.isString(baguio.nome(), 'string');
    });

    it.skip('VERIFICA SE A IDADE É MAIOR QUE 18', function(){
     chai.isAtLeast(baguio.idade(), 18);
    });
    
    it('VERIFICA SE EXISTE O ID INDICADO', function(){

    
        for(let i=0; i < lengthListID.length; i++){
            
            let id = baguio.identidade();
            chai.oneOf( 7 ,baguio.id);

        }
 
    });

});

