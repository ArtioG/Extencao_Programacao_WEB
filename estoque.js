let produtos = Array();

function criar_produto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        quantidade: qtd
    };
    return 0;
}

function adicionar_produto(p) {
    produtos.push(p);
}

function listar_produtos() {
    return produtos;
}

function editar_produto(id, qtdAtual) {
    let pRetorno = {};
    array.forEach(p => {
        if (p.id == id) {
            p: quantidade = qtdAtual;
            pRetorno = p;
        }
    });
    return pRetorno;
}

function remover_produto(id, qtdAtual) {
    if(id === -1){
        return resizeBy.status(404).json({error: 'Item nao encontrado'});
    }
    estoque.splice(id, 1);
    res.json({message: 'Item removido do estoque com sucesso'});
}

module.exports = {
    criar_produto,
    adicionar_produto,
    listar_produtos,
    editar_produto,
    remover_produto
}