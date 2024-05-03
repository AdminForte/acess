document.addEventListener("DOMContentLoaded", function() {
    // Botão Enviar por WhatsApp
    document.getElementById("enviar-whatsapp").addEventListener("click", function() {
        enviarWhatsApp();
    });

    // Função para enviar os dados do formulário via WhatsApp
    function enviarWhatsApp() {
        // Obter os valores dos campos do formulário
        var maquina = document.getElementById("maquina").value;
        var cliente = document.getElementById("cliente").value;
        var fazenda = document.getElementById("fazenda").value;
        var valor = document.getElementById("valor").value;
        var data = document.getElementById("data").value;
        var descricao = document.getElementById("descricao").value;

        // Verificar se os campos obrigatórios estão preenchidos
        if (maquina === "" || cliente === "" || fazenda === "" || valor === "" || data === "" || descricao === "") {
            alert("Por favor, preencha todos os campos do formulário.");
            return;
        }

        // Montar a mensagem com os dados do formulário
        var mensagem = "Descrição da Máquina: " + maquina + "\n";
        mensagem += "Nome do Cliente: " + cliente + "\n";
        mensagem += "Nome da Fazenda: " + fazenda + "\n";
        mensagem += "Valor a Pagar: " + valor + "\n";
        mensagem += "Data: " + data + "\n";
        mensagem += "Descrição do Serviço: " + descricao;

        // Criar o link do WhatsApp com a mensagem pré-preenchida
        var linkWhatsApp = "https://wa.me/?text=" + encodeURIComponent(mensagem);

        // Abrir o WhatsApp com a mensagem pré-preenchida
        window.open(linkWhatsApp);

        // Limpar os campos do formulário após enviar os dados
        document.getElementById("maquina").value = "";
        document.getElementById("cliente").value = "";
        document.getElementById("fazenda").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("data").value = "";
        document.getElementById("descricao").value = "";
    }
});


/* Estilos específicos para a impressão */
@media print {
    body {
        background-image: url('logo.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .container {
        background-color: transparent; /* Torna o fundo transparente para que a imagem seja visível */
    }

    /* Adicione estilos para garantir que a imagem seja visível ao imprimir */
    h1,
    label,
    input,
    textarea,
    button {
        color: #000; /* Altera a cor do texto para preto para melhor legibilidade */
    }
}
