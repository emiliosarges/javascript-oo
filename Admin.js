import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super (nome, email, nascimento, role, ativo);
    }
    //Sobreecrita de método abaxo: 
    /* exibirInfos() {
        const infos = super.exibirInfos()
        return `admin - ${infos}`;
    } 
    Na classe User está sendo usando o IF para modificar os comportamentos essa maneira de fazer isso direto na subclasse é chamado de @Override.     
    */

    criarCurso(nomeCurso, qtdVagas) {
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`;
    }

}

