## Requisitos

* Conferir a versão do Node.js 22 ou superior: node -v
* Conferir se está instalado o npx: npx -v

## Como rodar o projeto baixado

## Sequencia para criar o projeto

Criar o projeto com React e Next.js. O ponto "." indica que deve ser criado no próprio diretório. 
```
npx create-next-app@latest .
```

Rodar o projeto React.
```
npm run dev
```

Acessar no navegador a URL.
```
http://localhost:3000
```


### Instale a versão 3.x do Tailwind CSS

npm install tailwindcss@3.4.1 --save-dev --force
npx tailwindcss init -p

 Removemos a versão 4.x do Tailwind, que estava causando problemas
 Instalamos a versão estável 3.4.1

 ### Roda o backend

 npm run start:watch

# 1. Acesse a pasta do seu projeto
cd caminho/do/seu/projeto

# 2. Vá para a pasta onde você quer criar os componentes
cd src/components

# 3. Crie uma nova pasta para o componente (ex: MeuComponente)
mkdir componente

# 4. Entre na pasta do componente
cd MeuComponente

# 5. Crie o arquivo do componente e o CSS (ou TS, se quiser)
echo > MeuComponente.tsx
echo > MeuComponente.module.css
