var test = require('tape')
var wtf = require('./_lib')

test('basic-html', t => {
  let arr = ['that cat is [[a]] cool dude']
  arr.forEach(str => {
    let doc = wtf(str)
    t.equal(doc.wikitext(), str, str)
  })
  t.end()
})
