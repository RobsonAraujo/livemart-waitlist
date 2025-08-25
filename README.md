<h1>LiveMart - Plataforma de Leilões Online</h1>

![LiveMart](/src/app/opengraph-image.png)

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIdee8%2FWaitly&env=UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN,NOTION_SECRET,NOTION_DB,RESEND_API_KEY,RESEND_FROM_EMAIL&envDescription=Environment%20variables%20needed%20for%20the%20LiveMart%20waitlist.&project-name=livemart-waitlist&repository-name=livemart-waitlist-app&template=LiveMart)

## Sobre o LiveMart

O LiveMart é uma plataforma inovadora de compra e venda com leilões online, focada inicialmente em cartas Pokémon e produtos colecionáveis. Nossa missão é criar um marketplace interativo onde você pode anunciar seus produtos, participar de leilões em tempo real e, em breve, assistir lives dos vendedores mostrando seus produtos.

### Funcionalidades Planejadas

- **Leilões em Tempo Real**: Sistema de lances dinâmicos e transparentes
- **Lives Interativas**: Vendedores mostrando produtos ao vivo
- **Sistema de Pagamentos Integrado**: Segurança e praticidade
- **Logística Completa**: Do anúncio à entrega
- **Foco em Cartas Pokémon**: Comunidade especializada

## Core Features

- **Next.js 15**: Construído com as últimas funcionalidades do framework React líder para performance e experiência do desenvolvedor.
- **Notion como CMS**: Gerencie suas entradas da lista de espera diretamente em um banco de dados Notion.
- **Upstash Redis**: Implemente rate limiting robusto para inscrições usando Redis serverless.
- **Integração Resend**: Envie emails transacionais (ex: emails de confirmação) através do Resend usando seu domínio personalizado.
- **Deploy Vercel com Um Clique**: Coloque sua lista de espera no ar em minutos.
- **Tailwind CSS & React**: UI moderna e responsiva construída com CSS utility-first e componentes React.
- **TypeScript**: Segurança de tipos para um código mais robusto.

## Por que Notion como CMS?

O Notion é uma ferramenta versátil reconhecida por suas capacidades de gerenciamento de conteúdo e interface amigável. Este template demonstra como aproveitar o Notion como um Sistema de Gerenciamento de Conteúdo (CMS) leve, gratuito e eficaz para sua lista de espera.

**Principais Vantagens:**

- **Simplicidade**: Gerencie seus dados da lista de espera em um banco de dados Notion familiar.
- **Sem Backend Necessário**: Busca dados diretamente via API do Notion, reduzindo complexidade.
- **Flexibilidade**: Facilmente extensível para gerenciar outros tipos de conteúdo além de uma lista de espera.
- **Colaboração**: Utilize os recursos colaborativos do Notion se trabalhar com uma equipe.

## Pré-requisitos: Configurando Serviços Externos

Antes de executar este projeto, você precisará configurar alguns serviços externos:

### 1. Upstash Redis

O Upstash fornece Redis serverless. Este template o usa para rate limiting de inscrições.

1.  Crie uma conta gratuita no [Upstash](https://upstash.com/).
2.  Crie um novo banco de dados Redis.
3.  Na página de detalhes do banco de dados, anote o `REST API -> Endpoint` (este é seu `UPSTASH_REDIS_REST_URL`) e `REST API -> Read-only Token` ou um token personalizado com acesso de escrita (este é seu `UPSTASH_REDIS_REST_TOKEN`). Certifique-se de que o token tenha permissões de escrita se você estiver usando para operações que modificam dados.

### 2. Resend

O Resend é usado para enviar emails transacionais (ex: confirmações de inscrição).

1.  Crie uma conta no [Resend](https://resend.com/).
2.  Adicione e verifique seu domínio (ex: `seudominio.com`).
3.  Gere uma chave API na seção "API Keys". Esta será sua `RESEND_API_KEY`.
4.  Anote o endereço de email de onde você enviará (ex: `waitlist@seudominio.com`). Este será seu `RESEND_FROM_EMAIL`.

### 3. Notion

Seus dados da lista de espera serão armazenados em um banco de dados Notion.

1.  Certifique-se de ter uma conta e workspace Notion.
2.  Crie um novo **Database - Full page** em seu workspace. Você pode nomeá-lo "Usuários da Lista de Espera" ou similar.
3.  Adicione as seguintes propriedades (colunas) ao seu banco de dados:
    - `Name` (Tipo de propriedade: `Title`) - Geralmente é a primeira coluna padrão.
    - `Email` (Tipo de propriedade: `Email`)
    - _(Opcional)_ `Signed Up At` (Tipo de propriedade: `Created time`) - Para rastrear quando os usuários se inscreveram.
4.  Obtenha seu Notion Integration Secret:
    - Vá para [Notion Integrations](https://www.notion.so/my-integrations).
    - Clique em "+ New integration".
    - Dê um nome (ex: "LiveMart Waitlist Integration").
    - Associe-o ao seu workspace.
    - Em "Capabilities", certifique-se de que "Insert content" está marcado. Se você planeja ler ou atualizar entradas via API posteriormente (ex: para um painel admin), também conceda as capacidades "Read content" e "Update content". "No user information" está bem para "User capabilities".
    - Clique em "Submit". Copie o "Internal Integration Token" mostrado. Este é seu `NOTION_SECRET`.
5.  Compartilhe o Database com sua Integration:
    - Abra o banco de dados Notion que você criou.
    - Clique no menu `•••` (Mais) no canto superior direito.
    - Role para baixo e clique em "+ Add connections" (ou encontre "Connections" depois "Connect to...").
    - Procure e selecione a integração que você acabou de criar (ex: "LiveMart Waitlist Integration"). Confirme o acesso.
6.  Obtenha seu Database ID:
    - Abra o banco de dados Notion no seu navegador. A URL será algo como:
      `https://www.notion.so/{SEU_WORKSPACE_NAME}/{DATABASE_ID}?v={...}`
    - O `{DATABASE_ID}` é a string de caracteres (geralmente 32 caracteres alfanuméricos) que forma o segmento do caminho após o nome do seu workspace (ou `www.notion.so/`) e antes do `?v=...`. Copie este ID. Este é seu `NOTION_DB`.

## Configuração de Desenvolvimento Local

Para executar este projeto em sua máquina local:

1.  **Fork e Clone o Repositório:**
    Primeiro, faça fork deste repositório para sua própria conta GitHub. Depois, clone seu fork:

    ```bash
    git clone https://github.com/SEU_USERNAME/livemart-waitlist.git
    # Substitua SEU_USERNAME pelo seu nome de usuário GitHub
    cd livemart-waitlist
    ```

2.  **Instale as Dependências:**
    Este projeto usa `pnpm` como gerenciador de pacotes nos comandos de exemplo. Você pode usar `npm`, `yarn`, ou `bun` se preferir, ajustando os comandos adequadamente.

    ```bash
    pnpm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do seu projeto. Você pode copiar `.env.example` e preencher os valores que obteve dos passos pré-requisitos:

    ```env
    # Upstash Redis
    UPSTASH_REDIS_REST_URL=sua_upstash_redis_rest_url
    UPSTASH_REDIS_REST_TOKEN=seu_upstash_redis_rest_token

    # Notion
    NOTION_SECRET=sua_notion_secret_key
    NOTION_DB=seu_notion_database_id

    # Resend
    RESEND_API_KEY=sua_resend_api_key
    RESEND_FROM_EMAIL=voce@seudominio.com # Endereço de email para enviar (deve ser verificado no Resend)
    # RESEND_REPLY_TO_EMAIL=reply@seudominio.com # Opcional: Endereço de email para respostas
    ```

4.  **Execute o Servidor de Desenvolvimento:**

    ```bash
    pnpm dev
    ```

    Sua aplicação deve estar rodando em `http://localhost:3000`.

5.  **Execute o Servidor de Preview de Email (Opcional):**
    Se você estiver trabalhando em templates de email, o Resend permite visualização local de emails.
    ```bash
    pnpm email
    ```
    Isso geralmente inicia um servidor em `http://localhost:3001` (ou conforme configurado no `package.json`).
