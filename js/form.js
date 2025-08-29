
//class contato

class contato {
    constructor(nome, email, telefone, tipoContato, mensagem, aceitouTermos, aceitouNewsletter) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
        this.aceitouTermos = aceitouTermos;
        this.aceitouNewsletter = aceitouNewsletter;
    }
}

function Post(form, event) {
    // Prevenir o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    const termosCheckbox = document.getElementById("termosCheckbox");
    const submitBtn = document.getElementById("submit-btn");

    if (!termosCheckbox.checked) {
        alert("Você deve aceitar os termos e condições para enviar o formulário.");
        return false;
    }
    
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value,
        termosCheckbox.checked,
        newsletterCheckbox.checked
    );
    
    console.log('Dados do formulário:', data);
    
    alert(`Obrigado sr(a) ${data.nome}, os seus dados foram encaminhados com sucesso!`);
    termosCheckbox.checked = false;
    newsletterCheckbox.checked = false;
    submitBtn.disabled = true;

    validarEnvio();

    form.reset();

    return false; 
}

function validarEnvio() {
    const termosCheckbox = document.getElementById("termosCheckbox");
    const submitButton = document.getElementById("submit-btn");
    submitButton.disabled = !termosCheckbox.checked;
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