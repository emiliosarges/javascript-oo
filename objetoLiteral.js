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

/* user.exibirInfos(); */