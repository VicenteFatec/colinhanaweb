# Colinha na Web

Site educacional com galeria de produções interativas em HTML.

## Diretrizes Obrigatórias

1. **Público-alvo: crianças do Ensino Fundamental.** Botões grandes (min 44x44px), touch-friendly, responsivo para tablets e celulares.
2. **Botão Voltar em TODA produção.** Fixo no canto superior esquerdo, z-index 9999, cor adaptada ao tema. Aponta para `../index.html`.
3. **Thumbnails dos cards:** Imagens PNG em `thumbnails/` (pedir ao Claude Web para criar). Não usar capas CSS.
4. **Responsividade:** Mobile-first. Testar viewports de celular e tablet.

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

## Diretriz: Capas Temáticas dos Cards

**SEMPRE criar uma capa sugestiva e temática para cada produção.** Nunca usar apenas um emoji genérico. A capa deve representar visualmente o conteúdo da produção usando HTML/CSS puro (sem imagens externas). Exemplos:

- **Aventura do BIT**: Chuva binária estilo Matrix (0s e 1s caindo) + robô + "01010101"
- **Caçando o Número 9**: Pilha de pizzas empilhadas (centena/dezena/unidade) + "999" + "= 9?"

A capa deve conter elementos animados sutis e cores que remetam ao tema. Usar classes `.cover` + `.cover-NOME` no CSS.

## Como Adicionar Nova Produção

1. Salvar o arquivo HTML em `producoes/`
2. **Criar uma capa temática** no CSS (`.cover-nome`) com elementos visuais do conteúdo
3. Adicionar um novo card no `index.html` dentro de `.gallery-grid`:

```html
<!-- Card: Nome da Produção -->
<a href="producoes/nome-do-arquivo.html" class="card" data-tags="categoria">
    <div class="card-thumbnail">
        <!-- CAPA TEMÁTICA: sempre criar algo sugestivo, nunca só emoji -->
        <div class="cover cover-NOME">
            <!-- Elementos visuais do tema aqui -->
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
