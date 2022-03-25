const nome = 'arm x'; 
const sobrenome = 'wolverine'; 
const idade = 30; 
const peso = 90; 
const alturaEmM = 1.80; 

 
let anoNascimento;
let imc = peso/ (alturaEmM * alturaEmM); 
anoNascimento = 2022 - idade;
 
//templates strings 
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`); 
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`); 
console.log(`${nome} nasceu em ${anoNascimento}.`);