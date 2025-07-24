class Telefone {
    constructor(
        private _ddd: string,
        private _numero: number,
        private _tipo: string
    ) { }
    get ddd(): string {
        return this._ddd;
    }
    set ddd(value: string) {
        this._ddd = value;
    }
    get numero(): number {
        return this._numero;
    }
    set numero(value: number) {
        this._numero = value;
    }
    get tipo(): string {
        return this._tipo;
    }
    set tipo(value: string) {
        this._tipo = value;
    }
}
class Endereco {
    constructor(
        private _rua: string,
        private _numero: number,
        private _cidade: string,
        private _estado: string
    ) { }
    get rua(): string {
        return this._rua;
    }
    set rua(value: string) {
        this._rua = value;
    }
    get numero(): number {
        return this._numero;
    }
    set numero(value: number) {
        this._numero = value;
    }
    get cidade(): string {
        return this._cidade;
    }
    set cidade(value: string) {
        this._cidade = value;
    }
    get estado(): string {
        return this._estado;
    }
    set estado(value: string) {
        this._estado = value;
    }
}
class Cliente {
    constructor(
        private _nome: string,
        private _cpf: number,
        private _datanasc: number,
        private _sexo?: string,
        private _endereco?: Endereco,
        private _telefone?: Telefone
    ) { }
    get nome(): string {
        return this._nome;
    }
    set nome(value: string) {
        this._nome = value;
    }
    get cpf(): number {
        return this._cpf;
    }
    set cpf(value: number) {
        this._cpf = value;
    }
    get datanasc(): number {
        return this._datanasc;
    }
    set datanasc(value: number) {
        this._datanasc = value;
    }
    get sexo(): string | undefined {
        return this._sexo;
    }
    set sexo(value: string | undefined) {
        this._sexo = value;
    }
    get endereco(): Endereco | undefined {
        return this._endereco;
    }
    set endereco(value: Endereco | undefined) {
        this._endereco = value;
    }
    get telefone(): Telefone | undefined {
        return this._telefone;
    }
    set telefone(value: Telefone | undefined) {
        this._telefone = value;
    }
}

class Produto {
    constructor(
        private _codigo: number,
        private _descricao: string,
        private _valor: number
    ) { }
    get codigo(): number {
        return this._codigo;
    }
    set codigo(value: number) {
        this._codigo = value;
    }
    get descricao(): string {
        return this._descricao;
    }
    set descricao(value: string) {
        this._descricao = value;
    }
    get valor(): number {
        return this._valor;
    }
    set valor(value: number) {
        this._valor = value;
    }
}
class Venda {
    constructor(
        private _codigo: number,
        private _data: number,
        private _cliente: Cliente,
        private _produto: Produto
    ) { }
    get codigo(): number {
        return this._codigo;
    }
    set codigo(value: number) {
        this._codigo = value;
    }
    get data(): number {
        return this._data;
    }
    set data(value: number) {
        this._data = value;
    }
    get cliente(): Cliente {
        return this._cliente;
    }
    set cliente(value: Cliente) {
        this._cliente = value;
    }
    get produto(): Produto {
        return this._produto;
    }
    set produto(value: Produto) {
        this._produto = value;
    }
    calcularTotal(): number {
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

        const cliente1 = new Cliente(
            "Carlos",
            11111111111,
            19900515,
            "Masculino",
            endereco1,
            telefone1
        );

        const cliente2 = new Cliente(
            "Gean",
            22222222222,
            19850820,
            "Feminino",
            endereco2,
            telefone2
        );

        const cliente3 = new Cliente(
            "Lucas",
            33333333333,
            19751010,
            "Masculino",
            endereco3,
            telefone3
        );

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
