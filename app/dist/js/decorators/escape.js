export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let ret = metodoOriginal.apply(this, args);
        if (typeof ret === "string") {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            ret = ret.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return ret;
    };
    return descriptor;
}
