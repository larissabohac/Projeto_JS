
const form = document.getElementById("formCadastro");
const radioAluno = document.getElementById("radioAluno");
const radioProfessor = document.getElementById("radioProfessor");
const camposAluno = document.getElementById("camposAluno");
const camposProfessor = document.getElementById("camposProfessor");
const saida = document.getElementById("saida");

class Pessoa {
  setNome(nome) { this.nome = nome; }
  setSobrenome(sobrenome) { this.sobrenome = sobrenome; }
  setEmail(email) { this.email = email; }
  setDataNascimento(data) { this.dataNascimento = data; }
  setTelefoneFixo(fixo) { this.telefoneFixo = fixo; }
  setTelefoneCelular(celular) { this.telefoneCelular = celular; }
}

class Aluno extends Pessoa {
  setCurso(curso) { this.curso = curso; }
  setMatricula(matricula) { this.matriculaAluno = matricula; }
}

class Professor extends Pessoa {
  setAreaAtuacao(area) { this.areaAtuacao = area; }
  setMatricula(matricula) { this.matriculaProfessor = matricula; }
}


function limparErros() {
  document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");
}

function preencherPadraoAluno() {
  document.getElementById("nome").value = "João";
  document.getElementById("sobrenome").value = "Silva";
  document.getElementById("email").value = "joao.silva@email.com";
  document.getElementById("dataNascimento").value = "2000-05-15";
  document.getElementById("telefoneFixo").value = "(11)1234-5678";
  document.getElementById("telefoneCelular").value = "(11)98765-4321";

  radioAluno.checked = true;
  camposAluno.classList.remove("d-none");
  camposProfessor.classList.add("d-none");

  document.getElementById("curso").value = "ADS";
  document.getElementById("matriculaAluno").value = "1234567890";
  document.getElementById("areaAtuacao").value = "";
  document.getElementById("matriculaProfessor").value = "";
}


function preencherPadraoProfessor() {
  document.getElementById("nome").value = "Maria";
  document.getElementById("sobrenome").value = "Oliveira";
  document.getElementById("email").value = "maria.oliveira@escola.com";
  document.getElementById("dataNascimento").value = "1980-09-10";
  document.getElementById("telefoneFixo").value = "(21)2222-3333";
  document.getElementById("telefoneCelular").value = "(21)98888-7777";

  radioProfessor.checked = true;
  camposProfessor.classList.remove("d-none");
  camposAluno.classList.add("d-none");

  document.getElementById("areaAtuacao").value = "Matemática";
  document.getElementById("matriculaProfessor").value = "54321";
  document.getElementById("curso").value = "";
  document.getElementById("matriculaAluno").value = "";
}

function mostrarCampos() {
  if (radioAluno.checked) {
    preencherPadraoAluno();
  } else if (radioProfessor.checked) {
    preencherPadraoProfessor();
  }
  limparErros();
  saida.textContent = "";
}


function validarNome() {
  const nome = document.getElementById("nome").value.trim();
  if (nome === "") {
    document.getElementById("erroNome").textContent = "Nome é obrigatório.";
    return false;
  }
  return true;
}

function validarSobrenome() {
  const sobrenome = document.getElementById("sobrenome").value.trim();
  if (sobrenome === "") {
    document.getElementById("erroSobrenome").textContent = "Sobrenome é obrigatório.";
    return false;
  }
  return true;
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    document.getElementById("erroEmail").textContent = "Email inválido.";
    return false;
  }
  return true;
}

function validarData() {
  const data = document.getElementById("dataNascimento").value;
  if (!data) {
    document.getElementById("erroData").textContent = "Data obrigatória.";
    return false;
  }
  return true;
}

function validarFixo() {
  const tel = document.getElementById("telefoneFixo").value.trim();
  if (tel.length < 10) {
    document.getElementById("erroFixo").textContent = "Telefone fixo inválido.";
    return false;
  }
  return true;
}

function validarCelular() {
  const tel = document.getElementById("telefoneCelular").value.trim();
  if (tel.length < 10) {
    document.getElementById("erroCelular").textContent = "Telefone celular inválido.";
    return false;
  }
  return true;
}

function validarTipo() {
  if (!radioAluno.checked && !radioProfessor.checked) {
    document.getElementById("erroTipo").textContent = "Selecione Aluno ou Professor.";
    return false;
  }
  return true;
}

function validarCurso() {
  if (radioAluno.checked) {
    const curso = document.getElementById("curso").value.trim();
    if (curso === "") {
      document.getElementById("erroCurso").textContent = "Curso é obrigatório.";
      return false;
    }
  }
  return true;
}

function validarAreaAtuacao() {
  if (radioProfessor.checked) {
    const area = document.getElementById("areaAtuacao").value.trim();
    if (area === "") {
      document.getElementById("erroArea").textContent = "Área de atuação é obrigatória.";
      return false;
    }
  }
  return true;
}

function validarMatriculaAluno() {
  if (radioAluno.checked) {
    const matricula = document.getElementById("matriculaAluno").value.trim();
    if (matricula.length !== 10) {
      document.getElementById("erroMatriculaAluno").textContent = "Matrícula deve ter 10 dígitos.";
      return false;
    }
  }
  return true;
}

function validarMatriculaProfessor() {
  if (radioProfessor.checked) {
    const matricula = document.getElementById("matriculaProfessor").value.trim();
    if (matricula.length !== 5) {
      document.getElementById("erroMatriculaProf").textContent = "Matrícula deve ter 5 dígitos.";
      return false;
    }
  }
  return true;
}

function validarTudo() {
  let valido = true;
  if (!validarNome()) valido = false;
  if (!validarSobrenome()) valido = false;
  if (!validarEmail()) valido = false;
  if (!validarData()) valido = false;
  if (!validarFixo()) valido = false;
  if (!validarCelular()) valido = false;
  if (!validarTipo()) valido = false;

  if (radioAluno.checked) {
    if (!validarCurso()) valido = false;
    if (!validarMatriculaAluno()) valido = false;
  }

  if (radioProfessor.checked) {
    if (!validarAreaAtuacao()) valido = false;
    if (!validarMatriculaProfessor()) valido = false;
  }

  return valido;
}


radioAluno.addEventListener("change", mostrarCampos);
radioProfessor.addEventListener("change", mostrarCampos);


form.addEventListener("reset", function () {
  setTimeout(() => {
    preencherPadraoAluno();
    limparErros();
    saida.textContent = "";
  }, 0);
});


form.addEventListener("submit", function (e) {
  e.preventDefault();
  limparErros();

  if (!validarTudo()) {
    saida.textContent = "Corrija os erros antes de enviar.";
    return;
  }

  let pessoaObj;
  if (radioAluno.checked) {
    pessoaObj = new Aluno();
    pessoaObj.setCurso(document.getElementById("curso").value.trim());
    pessoaObj.setMatricula(document.getElementById("matriculaAluno").value.trim());
  } else if (radioProfessor.checked) {
    pessoaObj = new Professor();
    pessoaObj.setAreaAtuacao(document.getElementById("areaAtuacao").value.trim());
    pessoaObj.setMatricula(document.getElementById("matriculaProfessor").value.trim());
  }

  pessoaObj.setNome(document.getElementById("nome").value.trim());
  pessoaObj.setSobrenome(document.getElementById("sobrenome").value.trim());
  pessoaObj.setEmail(document.getElementById("email").value.trim());
  pessoaObj.setDataNascimento(document.getElementById("dataNascimento").value);
  pessoaObj.setTelefoneFixo(document.getElementById("telefoneFixo").value.trim());
  pessoaObj.setTelefoneCelular(document.getElementById("telefoneCelular").value.trim());

  saida.textContent = JSON.stringify(pessoaObj, null, 2);
});

preencherPadraoAluno();
