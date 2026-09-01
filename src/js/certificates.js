/**
 * certificates.js — Lista, filtros e visualização dos certificados
 *
 * Para adicionar um certificado:
 * 1. Coloque o PNG em src/img/certificates/
 * 2. Coloque o PDF em src/docs/certificates/
 * 3. Inclua um objeto no array CERTIFICATES abaixo
 */
const CERTIFICATES = [
  
  {
  id: "onebitcode-javascript",
    name: "HTML 5",
    issuer: "OneBitCode",
    date: "2025",
    image: "src/img/certificates/ONEBITCODE-HTML5.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-HTML5.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "CSS 3",
    issuer: "OneBitCode",
    date: "2025",
    image: "src/img/certificates/ONEBITCODE-CSS3.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-CSS3.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "CSS Moderno",
    issuer: "OneBitCode",
    date: "2025",
    image: "src/img/certificates/ONEBITCODE-CSS-MODERNO.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-CSS-MODERNO.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "Git e GitHub",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-GIT-GITHUB.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-GIT-GITHUB.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "JavaScript I - Fundamentos",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-JAVASCRIPT-I-FUNDAMENTOS.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-JAVASCRIPT-I-FUNDAMENTOS.pdf",
  },

  /* // =========================== Certificados para desbloqueio com tempo ===============================\\

  {
    id: "onebitcode-javascript",
    name: "JavaScript II - Estruturas de Dados e Funções",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-JAVASCRIPT-II-ESTRUTURAS-DADOS-FUNCOES.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-JAVASCRIPT-II-ESTRUTURAS-DADOS-FUNCOES.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "JavaScript III - DOM",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-JAVASCRIPT-III-DOM.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-JAVASCRIPT-III-DOM.pdf",
  },
  
  {
    id: "onebitcode-javascript",
    name: "JavaScript IV - Recursos Modernos",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-JAVASCRIPT-IV-RECURSOS-MODERNOS.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-JAVASCRIPT-IV-RECURSOS-MODERNOS.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "JavaScript V - POO",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-JAVASCRIPT-V-POO.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-JAVASCRIPT-V-POO.pdf",
  },

 {
    id: "onebitcode-javascript",
    name: "JavaScript VI - Tópicos Avançados",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-JAVASCRIPT-VI-TOPICOS-AVANCADOS.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-JAVASCRIPT-VI-TOPICOS-AVANCADOS.pdf",
  },

 {
    id: "onebitcode-javascript",
    name: "TypeScript",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-TYPESCRIPT.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-TYPESCRIPT.pdf",
  },
 {
    id: "onebitcode-javascript",
    name: "Fundamentos do React",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-FUNDAMENTOS-DO-REACT.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-FUNDAMENTOS-DO-REACT.pdf",
  },

 {
    id: "onebitcode-javascript",
    name: "Next.js",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-NEXTJS.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-NEXTJS.pdf",
  },

  {
    id: "onebitcode-javascript",
    name: "Formação Full Stack JavaScript",
    issuer: "OneBitCode",
    date: "2026",
    image: "src/img/certificates/ONEBITCODE-FULL-STACK-JAVASCRIPT.jpg",
    pdf: "src/docs/certificates/ONEBITCODE-FULL-STACK-JAVASCRIPT.pdf",
  },
  */

  //===========================RocketSeat=============================\\
   {
    id: "RocketSeat",
    name: "Certificado de Participação",
    issuer: "RocketSeat",
    date: "2024",
    image: "src/img/certificates/ROCKSEAT NLW JAVASCRIPT.jpg",
    pdf: "src/docs/certificates/ROCKSEAT NLW JAVASCRIPT.pdf",
  },
  //===========================Outros=============================\\

];


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("cert-grid");
  const toolbar = document.getElementById("cert-toolbar");
  const modal = document.getElementById("cert-modal");
  const modalImage = document.getElementById("cert-modal-image");
  const modalClose = document.getElementById("cert-modal-close");

  if (!grid || !toolbar) return;

  const issuers = ["Todos", ...new Set(CERTIFICATES.map((item) => item.issuer))];
  let currentFilter = "Todos";

  const renderFilters = () => {
    toolbar.innerHTML = "";
    issuers.forEach((issuer) => {
      const button = document.createElement("button");
      button.className = `cert-filter${issuer === currentFilter ? " is-active" : ""}`;
      button.type = "button";
      button.textContent = issuer;
      button.addEventListener("click", () => {
        currentFilter = issuer;
        renderFilters();
        renderCards();
      });
      toolbar.appendChild(button);
    });
  };

  const openModal = (src, alt) => {
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add("is-open");
  };

  const closeModal = () => {
    modal?.classList.remove("is-open");
  };

  const renderCards = () => {
    const list =
      currentFilter === "Todos"
        ? CERTIFICATES
        : CERTIFICATES.filter((item) => item.issuer === currentFilter);

    grid.innerHTML = "";

    if (!list.length) {
      grid.innerHTML =
        '<p class="cert-empty">Nenhum certificado nesta categoria ainda.</p>';
      return;
    }

    list.forEach((cert) => {
      const card = document.createElement("article");
      card.className = "cert-card";
      card.innerHTML = `
        <div class="cert-preview">
          <img src="${cert.image}" alt="Pré-visualização: ${cert.name}">
        </div>
        <div class="cert-body">
          <h3>${cert.name}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <p class="cert-date">${cert.date || "Data não informada"}</p>
          <div class="cert-actions">
            <button class="btn btn-secondary cert-view" type="button">Visualizar</button>
            ${
              cert.pdf
                ? `<a class="btn btn-primary" href="${cert.pdf}" download>Baixar PDF</a>`
                : ""
            }
          </div>
        </div>
      `;

      const img = card.querySelector("img");
      img.addEventListener("error", () => {
        img.replaceWith(
          Object.assign(document.createElement("div"), {
            className: "cert-preview-fallback",
            textContent: "PNG do certificado",
          })
        );
      });

      card.querySelector(".cert-view").addEventListener("click", () => {
        openModal(cert.image, cert.name);
      });

      grid.appendChild(card);
    });
  };

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  renderFilters();
  renderCards();
});
