
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {
    let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  
    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso!`);
    return false; // Prevent actual form submission
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