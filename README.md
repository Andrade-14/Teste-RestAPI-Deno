# Node.js REST API

Repositório para estudos utilizando **Deno**.

## 🦕 Sobre o Deno

O Deno é um runtime moderno para JavaScript e TypeScript, criado pelo mesmo desenvolvedor do Node.js. Ele foi projetado para ser seguro, simples e eficiente, trazendo várias melhorias em relação ao Node.js:

### ✨ Principais Recursos
- **🔒 Segurança por padrão**  
  Bloqueia acesso a arquivos, rede e ambiente sem permissões explícitas (ex: `--allow-net`)
  
- **🟦 TypeScript nativo**  
  Rode código TypeScript sem configuração extra
  
- **📦 Sem node_modules**  
  Importe bibliotecas diretamente de URLs (ex: `https://deno.land/x/oak`)
  
- **🛠️ Ferramentas embutidas**  
  Inclui formatação (`deno fmt`), testes (`deno test`) e linting (`deno lint`)

Ideal para APIs rápidas, scripts seguros e projetos modernos!

## 🚀 Como Executar

```bash
deno run --allow-net app.ts
