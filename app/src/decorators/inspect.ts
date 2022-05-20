export function inspect (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value
    descriptor.value = function (...args: Array<any>){
        console.log(`Método: ${propertyKey}`)
        console.log(`Parâmetros: ${JSON.stringify(args)}`)
        const ret = metodoOriginal.apply(this, args)
        console.log(`retorno: ${JSON.stringify(ret)}`)
        return ret
    }
    return descriptor
}
