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
  
      let tableHTML = '<tr><th>Token</th><th>Lexema</th></tr>';
  
      for (let i = 0; i < tokens.length; i++) {
        tableHTML += `<tr><td>${tokens[i]}</td><td>${lexemas[i]}</td></tr>`;
      }
  
      salida.innerHTML = tableHTML;
  
    }, false);
  });
  