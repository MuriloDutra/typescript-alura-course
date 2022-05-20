export function domInjector(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        console.log("target: ", target);
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
