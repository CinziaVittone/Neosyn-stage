COS'E' TYPESCRIPT
TypeScript è un linguaggio di programmazione open source sviluppato da Microsoft. 
Più nello specifico, TypeScript è un superset di JavaScript, che aggiunge tipi, classi, interfacce e moduli opzionali al JavaScript tradizionale. Si tratta sostanzialmente di una estensione di JavaScript.

TypeScript è un linguaggio tipizzato, ovvero aggiunge definizioni di tipo statico: 
i tipi consentono di descrivere la forma di un oggetto, documentandolo meglio e consentendo a TypeScript di verificare che il codice funzioni correttamente.

Uno dei punti di forza di TypeScript, che lo differenzia dai concorrenti CoffeeScript e Dart, 
è il fatto di essere un superset: qualsiasi codice scritto in JavaScript è anche compatibile con la sintassi e la semantica TypeScript.
------
INTRODUZIONE
Linguaggio tipizzato e compilato, tipi di dati e poi compilato con il compiler in Js
Linguaggio costruito su Js
Aggiunge nuove funzionalità (es tipi di dati)
Per il browser viene convertito in Js
Non può essere eseguito dal browser e node.js, viene perciò compilato
Il file app.ts verrà convertito poi in app.js automaticamente
------
INSTALLAZIONE AMBIENTE
Prepariamo la cartella di progetto
Serve node.js
Npm gestirà i pacchetti che installerò
Non dentro una cartella
npm i -g typescript
npm i(installo) -g(globalmente su tutto il pc) typescript
su mac
sudo npm i -g typescript
estensioni: eslint, path intellesense
------
FUNZIONAMENTO
cd cartella in cui ho il file (cd TS cd src o anche solo cd TS)
tsc app.ts
(typescript compiler file.ts)
genera il file app.js, ma noi lavoriamo su app.ts

! PER LEGGERE IL JSON E FAR COMPILARE I FILE JS NELL'ALTRA CARTELLA
Your tsconfig.json is correct. However, it depends on how tsc command is run.
If you specify an input file, tsconfig.json will be ignored and the file will be compiled with the default compiler options:
tsc src/app.ts
Fix
Run tsc without specifying any input files. This will compile files according to your tsconfig.json.
tsc
------
COMPILATORE
-avviare: tsc app.ts -> devo lanciarlo ogni volta che faccio modifiche in modo che siano prese su app.js e di conseguenza nella index

-watch mode: tsc app.ts --watch OPPURE tsc app.ts -w -> resta in ascolto, segue le mie modifiche in diretta a ogni salvataggio
CONTROL C per uscire

-compilare intero progetto: tsc --init -> quando ho più file .ts non posso per ognuno andare a fare la watch così da farmi generare il file .js avendo tante console, molto più comodo farli compilare in js tutti in un colpo solo -> crea il file tsconfig.json, TUTTO ORA E' GESTITO DAL COMPILATORE, ora il watch ricadrà su tutto il progetto, compila tutto(esempio.ts)

-includere/escludere file(node_modules escluso di default) -> nel file tsconfig.json "include"/"exclude" file

-target della compilazione -> es2016, prima si usava es5(nel file js let e const diventavano var)

-altre opzioni di configurazione(js, sourcemap) -> allowJs, checkJs(controlla anche i file .js e non solo .ts), sourceMap(da console su sources vedo solo app.js, se voglio vedere il file app.ts decommento la sourceMap e crea i file .map)!IMPORTANTE DECOMMENTARE SOURCEMAP X DEBUG

indicano le directories da cui va a prendere il codice
-outDir -> ./
e in cui "butta fuori" il codice
-rootDirs -> [] (multiple)
posso usare
rootDir:"./src" (singola)
outDir: "./dist"
sarebbe megio avere un'unica cartella src e metto tutti i file .ts e SOLO da lì prenderà e compilerà, il resto starà fuori
cancello i .js che porta all'interno, LI VOGLIO SU LIVELLI SEPARATI, in src HO SOLO I FILE SU CUI LAVORO
la cartella finale con i file compilati la tengo da parte dist, una volta che faccio girare dinuovo tsc lui mi compilerà lì i file, quindi posso cancelare i .js e .map che ho fuori, li ritrovo tutti in dist ora che ho messo la outDir

quando uso init
Created a new tsconfig.json with: 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
------
IMPORTARE ALTRI FILE
per organizzare meglio il progetto
esempio con function.ts e Animale.ts da importare in app.ts
lavoro sui Modules in tsconfig.json
"module": "commonjs" diventa "module": "es6
lavoro sulla index aggiungendo il type
<script type="module" src="dist/app.js"></script>
ora in console vedrò il risultato
EXPORT e IMPORT possono trovarsi ovunque

-RISORSE
https://www.youtube.com/watch?v=CZlEWUjOyNE&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6 01 introduzione
https://www.youtube.com/watch?v=yw41HrM6udg&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=4 02 installazione ambiente
https://www.youtube.com/watch?v=OPQ6t0j8uB4&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=5 03 funzionamento
https://www.youtube.com/watch?v=xO5HI9HlWv0&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=6 04 string, number, boolean
https://www.youtube.com/watch?v=g0ahBmU_ynI&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=7 05 object, array, tuple
https://www.youtube.com/watch?v=0yun0H4p-Hw&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=8 06 any, union, custom type, enum
https://www.youtube.com/watch?v=CYwdYBpFcwc&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=9 07 funzioni(tipi di dati dei parametri, inference nei parametri di default, il tipo di ritorno, funzioni come tipo di variabile)
https://www.youtube.com/watch?v=GoG_mVUd7AQ&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=10 08 il compilatore(watch mode, compilare l'intero progetto, includere ed escludere file, target della compilazione, altre opzioni di configurazione(js, sourcemap), outDir e rootDir)
https://www.youtube.com/watch?v=iMDrLJKZ_u0&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=9 09 classi, proprietà, costruttore, metodi con tipi di dati, modificatori di accesso(private, public, protected), shorthand costruttore, readonly, classe figlia con costruttore di default e super, protected, proprietà e metodi static, classi astratte, singleton(con private constructor e static instance)
https://www.youtube.com/watch?v=aMJRiAs453I&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=10 10 interfacce, custom type vs interfacce, class implements interface, readonly sì modificatori no, esempio Dispositivo, estendere da più interfacce
NO lez 11, 12
https://www.youtube.com/watch?v=sMdrCUMUuds&list=PLP5MAKLy8lP--n8iUsDsFMuTiKW5ooZE6&index=13 13 importare altri file(perchè, creare file esterno, importare)