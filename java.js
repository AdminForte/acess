document.getElementById("form-orcamento").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Aqui você pode obter os valores dos campos e realizar ações, como salvar em PDF ou enviar por e-mail
    // Por enquanto, vamos apenas exibir os valores no console
    const maquina = document.getElementById("maquina").value;
    // Obtenha os outros valores dos campos semelhantemente

    console.log("Descrição da Máquina:", maquina);
    // Exiba os outros valores do formulário

    // Para salvar em PDF ou enviar por e-mail, você pode usar bibliotecas como jsPDF ou enviar os dados para um servidor
});
