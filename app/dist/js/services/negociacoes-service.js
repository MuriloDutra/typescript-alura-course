import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then(res => res === null || res === void 0 ? void 0 : res.json())
            .then((dados) => {
            return dados.map(item => {
                return new Negociacao(new Date(), item.vezes, item.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map