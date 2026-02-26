# Colinha na Web

Site educacional com galeria de produções interativas em HTML.

## Domínio e Hosting

- **Domínio:** colinhanaweb.com.br
- **Hospedagem:** Hostinger (mesmo plano do chapaamigo.com.br)
- **Document root:** `/home/u279915365/domains/colinhanaweb.com.br/public_html/`
- **SSH:** `ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213`

## Estrutura do Projeto

```
colinhanaweb/
├── index.html              ← Página principal (galeria)
├── style.css               ← Estilos globais
├── script.js               ← Filtros e animações
├── .htaccess               ← Config Apache (HTTPS, cache)
├── assets/                 ← Logo, favicon, og-image
├── producoes/              ← HTMLs das produções (auto-contidos)
│   ├── aventura-do-bit-v2.html
│   └── contando-noves.html
└── thumbnails/             ← Imagens dos cards (opcional)
```

## Como Adicionar Nova Produção

1. Salvar o arquivo HTML em `producoes/`
2. Adicionar um novo card no `index.html` dentro de `.gallery-grid`:

```html
<!-- Card: Nome da Produção -->
<a href="producoes/nome-do-arquivo.html" class="card" data-tags="categoria">
    <div class="card-thumbnail">
        <div class="card-thumbnail-placeholder" style="background: linear-gradient(135deg, #COR1, #COR2);">
            <span class="card-thumbnail-emoji">EMOJI</span>
        </div>
    </div>
    <div class="card-body">
        <div class="card-tags">
            <span class="tag tag-CATEGORIA">Categoria</span>
        </div>
        <h3 class="card-title">Título</h3>
        <p class="card-subtitle">Subtítulo</p>
        <p class="card-description">
            Descrição curta da produção.
        </p>
    </div>
    <div class="card-footer">
        <span class="card-cta">Explorar →</span>
    </div>
</a>
```

3. Se for uma nova categoria, adicionar filtro no `index.html`:
```html
<button class="filter-btn" data-filter="nova-categoria">Nova Categoria</button>
```

4. Tags de categoria disponíveis: `computacao`, `matematica`, `ciencias`, `portugues`

5. Atualizar o contador de produções no hero (`.stat-number`)

6. Deploy: `git add . && git commit -m "feat: nova produção X" && git push`

## Deploy

Ver `DEPLOY.md` para instruções completas.

Comando rápido (após setup inicial):
```bash
ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213 \
  "cd domains/colinhanaweb.com.br/public_html && git pull origin main"
```
