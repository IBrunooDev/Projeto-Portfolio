/**
 * terminal.js — Console interativo (recurso, não navegação principal)
 */

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("terminal-input");
  const screen = document.getElementById("terminal-screen");
  const output = document.querySelector(".terminal-output");

  if (!input || !screen || !output) return;

  const pages = {
    inicio: "index.html",
    sobre: "sobre.html",
    carreira: "carreira.html",
    projetos: "projetos.html",
    skills: "skills.html",
    skill: "skills.html",
    certificados: "certificados.html",
    certificado: "certificados.html",
    contato: "contato.html",
  };

  const print = (html, className = "") => {
    const line = document.createElement("div");
    line.className = `terminal-line ${className}`.trim();
    line.innerHTML = html;
    output.appendChild(line);
    screen.scrollTop = screen.scrollHeight;
  };

  const help = () => {
    print('<span class="terminal-muted">Comandos deste console:</span>');
    print("whoami     — breve apresentação");
    print("stack      — tecnologias que uso");
    print("ls         — páginas do site");
    print("clear      — limpar a tela");
    print("help       — esta lista");
    print('<span class="terminal-muted">Também dá para abrir uma página digitando o nome dela.</span>');
  };

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    print(`<span class="terminal-prompt">root@ibrunoodev:~$</span> ${cmd || ""}`);

    if (!cmd) return;

    if (cmd === "help") {
      help();
      return;
    }

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    if (cmd === "whoami") {
      print("Bruno Henrique — desenvolvedor front-end em formação.");
      print("Osasco / São Paulo. Foco em interfaces claras e código organizado.");
      return;
    }

    if (cmd === "stack") {
      print("HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind · Git");
      return;
    }

    if (cmd === "ls") {
      print("inicio  sobre  carreira  projetos  skills  certificados  contato");
      return;
    }

    if (pages[cmd]) {
      print('<span class="terminal-muted">abrindo arquivo...</span>');
      setTimeout(() => {
        window.location.href = pages[cmd];
      }, 500);
      return;
    }

    print(`comando não encontrado: ${cmd}. tente "help".`, "terminal-error");
  };

  screen.addEventListener("click", () => input.focus());

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      run(input.value);
      input.value = "";
    }
  });
});
