antlr4-javascript-sparql
========================

An UMD module which expose sparql parser lexer listener and visitor 

### Info 

This is a UMD module for javascript sparql parser classes 
Parser classes where generated from gramar files using antlr4 framework:    

```
java -Xmx500M -cp "antlr-4.5-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript sparql/SparqlLexer.g4 -o lib
mv lib/sparql/SparqlLexer.tokens lib/
java -Xmx500M -cp "antlr-4.5-complete.jar:$CLASSPATH" org.antlr.v4.Tool -Dlanguage=JavaScript sparql/SparqlParser.g4 -visitor -o lib
```
Then a few modyfications were made to generated classes.

 * each class was **wrapped in a function** - to be able to pass dependencies 
 * in SparqlLexer - **atn** and **decisionToFDA** where moved inside the constructor
 * in SparqlParser - **atn** **decisionToFDA** and  **sharedContextCache** where moved inside the constructor and  atn was directly assigned to this and the **Object.defineProperty** was commented out

### How to build

It uses broserify to combine all needed files into single UMD module     
To build type:    

    $ node install
    
The result module is in **release/antlr4-sparql.js
