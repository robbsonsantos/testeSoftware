// ===============================
// 1. VALIDAÇÃO DO FORMULÁRIO
// ===============================
const formulario = document.getElementById("formulario");
const msg = document.getElementById("mensagem");

function mostrarErro(texto) {
  msg.className = "erro";
  msg.textContent = "❌ " + texto;
}

function mostrarSucesso(texto) {
  msg.className = "sucesso";
  msg.textContent = "✅ " + texto;
}

function validar(nome, email, idade) {
  // Campo vazio
  if (nome.trim() === "") {
    return "Erro: o nome é obrigatório!";
  }
  if (email.trim() === "") {
    return "Erro: o e-mail é obrigatório!";
  }
  if (idade.trim() === "") {
    return "Erro: a idade é obrigatória!";
  }

  // Formato incorreto
  if (nome.trim().length < 3) {
    return "Erro: o nome deve ter pelo menos 3 letras!";
  }
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    return "Erro: formato de e-mail inválido (ex: nome@email.com)!";
  }
  if (isNaN(idade)) {
    return "Erro: a idade deve ser um número!";
  }
  if (Number(idade) < 1 || Number(idade) > 120) {
    return "Erro: a idade deve estar entre 1 e 120!";
  }

  return null; // sem erros
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;

  const erro = validar(nome, email, idade);

  if (erro) {
    mostrarErro(erro);
  } else {
    mostrarSucesso("Formulário enviado com sucesso!");
  }
});

// ===============================
// 2. FUNÇÃO + TESTE AUTOMATIZADO
// ===============================
function multiplicar(a, b) {
  return a * b;
}

function testarMultiplicacao() {
  let passou = true;

  function verificar(condicao, mensagem) {
    if (!condicao) {
      console.assert(false, mensagem);
      passou = false;
    }
  }

  verificar(multiplicar(2, 3) === 6, "Teste 1 falhou! (2 x 3)");
  verificar(multiplicar(-1, 5) === -5, "Teste 2 falhou! (-1 x 5)");
  verificar(multiplicar(0, 10) === 0, "Teste 3 falhou! (0 x 10)");
  verificar(multiplicar(4, 4) === 16, "Teste 4 falhou! (4 x 4)");

  if (passou) {
    console.log("✅ Todos os testes de multiplicação passaram!");
  }
}

testarMultiplicacao();