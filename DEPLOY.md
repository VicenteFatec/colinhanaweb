# Deploy — Colinha na Web

## Pré-requisitos

- Domínio `colinhanaweb.com.br` configurado na Hostinger
- Acesso SSH ativo
- Repositório GitHub: `https://github.com/VicenteFatec/colinhanaweb.git`

## Setup Inicial (primeira vez)

### 1. Configurar domínio na Hostinger

1. hPanel → Domínios → Adicionar domínio → `colinhanaweb.com.br`
2. Vincular ao plano de hospedagem existente
3. Aguardar propagação DNS (1-24h)
4. hPanel → Segurança → SSL → Ativar SSL gratuito + Forçar HTTPS

### 2. Clonar repositório no servidor

```bash
ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213
```

No servidor:
```bash
cd domains/colinhanaweb.com.br/public_html
git clone https://github.com/VicenteFatec/colinhanaweb.git .
```

**Nota:** O ponto (`.`) no final é importante — clona direto na pasta sem criar subpasta.

## Deploy de Atualizações

### Passo a passo

1. Fazer alterações locais
2. Commit e push:
   ```bash
   git add .
   git commit -m "descrição da mudança"
   git push origin main
   ```
3. Atualizar no servidor:
   ```bash
   ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213 \
     "cd domains/colinhanaweb.com.br/public_html && git pull origin main"
   ```

### Comando único (local → servidor)

```bash
git add . && git commit -m "update" && git push origin main && ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213 "cd domains/colinhanaweb.com.br/public_html && git pull origin main"
```

## Troubleshooting

### "Permission denied" no SSH
- Verificar se a chave SSH está em `C:\Users\User\.ssh\id_rsa`
- Verificar se o acesso SSH está ativo no hPanel

### Site não carrega após deploy
- Verificar propagação DNS: `nslookup colinhanaweb.com.br`
- Verificar se os arquivos estão no document root correto
- Verificar se o SSL está ativo

### Conflito no git pull
```bash
ssh -i "C:\Users\User\.ssh\id_rsa" -p 65002 u279915365@185.245.180.213
cd domains/colinhanaweb.com.br/public_html
git reset --hard origin/main
git pull origin main
```
