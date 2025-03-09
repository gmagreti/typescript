// Declaração explícita de tipos || Type annotation
// Pois estamos dizendo explicitamente qual é o tipo da variável
// Isso é opcional, pois o TypeScript consegue inferir o tipo da variável

const nome: string = "Gabriel";
const idade: number = 26;
const programador: boolean = true;

function handleName(name: string): void {
  console.log(`Olá, ${name}`);
}

// Todo tipo iniciado com letra maiúscula é um construtor daquele tipo
// String
// Number
// Boolean

class Pessoa {
  nome: string = "Gabriel";
}