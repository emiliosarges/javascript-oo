class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibirInfos() {
        return `Nome: ${this.nome} | ${this.email}`;
    }
}

const novoUser = new User('Emílio', 'emilio@email.com', '1990-10-09');

console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser));
