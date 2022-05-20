export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let ret = metodoOriginal.apply(this, args);
        if (typeof ret === "string") {
            ret = ret.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return ret;
    };
    return descriptor;
}
