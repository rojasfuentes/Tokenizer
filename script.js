  document.addEventListener("DOMContentLoaded", function () {
    const tokenBtn = document.querySelector(".buttons_token");
    const clearBtn = document.querySelector(".buttons_clear");
    const textBtn = document.querySelector(".buttons_text");
    const entrada = document.querySelector(".entrada_input");
    const salida = document.querySelector(".salida_output table");
    const tbody = document.createElement("tbody");

    
    function separarNumerosYCadena(input) {
        const regex = /(\d+(\.\d+)?|[a-zA-Z]+);/g;
        const regexdot = /(\d+(\.\d+)?|[a-zA-Z]+),/g; 

        const matches = input.match(regex);
        const dotmatches = input.match(regexdot);


        let output = input;
        if (matches !== null) {
            for (const match of matches) {
                output = output.replace(match, match.replace(";", " ;"));
            }
            if (dotmatches !== null) {
                for (const dotmatch of dotmatches) {
                    output = output.replace(dotmatch, dotmatch.replace(",", " ,"));
                }
            }
        }
        
        output = output.replace(/"([^"]*)"/g, function (match, p1) {
            const words = p1.split(" ");
            const replacedWords = words.map(function (word) {
                return "~~" + word + "~~";
            });
            
            return replacedWords.join(" ");
        });

        output = output.replace(/\(([^)]+)\)/g, function(match, p1) {
            const replacedText = p1.replace(/ /g, "--");
            return "(" + replacedText + ")";
          });
        

        return output;
    }




    tokenBtn.addEventListener("click", function () {
        
        tbody.innerHTML = "";
        
        let input = entrada.value.replace(/[\n\t]/g, " ");
        // borrar espacios en blanco
        input = input.replace(/\s+/g, " ");
        input = separarNumerosYCadena(input);
        const tokens = input.split(" ");
        console.log(tokens)

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            let tipo, lexema;
            lexema = token;

            if (token === "=") {
                tipo = "Igual";
            }else if (token.match(/^while$/)) {
                tipo = "Palabra reservada while";
            } else if (token === "+") {
                tipo = "Más";
            } else if (token === "-") {
                tipo = "Menos";
            } else if (token === "*") {
                tipo = "Multiplicación";
            } else if (token === "/" | "%") {
                tipo = "División";
            } else if (token === "(") {
                tipo = "Paréntesis izquierdo";
            } else if (token === ")") {
                tipo = "Paréntesis derecho";
            } else if (token === "[") {
                tipo = "Corchete izquierdo";
            } else if (token === "]") {
                tipo = "Corchete derecho";
            } else if (token === "<") {
                tipo = "Menor que";
            } else if (token === ">") {
                tipo = "Mayor que";
            } else if (token === "<=") {
                tipo = "Menor o igual que";
            } else if (token === ">=") {
                tipo = "Mayor o igual que";
            } else if (token === "==") {
                tipo = "Igualdad";
            } else if (token === "!=") {
                tipo = "Desigualdad";
            } else if (token === "&&") {
                tipo = "AND";
            } else if (token === "||") {
                tipo = "OR";
            } else if (token === "!") {
                tipo = "NOT";
            } else if (token === "%") {
                tipo = "Módulo";
            } else if (token === "/=") {
                tipo = "División igual";
            } else if (token === "*=") {
                tipo = "Multiplicación igual";
            } else if (token === "+=") {
                tipo = "Suma igual";
            } else if (token === "-=") {
                tipo = "Resta igual";
            } else if (token === "++") {
                tipo = "Incremento";
            } else if (token === "--") {
                tipo = "Decremento";
            }
            else if (token === ";") {
                tipo = "Punto y coma";
            } else if (token === ".") {
                tipo = "Punto";
            } else if (token === ",") {
                tipo = "Coma";
            } else if (token === "{") {
                tipo = "Llave izquierda";
            } else if (token === "}") {
                tipo = "Llave derecha";
            } else if (token === "int") {
                tipo = "Valor entero";
            } else if (token.match(/^\d+(\.\d+)?;$/)) {
                tipo = "Número";
            } else if (token.match(/^\d+(\.\d+)?$/)) {
                tipo = "Número";
            } else if (token.match(/^\d+(\.\d+)?:$/)) {
                tipo = "Número";
            } else if (token.match(/^\d+(\.\d+)?$/)) {
                tipo = "Número";
            } else if (token === '#include') {
                tipo = "Directiva #include";
            } else if (token.match(/^<[a-zA-Z]\w*>$/)) {
                tipo = "Archivo de cabecera";
            } else if (token === "using") {
                tipo = 'Palabra reservada "using"';
            } else if (token === "namespace") {
                tipo = 'Palabra reservada espacio de nombres';
            } else if (token === "std") {
                tipo = 'Nombre del namespace';
            } else if (token === "main()") {
                tipo = 'Función main';
            } else if (token.match(/~~([^~]*)~~/)) {
                tipo = "Texto";
            } else if (token.match(/--(.*while.*)--/)){
                tipo = "Ciclo While";
            } else if (token.match(/--(.*for.*)--/)){
                tipo = "Ciclo For";
            } 
            else if (token.match(/--(.*if.*)--/)){
                tipo = "Condicional If";
            }
            else if (token.match(/--([^-]*)--/)) {
                tipo = "Ciclo";
            } 
            else if (token === "cout") {
                tipo = "Palabra reservada cout";
            } else if (token === "<<") {
                tipo = "Operador de inserción";
            } else if (token === "cin") {
                tipo = "Palabra reservada cin";
            } else if (token === ">>") {
                tipo = "Operador de extracción";
            } else if (token === "endl") {
                tipo = "Palabra reservada endl";
            } else if (token === "if") {
                tipo = "Palabra reservada if";
            } else if (token === "else") {
                tipo = "Palabra reservada else";
            } else if (token === "for") {
                tipo = "Palabra reservada for";
            } else if (token === "while") {
                tipo = "Palabra reservada while";
            } else if (token === "do") {
                tipo = "Palabra reservada do";
            } else if (token === "switch") {
                tipo = "Palabra reservada switch";
            } else if (token === "case") {
                tipo = "Palabra reservada case";
            } else if (token === "break") {
                tipo = "Palabra reservada break";
            } else if (token === "default") {
                tipo = "Palabra reservada default";
            } else if (token === "return") {
                tipo = "Palabra reservada return";
            } else if (token === "true") {
                tipo = "Palabra reservada true";
            } else if (token === "false") {
                tipo = "Palabra reservada false";
            } else if (token === "bool") {
                tipo = "Palabra reservada bool";
            } else if (token === "char") {
                tipo = "Palabra reservada char";
            } else if (token === "string") {
                tipo = "Palabra reservada string";
            } else if (token === "float") {
                tipo = "Palabra reservada float";
            } else if (token === "double") {
                tipo = "Palabra reservada double";
            } else if (token === "void") {
                tipo = "Palabra reservada void";
            } else if (token === "struct") {
                tipo = "Palabra reservada struct";
            } else if (token === "class") {
                tipo = "Palabra reservada class";
            } else if (token === "private") {
                tipo = "Palabra reservada private";
            } else if (token === "public") {
                tipo = "Palabra reservada public";
            } else if (token === "protected") {
                tipo = "Palabra reservada protected";
            } else if (token === "new") {
                tipo = "Palabra reservada new";
            } else if (token === "delete") {
                tipo = "Palabra reservada delete";
            } else if (token === "this") {
                tipo = "Palabra reservada this";
            } else if (token === "const") {
                tipo = "Palabra reservada const";
            } else if (token === "static") {
                tipo = "Palabra reservada static";
            } else if (token === "virtual") {
                tipo = "Palabra reservada virtual";
            } else if (token === "friend") {
                tipo = "Palabra reservada friend";
            } else if (token === "operator") {
                tipo = "Palabra reservada operator";
            } else if (token === "template") {
                tipo = "Palabra reservada template";
            } else if (token === "typedef") {
                tipo = "Palabra reservada typedef";
            } else if (token === "try") {
                tipo = "Palabra reservada try";
            } else if (token === "catch") {
                tipo = "Palabra reservada catch";
            } else if (token === "throw") {
                tipo = "Palabra reservada throw";
            } else if (token === "explicit") {
                tipo = "Palabra reservada explicit";
            } else if (token === "inline") {
                tipo = "Palabra reservada inline";
            } else if (token === "namespace") {
                tipo = "Palabra reservada namespace";
            } else if (token === "typeid") {
                tipo = "Palabra reservada typeid";
            } else if (token === "sizeof") {
                tipo = "Palabra reservada sizeof";
            } else if (token === "enum") {
                tipo = "Palabra reservada enum";
            }    
            else if (token.match(/^[a-zA-Z_]\w*$/)) {
                tipo = "Identificador";
            } 
                else {
                tipo = "Error";
            }
            lexema = token.replace(/\(([^)]+)\)/g, function(match, p1) {
                return "(" + p1.replace(/--/g, " ") + ")";
              });
            lexema = token.replace(/~~([^~]*)~~/g, function (match, p1) {
                return '' + p1.replace(/~/g, " ") + '';
            });


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
        }, 1000);

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
            '#include <iostream>' + '\n'+ 'using namespace std;' + '\n' + 'int main() {' + '\n' + '\t ' + 'for (int i = 0; i < 5; i++) {' + '\n' + '\t' + '\t ' + 'cout << "Iteración " << i + 1 << endl;' + '\n' + '\t ' + '}'+ '\n' + '\t ' + 'return 0;' + '\n' + '}',
            '#include <iostream>' + '\n' + 'using namespace std;' + '\n' + 'int main() {' + '\n' + '\t ' + 'int extNum, sumDigit = 0, numEntero;' + '\n' + '\t ' + 'cout << "Ingrese un numero entero:";' + '\n' + '\t ' + 'cin >> numEntero;' + '\n' + '\t ' + 'while (numEntero != 0) {' + '\n' + '\t' + '\t ' + 'extNum = numEntero % 10;' + '\n' + '\t \t ' + 'numEntero /= 10;' + '\n' + '\t' + '\t ' + 'sumDigit += extNum;' + '\n' + '\t ' + '}' + '\n' + '\t ' + 'cout << "La suma de los digitos es: " << sumDigit << endl;' + '\n' + '\t ' + 'return 0;' + '\n' + '}',
            '#include <iostream>' + '\n' + 'using namespace std;' + '\n' + 'int main() {' + '\n' + '\t ' + 'int x = 10;' + '\n' + '\t ' + 'if (x > 5) {' + '\n' + '\t' + '\t ' + 'cout << "El número es mayor que 5" << endl;' + '\n' + '\t ' + '}' + '\n' + '\t ' + 'return 0;' + '\n' + '}',
            '//Autor: Oscar Alejandro' + '\n' + '//email: santamariaoscar@gmail.com' + '\n' + '//Fecha de elaboracion: 11/01/2020' + '\n' + '//Fecha de modificacion: 13/10/2020' + '\n' + '//Descripcion: Programa que calcula el area de un triangulo' + '#include <iostream>' + '\n' + 'using namespace std;' + '\n' + 'int main() {' + '\n' + '\t ' + 'int day = 4;' + '\n' + '\t ' + 'switch (day) {' + '\n' + '\t' + '\t ' + 'case 1:' + '\n' + '\t' + '\t' + '\t ' + 'cout << "Lunes" << endl;' + '\n' + '\t' + '\t' + '\t ' + 'break;' + '\n' + '\t' + '\t ' + 'case 2:' + '\n' + '\t' + '\t' + '\t ' + 'cout << "Martes" << endl;' + '\n' + '\t' + '\t' + '\t ' + 'break;' + '\n' + '\t' + '\t ' + 'case 3:' + '\n' + '\t' + '\t' + '\t ' + 'cout << "Miércoles" << endl;' + '\n' + '\t' + '\t' + '\t ' + 'break;' + '\n' + '\t' + '\t ' + 'case 4:' + '\n' + '\t' + '\t' + '\t ' + 'cout << "Jueves" << endl;' + '\n' + '\t' + '\t' + '\t ' + 'break;' + '\n' + '\t' + '\t ' + 'case 5:' + '\n' + '\t' + '\t' + '\t ' + 'cout << "Viernes" << endl;' + '\n' + '\t' + '\t' + '\t ' + 'break;' + '\n' + '\t' + '\t ' + 'default :' + '\n' + '\t' + '\t' + '\t ' + 'cout << "Día inválido" << endl;' + '\n' + '\t' + '\t' + '\t ' + 'break;' + '\n' + '\t ' + '}' + '\n' + '\t ' + 'return 0;' + '\n' + '}',
            '//Autor: Jose Fuentes' + '\n' + '//email: josefuentes@gmail' + '\n' + '//Fecha de elaboracion: 12/10/2020' + '\n' + '//Fecha de modificacion: 13/10/2020' + '\n' + '//Descripcion: Programa que calcula el area de un triangulo'
        ];

        const ejemploAleatorio = ejemplos[Math.floor(Math.random() * ejemplos.length)];
        entrada.value = ejemploAleatorio;
    }


});
/* 
document.addEventListener("DOMContentLoaded", function () {
    const entrada = document.querySelector(".entrada_input");
    const salida = document.querySelector(".salida_output table");
    const sintacticoBtn = document.querySelector(".buttons_sint");

    sintacticoBtn.addEventListener("click", function () {
        console.log("click");

        const input = document.querySelector(".entrada_input").value;
        const lines = input.split("\n");

        const tokens = [];
        const lexemas = [];

        lines.forEach(line => {
            const tokenLexema = line.split(":");
            const token = tokenLexema[0].trim().replace("//", ""); 
            let lexema = tokenLexema[1] ? tokenLexema[1].trim() : '';

            // Validar lexemas
            switch (token) {
                case 'Autor':
                    lexema = /^[a-zA-Z\s]+$/.test(lexema) ? lexema : 'error'; 
                    break;
                case 'email':
                    lexema = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lexema) ? lexema : 'error'; 
                    break;
                case 'Fecha de elaboracion':
                case 'Fecha de modificacion':
                    lexema = /^([0-9]{1,2}\/[0-9]{1,2}\/([0-9]{2}|[0-9]{4}))$/.test(lexema) ? lexema : 'error';
                    break;
            }

            tokens.push(token);
            lexemas.push(lexema);
        });

        console.log("Tokens:", tokens);
        console.log("Lexemas:", lexemas);

        let tableHTML = '<tr><th>Token</th><th>Lexema</th></tr>';

        for (let i = 0; i < tokens.length; i++) {
            tableHTML += `<tr><td>${tokens[i]}</td><td>${lexemas[i]}</td></tr>`;
        }

        salida.innerHTML = tableHTML;
        
        const starIcon = document.getElementById("star-icon");
            starIcon.classList.add("rotate-once");
            setTimeout(() => {
                starIcon.classList.remove("rotate-once");
            }, 1000);
    }, false);
});
 */