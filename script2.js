document.addEventListener("DOMContentLoaded", function () {
  const entrada = document.querySelector(".entrada_input");
  const salida = document.querySelector(".salida_output table");
  const sintacticoBtn = document.querySelector(".buttons_sint");
  const tbody = document.createElement("tbody");
  const documentatorOutput = document.querySelector(".documentator_output_text");

  const datos = [];

  sintacticoBtn.addEventListener("click", function () {
    tbody.innerHTML = "";

    const input = document.querySelector(".entrada_input").value;
    const lines = input.split("\n");

    const tokens = [];
    const lexemas = [];

    lines.forEach(line => {
      if (line.startsWith("//")) {
        const tokenLexema = line.split(":");
        const token = tokenLexema[0].trim().replace("//", "");
        let lexema = tokenLexema[1] ? tokenLexema[1].trim() : '';

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

        if (line.includes("//")) {
          const dato = `Comentario: ${line.trim()}`;
          datos.push(dato);
        }

        tokens.push(token);
        lexemas.push(lexema);
      } else if (line.includes("#include")) {
        const dato = `Archivos de cabecera: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("using namespace")) {
        const dato = `Espacio de nombres: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("%")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("+")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("-")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("*")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("/")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("%=")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("+=")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("-=")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("*=")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("/=")) {
        const dato = `Operación: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("class")) {
        const dato = `Clase: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("for")) {
        const dato = `Ciclo: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("while")) {
        const dato = `Ciclo: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("do")) {
        const dato = `Ciclo: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("if")) {
        const dato = `Condicion: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("else")) {
        const dato = `Condicion: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("switch")) {
        const dato = `Condicion: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("case")) {
        const dato = `Condicion: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("break")) {
        const dato = `Condicion: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("return")) {
        const dato = `Condicion: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("cout")) {
        const dato = `Salida: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("cin")) {
        const dato = `Entrada: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("endl")) {
        const dato = `Salida: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("int")) {
        const dato = `Variables: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("float")) {
        const dato = `Variables: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("double")) {
        const dato = `Variables: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("char")) {
        const dato = `Variables: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("string")) {
        const dato = `Variables: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("bool")) {
        const dato = `Variables: ${line.trim()}`;
        datos.push(dato);
      } else if (line.includes("void")) {
        const dato = `Metodo: ${line.trim()}`;
        datos.push(dato);
      }

      datos.sort();
    });

    let tableHTML = '<tr><th>Token</th><th>Lexema</th></tr>';

    for (let i = 0; i < tokens.length; i++) {
      tableHTML += `<tr><td>${tokens[i]}</td><td>${lexemas[i]}</td></tr>`;
    }

    salida.innerHTML = tableHTML;

  }, false);

  const starIcon = document.getElementById("star-icon");

  starIcon.addEventListener("click", function () {
    const tableRows = Array.from(salida.getElementsByTagName("tr"));

    let outputText = "";

    for (let i = 0; i < tableRows.length; i++) {
      const cells = tableRows[i].getElementsByTagName("td");
      if (cells.length === 2) {
        const token = cells[0].innerText;
        const lexema = cells[1].innerText;
        outputText += `${token}: ${lexema}\n`;
      }
    }

    if (datos.length > 0) {
      outputText += `\n***Datos del código***:\n${datos.join("\n")}\n\n`;
    }

    documentatorOutput.textContent += outputText;
  });
});
