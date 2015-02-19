#https://gist.github.com/balupton/3695936
# Our custom routes for our DocPad Server
# Loaded via our require in the serverExtend event in our docpad.coffee configuration file

module.exports = class Router

  constructor: (options)->
    @server = options.server
    @docpad = options.docpad
    @rootDir = './out'


  #single public method
  route: ->

    #send assets from file system instead of docpad's cache
    #(this to get around the fact that docpad is caching before all grunt tasks run)
    @server.use (req, res, next)=>
      if req.originalUrl.indexOf('assets') > -1
        res.sendfile("#{@rootDir}#{req.originalUrl}")
        return
      next()
