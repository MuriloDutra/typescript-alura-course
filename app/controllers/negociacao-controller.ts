import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","))
        return new Negociacao(
            date,
            parseInt(this.inputQuantidade.value),
            parseFloat(this.inputValor.value)
        )
    }

    limparFormulario(): void{
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }
}