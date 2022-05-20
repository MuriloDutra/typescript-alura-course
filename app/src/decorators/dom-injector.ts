export function domInjector(seletor: string){
    return function(target: any, propertyKey: string){
        const getter = function(){
            const elemento = document.querySelector(seletor)
            return elemento
        }
        console.log("target: ", target)
        Object.defineProperty(target, propertyKey, {get: getter})
    }
}