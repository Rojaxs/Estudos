async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida

}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhosto:3000/videos", {
        method : "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida;
}

async function buscarVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscarVideo
}

// json-server --watch db.json    colocar isso no terminal TODA A VEZ QUE ABRIR O VS CODE