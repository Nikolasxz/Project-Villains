const botoes = document.querySelectorAll(".botao")
const characters = document.querySelectorAll(".character")

botoes.forEach((botao, indice) =>  {
    botao.addEventListener("click", () =>{
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selected");
        characters[indice].classList.add("selected");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".character.selected");
    personagemSelecionado.classList.remove("selected");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selected");

    botaoSelecionado.classList.remove("selected");
}