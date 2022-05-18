export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const newDate = new Date(this._data.getTime());
        return newDate;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(dateString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
