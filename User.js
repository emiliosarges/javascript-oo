export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error('formato do nome não é válido')
        }
        this.#nome = novoNome
    }


/*     exibirInfos() {
        return `Nome: ${this.nome} | ${this.email}`;
    }
} */
// Essa forma de modificar o comportamento dos métodos é chamada de Overload = Sobrecargar
    exibirInfos() {
        if (this.role === "estudante") {
            return `Dados estudante: ${this.nome}`;
        }
        if (this.role === "admin") {
            return `Dados admin: ${this.nome}, ${this.role}`;
        }
        if (this.role === "docente") {
            return `Dados docente: ${this.nome}, ${this.email}`;
        }

    }

    static exibirInfosGenericas(nome, email) {
        return `${nome}, ${email}`
    }

}


/* 
const novoUser = new User('Emílio', 'emilio@email.com', '1990-10-09'); */

/* 
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser)); */