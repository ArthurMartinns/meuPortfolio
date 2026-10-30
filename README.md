# Portfólio - Arthur Martins

Portfólio pessoal desenvolvido para apresentar minha trajetória, competências, experiências e projetos como engenheiro de software.

## Tecnologias

* React.js
* TypeScript
* Vite
* Tailwind CSS

## Estrutura do Portfólio

O portfólio é dividido nas seguintes seções:

* **Início** — apresentação e acesso às principais seções.
* **Sobre mim** — formação, trajetória e foco profissional.
* **Projetos** — apresentação dos principais projetos desenvolvidos.
* **Skills** — principais habilidades e tecnologias.
* **Contato** — links para e-mail, LinkedIn e GitHub.

## Estrutura do Projeto

```text
src/
├── assets/           # Foto e fontes locais
├── components/       # Header, Footer e botão de tema
├── data/             # Arquivos de dados
├── hooks/            # Controle do tema
├── sections/
│   ├── About.tsx
│   ├── About.module.css
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Hero.module.css
│   ├── Projects.tsx
│   └── Skills.tsx
├── test/             # Configuração de testes
├── types/            # Tipos TypeScript
├── App.tsx
├── index.css
└── main.tsx
```

O layout utiliza Tailwind CSS. Os arquivos CSS Modules ficam restritos a ilustrações, detalhes decorativos e animações. O portfólio possui temas claro e escuro, com a preferência salva no navegador.

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```
