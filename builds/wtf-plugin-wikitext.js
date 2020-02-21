/* wtf-plugin-wikitext 0.0.1 MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.wtfWiki = factory());
}(this, (function () { 'use strict';

  var doDoc = function doDoc() {};

  var _01Doc = doDoc;

  var doSection = function doSection() {};

  var _02Section = doSection;

  var doParagraph = function doParagraph() {};

  var _03Paragraph = doParagraph;

  var doSentence = function doSentence() {};

  var _04Sentence = doSentence;

  var doInfobox = function doInfobox() {};

  var infobox = doInfobox;

  var doImage = function doImage() {};

  var image = doImage;

  var plugin = function plugin(models) {
    models.Doc.wikitext = _01Doc;
    models.Section.wikitext = _02Section;
    models.Paragraph.wikitext = _03Paragraph;
    models.Sentence.wikitext = _04Sentence;
    models.Image.wikitext = image;
    models.Infobox.wikitext = infobox; // models.Template.wikitext = function(opts) {}
    // models.Link.wikitext = link
  };

  var src = plugin;

  return src;

})));
//# sourceMappingURL=wtf-plugin-wikitext.js.map
