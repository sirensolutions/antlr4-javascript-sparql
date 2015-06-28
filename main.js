var sparqlLexer = require('./lib/SparqlLexer.js');
var sparqlParser = require('./lib/SparqlParser.js');
var sparqlParserListener = require('./lib/SparqlParserListener');
var sparqlParserVisitor = require('./lib/SparqlParserVisitor');

(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['antlr4'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('antlr4'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.antlr4);
    }
}(this, function (antlr4) {

    var listener = sparqlParserListener(antlr4);

    return {
      SparqlLexer: sparqlLexer(antlr4),
      SparqlParser: sparqlParser(antlr4, listener), 
      SparqlParserListener: listener,
      SparqlParserVisitor: sparqlParserVisitor(antlr4)
    };

}));