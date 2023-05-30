
document.addEventListener("DOMContentLoaded", function () {
    const entrada = document.querySelector(".entrada_input");
    const salida = document.querySelector(".salida_output table");
    const sintacticoBtn = document.querySelector(".buttons_sint");
    const tbody = document.createElement("tbody");
  
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
        }
      });
  
      console.log("Tokens:", tokens);
      console.log("Lexemas:", lexemas);
      const starIcon = document.getElementById("star-icon");
      starIcon.classList.add("rotate-once");
      setTimeout(() => {
          starIcon.classList.remove("rotate-once");
      }, 1000);
  
      let tableHTML = '<tr><th>Token</th><th>Lexema</th></tr>';
  
      for (let i = 0; i < tokens.length; i++) {
        tableHTML += `<tr><td>${tokens[i]}</td><td>${lexemas[i]}</td></tr>`;
      }
  
      salida.innerHTML = tableHTML;
  
    }, false);
  });
  
  const starIcon = document.getElementById("star-icon");

starIcon.addEventListener("click", function () {
  // Crear un objeto PDF
  const doc = new jsPDF();
  
  // Agregar contenido al PDF
  doc.text("Entrada:", 10, 10);
  doc.text(entrada.value, 10, 20);

  doc.text("Tokens:", 10, 40);
  doc.text(tokens.join(", "), 10, 50);

  doc.text("Lexemas:", 10, 70);
  doc.text(lexemas.join(", "), 10, 80);

  doc.text("Salida:", 10, 100);
  doc.text(salida.innerHTML, 10, 110);

  // Descargar el PDF
  doc.save("informacion.pdf");
});

  