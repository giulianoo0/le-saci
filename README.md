## Lê Saci
Este projeto está em desenvolvimento e não foi finalizado.


Um interpretador (e compilador, no futuro) funcional que simula à risca o ambiente SACI, da Olimpiada Brasileira de Informática - feito em Node    
Com o Lê Saci, você pode utilizar funções mais modernas (ES5, ao invés do ES3) do JavaScript, como `let, const, arrow functions`, com compatibilidade ao interpretador da OBI.

## Download
### Método 1 (pré-compilado)
Baixe a release mais recente do github.


### Método 2 (compilação)
Clone este repositório utilizando
```
git clone https://github.com/giulianoo0/le-saci
```

Adentre na pasta e baixe as dependências
```
cd le-saci && npm i
```

Compile o compilador
```
npm run build
```
Na pasta `out`, haverá o `saci.js`; este é o compilador e interpretador.


## Como utilizar
Para compilar, rode: `node saci.js build <arquivo-para-compilar>`; também é possível utilizar o argumento `--output` para definir o local onde o arquvio será compilado.

Para testar as soluções (compile, caso necessário), rode `node saci.js run <caminho-à-solução.js> --input=<caminho-à-entrada>`. O output será escrito
em seu console utilizando `process.stdout` - o mesmo usado na OBI.

## Colabore
Para colaborar, abra uma issue e vamos discutir sobre a função que você queria
que seja implementada. Colaborações são sempre bem-vindas!

## Licensa
A licensa é MIT.
