export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //private negociacoes: Negociacao[] = []; //another option
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): ReadonlyArray<Negociacao> //another option
    lista() {
        return [...this.negociacoes];
    }
}
