# Portfólio — IBrunooDev

Portfólio profissional de **Bruno Henrique**, desenvolvedor Front-End em formação, criado para apresentar sua trajetória, habilidades, certificados, formas de contato e projetos desenvolvidos durante sua jornada na tecnologia.

O site possui um visual **dark, moderno e responsivo**, com detalhes inspirados em interfaces de terminal, animações de entrada, player de música e navegação por várias páginas.

<img width="1365" height="594" alt="image" src="https://github.com/user-attachments/assets/11b1f139-5557-4700-bb57-f10a0dcd7adf" />


## Acesse o projeto

| Plataforma | Link |
| --- | --- |
| Site | [ibrunoodev.netlify.app](https://ibrunoodev.netlify.app/) |
| GitHub | [github.com/IBrunooDev](https://github.com/IBrunooDev) |
| LinkedIn | [linkedin.com/in/brunocarus](https://www.linkedin.com/in/brunocarus/) |
| Instagram | [instagram.com/ibrunoodev](https://www.instagram.com/ibrunoodev/) |

## Páginas do site

- **Início:** apresentação de Bruno Henrique, localização, disponibilidade profissional, currículo em PDF, projetos em destaque e terminal interativo.
- **Sobre:** resumo profissional, forma de trabalho, especialidade em Front-End e foco em interfaces modernas, responsivas e intuitivas.
- **Carreira:** linha do tempo com a transição para tecnologia, estudos, atuação freelancer, formação Full Stack e experiências anteriores.
- **Projetos:** galeria com seis projetos, imagens, descrições, tecnologias utilizadas e links para o site publicado e o repositório no GitHub.
- **Skills:** tecnologias e ferramentas utilizadas no desenvolvimento e na organização dos projetos.
- **Certificados:** certificados com filtro por instituição, pré-visualização em modal e opção de download em PDF.
- **Contato:** acesso direto ao GitHub, LinkedIn e e-mail profissional.

## Principais recursos

- Layout responsivo para computador, tablet e celular;
- menu mobile com indicação da página atual;
- identidade visual dark com grade de fundo e detalhes futuristas;
- sistema de design centralizado por variáveis CSS;
- animações de entrada durante a rolagem;
- tela de carregamento animada;
- player de música em loop;
- continuidade do áudio entre páginas por meio do `localStorage`;
- currículo disponível em PDF;
- terminal interativo na página inicial;
- galeria de projetos com links para demonstrações e códigos-fonte;
- certificados organizados por instituição;
- visualização ampliada dos certificados em modal;
- download individual dos certificados em PDF;
- links para redes sociais e contato por e-mail.

## Terminal interativo

O terminal da página inicial também pode ser utilizado para navegar pelo portfólio.

| Comando | Função |
| --- | --- |
| `help` | Exibe todos os comandos disponíveis |
| `whoami` | Mostra uma breve apresentação |
| `stack` | Exibe as principais tecnologias |
| `ls` | Lista as páginas do site |
| `clear` | Limpa a tela do terminal |
| `inicio` | Abre a página inicial |
| `sobre` | Abre a página Sobre |
| `carreira` | Abre a página Carreira |
| `projetos` | Abre a página de projetos |
| `skills` | Abre a página de habilidades |
| `certificados` | Abre a página de certificados |
| `contato` | Abre a página de contato |


## Estrutura do projeto

```text
Projeto-Portfolio/
├── index.html
├── sobre.html
├── frase.html
├── carreira.html
├── projetos.html
├── skills.html
├── certificados.html
├── contato.html
├── README.md
└── src/
    ├── audio/
    │   └── TKANDZ - NOW OR NEVER.mp3
    ├── css/
    │   ├── root.css
    │   ├── global.css
    │   ├── navbar.css
    │   ├── home.css
    │   ├── sobre.css
    │   ├── carreira.css
    │   ├── projects.css
    │   ├── teste-card.css
    │   ├── skills.css
    │   ├── certificates.css
    │   ├── contato.css
    │   └── terminal.css
    ├── docs/
    │   ├── (CV) - Bruno Dev Novo.pdf
    │   └── certificates/
    ├── img/
    │   └── certificates/
    └── js/
        ├── main.js
        ├── navbar.js
        ├── terminal.js
        └── certificates.js
```

## Como executar localmente

1. Baixe ou clone este repositório:

   ```bash
   git clone https://github.com/IBrunooDev/Projeto-Portfolio.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Projeto-Portfolio
   ```

3. Abra o arquivo `index.html` no navegador.

Para uma experiência melhor durante o desenvolvimento, utilize uma extensão como **Live Server** no Visual Studio Code.

## Personalização

As principais cores, fontes, espaçamentos, sombras, animações e medidas do layout estão centralizadas no arquivo `src/css/root.css`. Isso permite modificar a identidade visual do site inteiro sem editar cada página separadamente.

Para adicionar um novo certificado:

1. coloque a imagem em `src/img/certificates/`;
2. coloque o PDF em `src/docs/certificates/`;
3. adicione as informações do certificado ao array `CERTIFICATES`, localizado em `src/js/certificates.js`.

- ## Links

- [GitHub](https://github.com/IBrunooDev)
- [LinkedIn](https://www.linkedin.com/in/brunocarus/?originalSubdomain=br)
- [Instagram](https://www.instagram.com/IBrunooDev/)
---

Desenvolvido com :heart: por [IBrunooDev](https://github.com/IBrunooDev) 
© 2026 IBrunooDev. Todos os direitos reservados.
