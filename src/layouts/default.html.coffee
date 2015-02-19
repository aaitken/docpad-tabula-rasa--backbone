--- cson

styles: [
  '/assets/styles/app.css']
scripts: [
  '/assets/scripts/globals/vendors.js'
  '/assets/scripts/modules/app.js']

---


doctype 5
html ->

  head ->
    
    meta charset:"utf-8"
    
    #insert styles using frontend plugin
    for url in @assets('styles')
      link rel:"stylesheet", href:url, media:"all"

  body ->

    text @partial('title-bar.html.coffee')
    text @content

    #insert script using frontend plugin
    #this picks up incrementally-named document scripts as well
    for url in @assets('scripts')
      script src:url, defer:"defer"
