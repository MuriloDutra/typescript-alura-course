export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date{
    const newDate = new Date(this._data.getTime())
    return newDate
  }

  get volume(): number{
    return this.quantidade * this.valor;
  }

  public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao{
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ","))
    const quantidade = parseInt(quantidadeString)
    const valor = parseInt(valorString)

    return new Negociacao(date, quantidade, valor)
  }
}
