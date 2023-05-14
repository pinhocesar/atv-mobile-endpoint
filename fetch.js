async function carregaLista() {
    const response = await fetch("http://127.0.0.1:1880/listar");
    const jsonData = await response.json();
    
    console.log(jsonData);

    let corpoTabela = document.getElementById('corpo_tabela');
    let listaFormatada = [];


    for (let item of jsonData) {
        let registroFormatado = `<tr><th scope="row">${item.id}</th>
        <td>${item.nome}</td>
        <td>${item.cpf}</td>
        <td>${item.dt_nasc}</td></tr>`;

        listaFormatada.push(registroFormatado);
    }

    corpoTabela.innerHTML = listaFormatada.join('');
}