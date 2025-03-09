// Não há necessidade de tipar variaveis obvias, tipos triviais, o TypeScript consegue inferir o tipo da variável

{
  let nome = "Gabriel";
  let idade = 26;
  let programador = true;

  function handleName(name: string): void {
    console.log(`Olá, ${name}`);
  }
}