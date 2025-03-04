import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super (nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome} `;
    }
}

/* const novaDocente = new Docente("Ana", "ana@email.com", "2010-01-15");
console.log(novaDocente.aprovarEstudante('Joãozinho', 'JavaScript'));
 */