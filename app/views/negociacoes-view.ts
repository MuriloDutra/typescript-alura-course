import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView{
    private elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }

    update(model: Negociacoes): void{
        this.elemento.innerHTML = this.template(model)
    }

    template(model: Negociacoes): string{
        return (`
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map((negociacao) => {
                        return (`
                            <tr>
                                <td>?</td>
                                <td>${negociacao.quantidade}</td>
                                <td>R$${negociacao.valor}</td>
                            </tr>
                        `)
                    }).join("")}
                </tbody>
            </table>
        `);
    }
}