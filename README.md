# MIA – Food Service Intelligence

MIA é uma plataforma tecnológica inovadora para o setor de food service, focada em otimizar operações, reduzir filas, minimizar erros e encantar clientes de restaurantes e estabelecimentos gastronômicos.

## 🚀 Tecnologias Utilizadas
- React + TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Formspree (para envio de contato)

## ✨ Funcionalidades
- Apresentação institucional da MIA
- Seções: Sobre, Problema, Solução, Resultados, Equipe, Investidores, Contato
- Formulário de contato integrado ao Formspree
- Design responsivo e moderno

## 🖥️ Como rodar localmente
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/mia-website.git
   cd mia-website
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Rode o projeto:**
   ```bash
   npm run dev
   ```
4. Acesse em [http://localhost:5173](http://localhost:5173)

## 🛠️ Build para produção
```bash
npm run build
```
Os arquivos finais estarão na pasta `dist/`.

## 🌐 Deploy
Você pode fazer deploy facilmente em plataformas como Vercel, Netlify ou qualquer serviço de hospedagem estática.

## 📬 Contato
Para dúvidas, sugestões ou parcerias:
- [Formulário de contato no site](#contato)
- E-mail: danyelpj412@gmail.com

---

© MIA – Food Service Intelligence 

---

## Como corrigir o download do PDF no deploy

### 1. **Mova o arquivo PDF para a pasta `public/`**

- Mova `src/assets/MIA_apresentacao.pdf` para `public/MIA_apresentacao.pdf`.

### 2. **Altere o código do download**

Troque:
```js
link.href = 'src/assets/MIA_apresentacao.pdf';
```
por:
```js
link.href = '/MIA_apresentacao.pdf';
```

Assim, o arquivo será baixado corretamente tanto em desenvolvimento quanto em produção (Vercel, Netlify, etc).

---

## Exemplo de código corrigido

```js
<code_block_to_apply_changes_from>
```

---

Se quiser, posso fazer a alteração no código e mover o arquivo para você. Deseja que eu faça isso? 