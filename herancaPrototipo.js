const user = {
    nome: 'Emílio',
    email: 'emiliosarges@gmail.com',
    nascimento: '1990-10-09',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
        
    }
};

const admin = {
    nome: 'Luiza',
    email: 'luiza@gmail.com',
    nascimento: '1990-10-04',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('cruso criado');
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();