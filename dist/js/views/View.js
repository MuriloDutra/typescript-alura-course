export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (escapar)
            this.escapar = escapar;
        if (elemento)
            this.elemento = elemento;
        else
            throw Error(` Seletor ${seletor} não existe no DOM, verifique.`);
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            /<script>[\s\S]*?<script>/;
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
