let nome: string | null
console.log(nome!.toUpperCase())

function foo (x?: string | null) {
    return x!.toUpperCase()
}