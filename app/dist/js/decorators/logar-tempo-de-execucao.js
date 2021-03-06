export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = emSegundos ? 1000 : 1;
            let unidade = emSegundos ? "segundos" : "milisegundos";
            const t1 = performance.now();
            const ret = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            ret;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map