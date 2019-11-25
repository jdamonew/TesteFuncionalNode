var Table = function(){
    this.id = [1,2,3,4,5,6,7]
    this.name = ['Damone', 'Jóbia', 'Amanda', 'Maria', 'Filipe', 55];
    this.old = [21,19,23,15,20,17];

};

Table.prototype.nome = function(){

    let nome = this.name[Math.floor(Math.random() * this.name.length)];
    console.log('O nome é ' + nome);
    return nome;

}

Table.prototype.identidade = function(){

    let id = this.id[Math.floor(Math.random() * this.id.length)];
    console.log('O ID é ' + id);
    return id;

}

Table.prototype.idade = function(){

    let idade = this.old[Math.floor(Math.random() * this.old.length)];
    console.log('A idade é ' + idade);
    return idade;

}

let tabela = new Table();

module.exports = tabela;

