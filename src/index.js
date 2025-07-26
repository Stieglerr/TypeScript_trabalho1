"use strict";
class Telefone {
    constructor(ddd, numero, tipo) {
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }
    get ddd() {
        return this._ddd;
    }
    set ddd(value) {
        this._ddd = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
}
class Endereco {
    constructor(rua, numero, cidade, estado) {
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }
    get rua() {
        return this._rua;
    }
    set rua(value) {
        this._rua = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }
}
class Cliente {
    constructor(nome, cpf, datanasc, sexo, endereco, telefone) {
        this._nome = nome;
        this._cpf = cpf;
        this._datanasc = datanasc;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefone = telefone;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    get datanasc() {
        return this._datanasc;
    }
    set datanasc(value) {
        this._datanasc = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(value) {
        this._endereco = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
}
class Produto {
    constructor(codigo, descricao, valor) {
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }
    get descricao() {
        return this._descricao;
    }
    set descricao(value) {
        this._descricao = value;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
}
class Venda {
    constructor(codigo, data, cliente, produto) {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produto = produto;
    }
    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get produto() {
        return this._produto;
    }
    set produto(value) {
        this._produto = value;
    }
    calcularTotal() {
        return this._produto.valor;
    }
}
class App {
    static objetos() {
        const endereco1 = new Endereco("Rua 1", 100, "Parana", "PR");
        const endereco2 = new Endereco("Rua 2", 200, "Rio de Janeiro", "RJ");
        const endereco3 = new Endereco("Rua 3", 300, "TOquio", "JP");
        const telefone1 = new Telefone("11", 321312312, "celular");
        const telefone2 = new Telefone("21", 432423423, "residencial");
        const telefone3 = new Telefone("31", 543534534, "comercial");
        const cliente1 = new Cliente("Carlos", 11111111111, 19900515, "Masculino", endereco1, telefone1);
        const cliente2 = new Cliente("Gean", 22222222222, 19850820, "Feminino", endereco2, telefone2);
        const cliente3 = new Cliente("Lucas", 33333333333, 19751010, "Masculino", endereco3, telefone3);
        const produto1 = new Produto(1, "1", 1000);
        const produto2 = new Produto(2, "2", 2000);
        const produto3 = new Produto(3, "3", 3000);
        const produto4 = new Produto(4, "4", 4000);
        const produto5 = new Produto(5, "5", 5000);
        const venda1 = new Venda(1, 43242342, cliente1, produto1);
        const venda2 = new Venda(2, 54354353, cliente2, produto2);
        const venda3 = new Venda(3, 31231231, cliente3, produto3);
        const venda4 = new Venda(4, 32423423, cliente1, produto5);
        return {
            clientes: [cliente1, cliente2, cliente3],
            produtos: [produto1, produto2, produto3, produto4, produto5],
            vendas: [venda1, venda2, venda3, venda4]
        };
    }
}
const objetos = App.objetos();
console.log("Clientes: ", objetos.clientes.length);
console.log("Produtos: ", objetos.produtos.length);
console.log("Vendas: ", objetos.vendas.length);
