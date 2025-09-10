function exercicio1() {
        let numero1;
        do {
            numero1 = prompt("Digite um número inteiro positivo:");
            numero1 = Number(numero1);
        } while (!Number.isInteger(numero1) || numero1 <= 0);

        if (numero1 % 2 === 0) {
            alert(`O número ${numero1} é PAR.`);
        } else {
            alert(`O número ${numero1} é ÍMPAR.`);
        }
    }

    function exercicio2() {
        let numero2;
        do {
            numero2 = prompt("Digite um número inteiro positivo:");
            numero2 = Number(numero2);
        } while (!Number.isInteger(numero2) || numero2 <= 0);

        let primo = true;
        if (numero2 === 1) {
            primo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(numero2); i++) {
                if (numero2 % i === 0) {
                    primo = false;
                    break;
                }
            }
        }

        if (primo) {
            alert(`O número ${numero2} é PRIMO.`);
        } else {
            alert(`O número ${numero2} NÃO é primo.`);
        }
    }

    function exercicio3() {
        let numero3;
        do {
            numero3 = prompt("Digite um número inteiro positivo:");
            numero3 = Number(numero3);
        } while (!Number.isInteger(numero3) || numero3 <= 0);

        let fatorial = 1;
        for (let i = 2; i <= numero3; i++) {
            fatorial *= i;
        }

        alert(`O fatorial de ${numero3} é ${fatorial}`);
    }

    function exercicio4() {
        let dado = prompt("Digite qualquer valor:");
        let confirmar = confirm("Deseja verificar o tipo do dado informado?");

        let resultado = document.getElementById("resultado");
        if (confirmar) {
            let tipo = typeof dado;
            if (!isNaN(dado) && dado.trim() !== "") {
                tipo = "number";
            }
            resultado.innerHTML = `<h2>O tipo do dado informado é: <strong>${tipo}</strong></h2>`;
        } else {
            resultado.innerHTML = `<h2>Obrigado por visitar esta página.</h2>`;
        }
    }