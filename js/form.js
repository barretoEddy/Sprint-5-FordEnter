
//class contato

class contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form, event) {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();
    
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );
    
    console.log('Dados do formulário:', data);
    
    alert(`Obrigado sr(a) ${data.nome}, os seus dados foram encaminhados com sucesso!`);

    form.reset();

    return false; 
}

document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-btn");

    if (submitButton) {
        submitButton.addEventListener("mouseover", function() {
            submitButton.style.backgroundColor = "#0056b3";
            submitButton.style.transform = "scale(1.05)";
        });

        submitButton.addEventListener("mouseout", function() {
            submitButton.style.backgroundColor = "#007bff";
            submitButton.style.transform = "scale(1)";
        });
    }
});