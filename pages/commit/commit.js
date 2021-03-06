const cloudclient = require('../../utils/cloudclient.js')
const util = require('../../utils/util.js')
Page({
  data: {
    commit: {}
  },

  onLoad: function (options) {
    console.log("commit url: ", options.url)
    var self = this
    cloudclient.callFunction({ type: 'get', path: options.url }, function (c) {
      c.files.map(function(f) {
        f.extension = util.isCodeFile(f.filename)
      })
      self.setData({ commit: c })
    })
  },

  onShareAppMessage: function () {

  }
})