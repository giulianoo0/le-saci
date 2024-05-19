## Lê Saci
Este projeto está em desenvolvimento e não foi finalizado.


Um interpretador (e compilador, no futuro) funcional que simula à risca o ambiente SACI, da Olimpiada Brasileira de Informática - feito em Node

## Utilização
Clone este repositório utilizando
```git clone https://github.com/giulianoo0/le-saci```

Adentre na pasta e baixe as dependências
```cd le-saci && npm i```

Compile o compilador
```npm run build```

Na pasta `out`, haverá o `compiler.js`; este é o compilador.

Para testar soluções, rode `node <caminho-ao-compilador> run <caminho-à-solução.js> --input=<caminho-à-entrada>`. O output será escrito
em seu console utilizando `process.stdout` - o mesmo usado na OBI.
