async function carregaLista() {
    const response = await fetch("http://127.0.0.1:1880/listar");
    const jsonData = await response.json();

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

async function novoRegistro() {
    let nome = document.getElementById('input_nome').value;
    let cpf = document.getElementById('input_cpf').value;
    let dt_nasc = document.getElementById('input_dt_nasc').value;

    let corpo_req = {
        "nome": nome,
        "cpf": cpf,
        "dt_nasc": dt_nasc
    }

    const response = await fetch("http://127.0.0.1:1880/inserir", {
        method: 'POST',
        body: JSON.stringify(corpo_req),
        headers: {"Content-Type": "application/json; charset=UTF-8"}
    });

    const responseJson = await response.json();

    window.location.reload();
}