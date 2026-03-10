# Colinha na Web

Plataforma educacional de produções interativas para o Ensino Fundamental.
Site: **https://colinhanaweb.com.br**

---

## Diretrizes Obrigatórias

1. **Público-alvo: crianças do Ensino Fundamental.** Tudo deve ser fácil de usar com os dedos. Botões grandes (min 44x44px), touch-friendly, linguagem simples.
2. **Mobile-first.** Muitos alunos acessam via tablet e celular. Testar sempre em viewports menores.
3. **Botão Voltar em TODA produção.** Fixo no canto superior esquerdo, z-index 9999, cor adaptada ao tema da produção. Aponta para `../index.html`. (Ver template abaixo.)
4. **Thumbnails dos cards = imagens PNG.** Salvas em `thumbnails/`. Pedir ao Claude Web para criar. **Não usar capas feitas em CSS** — ficam ruins em telas diferentes.
5. **Produções são HTMLs auto-contidos.** Cada arquivo em `producoes/` deve funcionar sozinho (CSS e JS inline). Sem dependências externas além de Google Fonts.

---

## Domínio e Hosting

- **Domínio:** colinhanaweb.com.br
- **Hospedagem:** Hostinger (mesmo plano do chapaamigo.com.br)
- **Document root:** `/home/u279915365/domains/colinhanaweb.com.br/public_html/`
- **SSH:** `ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213`
- **GitHub:** https://github.com/VicenteFatec/colinhanaweb.git

---

## Estrutura do Projeto

```
colinhanaweb/
├── index.html                  ← Página principal (galeria de cards)
├── style.css?v=N               ← Estilos globais (incrementar v= ao alterar)
├── script.js                   ← Filtros por categoria
├── termos-de-uso.html          ← Termos de Uso e Política de Privacidade
├── .htaccess                   ← Config Apache (HTTPS, cache, GZIP)
├── CLAUDE.md                   ← Este arquivo
├── DEPLOY.md                   ← Guia de deploy
├── assets/                     ← Logo, favicon, og-image (futuro)
├── producoes/                  ← HTMLs auto-contidos das produções
│   ├── aventura-do-bit-v2.html
│   └── contando-noves.html
└── thumbnails/                 ← Imagens PNG dos cards
    ├── thumb-aventura-bit.png
    └── thumb-cacando-nove.png
```

---

## Como Adicionar Nova Produção

### Passo 1: Preparar o HTML
- Salvar o arquivo em `producoes/`
- Garantir que é auto-contido (CSS e JS inline)
- **Adicionar o botão Voltar** (copiar e adaptar):

```html
<!-- Adicionar ANTES do </style> -->
/* Botão Voltar — Colinha na Web */
.btn-voltar {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 6px;
    background: COR_DO_TEMA;
    color: white;
    font-family: 'Fredoka One', cursive;
    font-size: 0.95rem;
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 50px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    min-height: 44px;
    min-width: 44px;
}
.btn-voltar:hover { transform: scale(1.05); }
.btn-voltar:active { transform: scale(0.97); }
.btn-voltar-seta { font-size: 1.2rem; }
@media (max-width: 480px) {
    .btn-voltar { font-size: 0.85rem; padding: 8px 14px; }
}

<!-- Adicionar logo após <body> -->
<a href="../index.html" class="btn-voltar">
    <span class="btn-voltar-seta">&#8592;</span>
    <span>Voltar</span>
</a>
```

### Passo 2: Criar thumbnail
- Pedir ao Claude Web para gerar uma imagem PNG temática
- Salvar em `thumbnails/thumb-nome-da-producao.png`

### Passo 3: Adicionar card no index.html
Dentro de `.gallery-grid`:

```html
<a href="producoes/nome-do-arquivo.html" class="card" data-tags="categoria">
    <div class="card-thumbnail">
        <img src="thumbnails/thumb-nome.png" alt="Descrição da produção">
    </div>
    <div class="card-body">
        <div class="card-tags">
            <span class="tag tag-CATEGORIA">Categoria</span>
        </div>
        <h3 class="card-title">Título</h3>
        <p class="card-subtitle">Subtítulo</p>
        <p class="card-description">Descrição curta.</p>
    </div>
    <div class="card-footer">
        <span class="card-cta">Explorar →</span>
    </div>
</a>
```

### Passo 4: Atualizar contadores e filtros
- Atualizar `.stat-number` no hero (total de produções)
- Se nova categoria: adicionar `<button>` nos filtros e classe `.tag-NOME` no CSS

### Passo 5: Deploy
```bash
git add . && git commit -m "feat: nova produção X" && git push origin main
ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213 \
  "cd domains/colinhanaweb.com.br/public_html && git pull origin main"
```

---

## Tags de Categoria

| Tag | Classe CSS | Filtro |
|-----|-----------|--------|
| `computacao` | `.tag-computacao` | Computação |
| `matematica` | `.tag-matematica` | Matemática |
| `ciencias` | `.tag-ciencias` | Ciências |
| `portugues` | `.tag-portugues` | Português |
| `religiao` | `.tag-religiao` | Religião |

---

## Produções Atuais

| # | Nome | Arquivo | Categoria |
|---|------|---------|-----------|
| 1 | Caçando o Número 9! | `contando-noves.html` | Matemática |
| 2 | A Aventura do BIT | `aventura-do-bit-v2.html` | Computação |
| 3 | Lápis Indestrutíveis | `lapis-indestrutiveis.html` | Matemática |
| 4 | Narrativas Bíblicas | `narrativas-biblicas.html` | Religião |
