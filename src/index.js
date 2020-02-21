const doc = require('./01-doc')
const section = require('./02-section')
const paragraph = require('./03-paragraph')
const sentence = require('./04-sentence')
// const link = require('./05-link')
const infobox = require('./infobox')
const image = require('./image')

const plugin = function(models) {
  models.Doc.wikitext = doc

  models.Section.wikitext = section

  models.Paragraph.wikitext = paragraph

  models.Sentence.wikitext = sentence

  models.Image.wikitext = image

  models.Infobox.wikitext = infobox
  // models.Template.wikitext = function(opts) {}
  // models.Link.wikitext = link
}
module.exports = plugin
