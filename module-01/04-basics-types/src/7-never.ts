{
    let a: string = 'Lucas'
    const b = 23
    let c: unknown = a
    c = b
    c = null
    c = undefined
    c = {}
    c = []
    c = c
    c = void 0
    c = 100n

    const x = c

    const o: string = c
}