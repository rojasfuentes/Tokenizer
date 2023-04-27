document.addEventListener("DOMContentLoaded", function () {
    const tokenBtn = document.querySelector(".buttons_token");
    const clearBtn = document.querySelector(".buttons_clear");
    const textBtn = document.querySelector(".buttons_text");
    const entrada = document.querySelector(".entrada_input");
    const salida = document.querySelector(".salida_output table");
    const tbody = document.createElement("tbody");

    function separarNumerosYCadena(input) {
        const regex = /(\d+;)/g;
        const matches = input.match(regex);
        let output = input;
        if (matches !== null) {
            for (const match of matches) {
                output = output.replace(match, match.replace(";", " ;"));
            }
        }
        return output;
    }

    tokenBtn.addEventListener("click", function () {
        tbody.innerHTML = "";

        let input = entrada.value.replace(/\n/g, " "); // Reemplazar los enter por espacio
        input = separarNumerosYCadena(input);
        const tokens = input.split(" ");

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            let tipo, lexema;

            if (token.match(/^[a-zA-Z_]\w*$/)) { // Identificador
                tipo = "Identificador";
                lexema = token;
            } else if (token === "=") { // Igual
                tipo = "Igual";
                lexema = token;
            } else if (token === "+") { // Suma
                tipo = "Más";
                lexema = token;
            } else if (token === "-") { // Resta
                tipo = "Menos";
                lexema = token;
            } else if (token === "*") { // Multiplicación
                tipo = "Multiplicación";
                lexema = token;
            } else if (token === "/") { // División
                tipo = "División";
                lexema = token;
            } else if (token === ";") { // Punto y coma
                tipo = "Punto y coma";
                lexema = token;
            } else if (token === ".") { // Punto
                tipo = "Punto";
                lexema = token;
            } else if (token.match(/^\d+(\.\d+)?;$/)) { // Número seguido de punto y coma
                tipo = "Número";
                lexema = token.replace(";", "");
            } else if (token.match(/^\d+(\.\d+)?$/)) { // Número
                tipo = "Número";
                lexema = token;
            } else { // Error
                tipo = "Error";
                lexema = token;
            }

            const tr = document.createElement("tr");
            const tipoTd = document.createElement("td");
            tipoTd.innerText = tipo;
            const lexemaTd = document.createElement("td");
            lexemaTd.innerText = lexema;
            tr.appendChild(tipoTd);
            tr.appendChild(lexemaTd);
            tbody.appendChild(tr);
        }

        salida.appendChild(tbody);

        const starIcon = document.getElementById("star-icon");
        starIcon.classList.add("rotate-once");
        setTimeout(() => {
            starIcon.classList.remove("rotate-once");
        }, 1000); // la animación tarda 1 segundo, así que espera ese tiempo antes de eliminar la clase

    });

    clearBtn.addEventListener("click", function () {
        entrada.value = "";
        tbody.innerHTML = "";
        salida.appendChild(tbody);
    });

    textBtn.addEventListener("click", generarEjemplo);

    function generarEjemplo() {
        const ejemplos = [
            "Ident1 = 23;" + "\n" + "Ident2 = 2;" + "\n" + "Ident1 + Ident2;" + "\n" + "$$",
            "Ident3 = 10;" + "\n" + "Ident4 = 5;" + "\n" + "Ident3 * Ident4;",
            "Ident5 = 50;" + "\n" + "Ident6 = 2;" + "\n" + "Ident5 / Ident6;",
            "Ident7 = 7;" + "\n" + "Ident8 = 3;" + "\n" + "Ident7 - Ident8;",
            "Ident1 = 23;" + "\n" + "Ident2 = 2;" + "\n" + "Ident3 = Ident1 + Ident2;" + "\n" + "Ident4 = Ident3 * 3;" + "\n" + "Ident5 = Ident4 / Ident2;" + "\n" + "Ident5 - 10;" + "\n" + "$$",
            "Ident6 = 5;" + "\n" + "Ident7 = 2;" + "\n" + "Ident8 = Ident6 + Ident7;" + "\n" + "Ident9 = Ident8 - Ident6;" + "\n" + "Ident10 = Ident9 * 10;" + "\n" + "Ident11 = Ident10 / Ident7;" + "\n" + "$$",
            "Ident12 = 100;" + "\n" + "Ident13 = 20;" + "\n" + "Ident14 = Ident12 - Ident13;" + "\n" + "Ident15 = Ident14 * 2;" + "\n" + "Ident16 = Ident15 / Ident13;" + "\n" + "Ident17 = Ident14 + Ident16;" + "\n" + "$$",
            "Ident18 = 30;" + "\n" + "Ident19 = 5;" + "\n" + "Ident20 = Ident18 + Ident19;" + "\n" + "Ident21 = Ident20 - Ident19;" + "\n" + "Ident22 = Ident21 * Ident19;" + "\n" + "Ident23 = Ident22 / Ident19;" + "\n" + "$$"

        ];

        const ejemploAleatorio = ejemplos[Math.floor(Math.random() * ejemplos.length)];
        entrada.value = ejemploAleatorio;
    }


    //Icono
});
