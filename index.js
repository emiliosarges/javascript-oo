import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Emílio", "emi@lio.com", "1990-10-09");
console.log(novoUser.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com');
console.log(dadosFicticios);

/* 
const novoAdmin = new Admin("Luiza", "luiza@email.com", "1990-10-04")
console.log(novoAdmin.exibirInfos());

const novaDocente = new Docente("Paula", "paula@email.com", "1990-06-04");
console.log(novaDocente.exibirInfos()); */

