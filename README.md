<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Case técnico - Pessoa Desenvolvedor Frontend" />

  &#xa0;

  <!-- <a href="https://nuxtapp.netlify.app">Demo</a> -->
</div>

<h1 align="center">Case técnico - Pessoa Desenvolvedor Frontend</h1>

<!-- Status -->

<h4 align="center"> 
	Projeto desenvolvido para o teste de Eduardo de Souza
</h4> 

<hr>

<p align="center">
  <a href="#dart-about">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Como Rodar</a> &#xa0; | &#xa0;
  <a href="https://github.com/eduardosouza87" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Projeto que lista as últimas 100 notícias de tecnologia, podendo salvá-las em seus favoritos, utilizando a NEWS API.

## :sparkles: Features ##

:heavy_check_mark: Filtrar notícias através de um campo de busca;\
:heavy_check_mark: Salvar notícias em seus favoritos

## :rocket: Tecnologias ##

As seguintes ferramentas foram utilizadas neste projeto:

- [Nuxt](https://nuxt.com/) V3.12.4
- [Vue](https://vuejs.org/)
- [Node.js](https://nodejs.org/pt) V21.6.0
- [Tailwind CSS](https://tailwindcss.com/)

## :checkered_flag: Iniciando o Projeto ##

```bash
# Clone este projeto
git clone https://github.com/eduardosouza87/neowaytestespa

# Acesse
cd neowaytestespa

# npm
npm install

# pnpm
pnpm install

# Crie um arquivo .env na raiz do projeto, copiando o conteúdo de .env-sample:
cp .env-sample .env

# Obtendo chave API em NEWS API
Obtenha uma chave de API em [News API](https://newsapi.org/).

# No arquivo .env, substitua SUA_CHAVE_API_AQUI com a sua chave de API:
API_BASE_URL=https://newsapi.org/v2/everything
API_KEY=YOUR_API_KEY

```

## Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

## Produção

Criar a aplicação para produção:

```bash
# npm
npm run build

# pnpm
pnpm build
```

Visualize localmente a versão de produção:

```bash
# npm
npm run preview

# pnpm
pnpm preview
```

Confira a [documentação de implantação](https://nuxt.com/docs/getting-started/deployment) para obter mais informações.

Feito com :heart: por <a href="https://github.com/eduardosouza87" target="_blank">Eduardo de Souza</a>

&#xa0;

<a href="#top">Voltar ao topo</a>
