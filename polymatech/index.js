botaoEstudar = document.querySelector('.botao.estudar');
botaoRanking = document.querySelector('.botao.ranking');
botaoPerfil = document.querySelector('.botao.perfil');
botaoSobre = document.querySelector('.botao.sobre');

function ativar(algo){
    algo.classList.add('ativo');
}

function desativar(algo){
    algo.classList.remove('ativo');
}




botaoEstudar.addEventListener('click', ()=>{
    ativar(botaoEstudar);
    desativar(botaoRanking);
    desativar(botaoPerfil);
    desativar(botaoSobre);
})

botaoRanking.addEventListener('click',()=>{
    desativar(botaoEstudar);
    ativar(botaoRanking);
    desativar(botaoPerfil);
    desativar(botaoSobre);
})

botaoPerfil.addEventListener('click',()=>{
    desativar(botaoEstudar);
    desativar(botaoRanking);
    ativar(botaoPerfil);
    desativar(botaoSobre);
})

botaoSobre.addEventListener('click',()=>{
    desativar(botaoEstudar);
    desativar(botaoRanking);
    desativar(botaoPerfil);
    ativar(botaoSobre);
})
