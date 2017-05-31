const fs = require('fs')
const db = require('diskdb')

class Memory {
  constructor (storageDir) {
    if (!fs.existsSync(storageDir)) {
      var mkdirp = require('mkdirp')
      mkdirp.sync(storageDir, function (err) {
        if (err) {
          throw err
        }
      })
    }
    this.db = db.connect(storageDir, ['events'])
  }

  now (eventName, object) {
    this.db.events.save({
      when: new Date(),
      object: object,
      name: eventName
    })
  }

  when (eventName, object) {
    var events = this.db.events.find({
      object: object,
      name: eventName
    })
    var whens = []
    events.forEach(function (event) {
      whens.push(event.when)
    }, this)
    return whens
  }

  recent (eventName, object) {
    return this.when(eventName, object).pop()
  }
}

module.exports = Memory
