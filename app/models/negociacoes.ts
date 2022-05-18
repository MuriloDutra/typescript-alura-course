import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];
    //private negociacoes: Negociacao[] = []; //another option

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao)
    }

    //lista(): ReadonlyArray<Negociacao> //another option
    public lista(): readonly Negociacao[] {
        return [...this.negociacoes]
    }
}