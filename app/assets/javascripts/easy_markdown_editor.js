//= require markdown

EasyMarkdownEditor = {
  initializeEditor: function() {
    console.log('binding');
    this.markdownEditor();
    document.removeEventListener('turbolinks:load page:load ready', this.intializeEditor);
    let previewBtns = document.querySelectorAll('.easyMarkdown--previewBtn');
    previewBtns.forEach(function(elem) {
      elem.addEventListener('click', this.preview);
    });
  },

  markdownEditor: function() {
    let markdownBtns = document.querySelectorAll('.easyMarkdown--option');
    markdownBtns.forEach(function(elem) {
      elem.addEventListener('click', function(){
        console.log('hi');
        console.log(this);
      });
    });
  },

  preview: function() {
    console.log('Preview!');
  }
}

if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    document.addEventListener('turbolinks:load page:load ready', EasyMarkdownEditor.initializeEditor);
  } else {
    document.addEventListener('DOMContentLoaded', document.addEventListener('turbolinks:load page:load ready', EasyMarkdownEditor.initializeEditor));
}
