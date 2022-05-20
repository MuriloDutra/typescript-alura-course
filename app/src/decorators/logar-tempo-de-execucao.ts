export function logarTempoDeExecucao(emSegundos:boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value
        
        descriptor.value = function (...args: Array<any> ){
            let divisor = emSegundos ? 1000 : 1 
            let unidade = emSegundos ? "segundos": "milisegundos"
            const t1 = performance.now()
            const ret = metodoOriginal.apply(this, args)//biding
            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`)
            ret
        }

        return descriptor;
    }
}