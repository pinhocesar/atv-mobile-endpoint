async function carregaLista() {
    const response = await fetch("http://127.0.0.1:1880/listar", {
        method: 'GET',
    });

    const jsonData = await response.json();

    let corpoTabela = document.getElementById('corpo_tabela');
    let listaFormatada = [];

    for (let item of jsonData) {
        let registroFormatado = `<tr">
        <th scope="row">${item.id}</th>
        <td>${item.nome}</td>
        <td>${item.cpf}</td>
        <td>${item.dt_nasc}</td>
        <td><button onclick="editaRegistro(${item.id})" type="button" class="btn btn-warning"><i class="bi bi-pencil-square"></i></button></td>
        <td><button onclick="deletaRegistro(${item.id})" type="button" class="btn btn-danger"><i class="bi bi-trash3"></i></button></td>
        </tr>`;

        listaFormatada.push(registroFormatado);
    }

    corpoTabela.innerHTML = listaFormatada.join('');
}

async function criaRegistro() {
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

    carregaLista();

    window.location.reload();

    alert('registro criado');
}

async function editaRegistro(id) {
    // const response = await fetch(`http://127.0.0.1:1880/deletar?id=${id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(corpo_req),
    //     headers: {"Content-Type": "application/json; charset=UTF-8"}
    // });

    // const jsonData = await response.json();

    alert('falta editar');
}

async function deletaRegistro(id) {
    const response = await fetch(`http://127.0.0.1:1880/deletar?id=${id}`, {
        method: 'DELETE',
    });

    const jsonData = await response.json();

    carregaLista();

    window.location.reload();

    alert('registro deletado');
}