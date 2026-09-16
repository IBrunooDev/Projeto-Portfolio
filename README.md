# Portfólio — IBrunooDev

Portfólio profissional de **Bruno Henrique**, desenvolvedor Front-End em formação, criado para apresentar sua trajetória, habilidades, certificados, formas de contato e projetos desenvolvidos durante sua jornada na tecnologia.

O site possui um visual **dark, moderno e responsivo**, com detalhes inspirados em interfaces de terminal, animações de entrada, player de música e navegação por várias páginas.

<img width="1365" height="598" alt="image" src="https://github.com/user-attachments/assets/df046c2b-9da8-4ac0-a2e4-84527714af77" />


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

## Projetos apresentados

| Projeto | Descrição | Tecnologias | Demonstração | Repositório |
| --- | --- | --- | --- | --- |
| Portfólio | Portfólio multipágina com navegação fluida, responsividade e carregamento otimizado | HTML, CSS e JavaScript | [Ver projeto](https://ibrunoodev.netlify.app/) | [GitHub](https://github.com/IBrunooDev/Projeto-Portfolio) |
| Social LinkTree | Página responsiva para centralizar redes sociais e portfólio | HTML, CSS e JavaScript | [Ver projeto](https://iibrunoodev.netlify.app/) | [GitHub](https://github.com/IBrunooDev/Projeto-LinkTree) |
| SkyPage Empresa | Site corporativo com organização visual, usabilidade e foco em desempenho | HTML, CSS e JavaScript | [Ver projeto](https://skypagee.netlify.app/) | [GitHub](https://github.com/IBrunooDev/Projeto-SkyPage) |
| Legacy RP MTA | Landing page voltada ao segmento de games e apresentação de funcionalidades e scripts | HTML, CSS e JavaScript | [Ver projeto](https://legacymta.netlify.app/) | [GitHub](https://github.com/IBrunooDev/Projeto-Legacy) |
| Limpeza de Casa | Landing page responsiva para uma empresa de limpeza | HTML, CSS e JavaScript | [Ver projeto](https://limpezaa.netlify.app/) | [GitHub](https://github.com/IBrunooDev/Projeto-Limpeza) |
| F1Dev | Landing page para um campeonato de Fórmula 1 | HTML, CSS e JavaScript | [Ver projeto](https://f1dev.netlify.app/) | [GitHub](https://github.com/IBrunooDev/Projeto-F1) |

## Estrutura do projeto

```text
Projeto-Portfolio/
├── index.html
├── sobre.html
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

## Autor

Desenvolvido com dedicação por **Bruno Henrique — IBrunooDev**.

© 2026 Bruno Henrique. Todos os direitos reservados.
