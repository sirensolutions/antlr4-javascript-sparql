var sparqlLexer = require('./lib/SparqlLexer.js');
var sparqlParser = require('./lib/SparqlParser.js');
var sparqlParserListener = require('./lib/SparqlParserListener');
var sparqlParserVisitor = require('./lib/SparqlParserVisitor');

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['antlr4'], factory());
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('antlr4'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.antlr4);
    }
}(this, function (antlr4) {

    return {
      SparqlLexer: sparqlLexer(antlr4),
      SparqlParser: sparqlParser(antlr4, SparqlParserListener.SparqlParserListener), 
      SparqlParserListener: sparqlParserListener(antlr4),
      SparqlParserVisitor: sparqlParserVisitor(antlr4)
    };

}));