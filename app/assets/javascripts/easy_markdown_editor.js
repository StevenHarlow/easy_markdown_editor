//= require markdown

EasyMarkdownEditor = {
  initializeEditor: function() {
    console.log('binding');
    EasyMarkdownEditor.markdownEditor();
    document.removeEventListener('turbolinks:load page:load ready', EasyMarkdownEditor.intializeEditor);
    let previewBtns = document.querySelectorAll('.easyMarkdown--previewBtn');
    previewBtns.forEach(function(elem) {
      elem.addEventListener('click', EasyMarkdownEditor.preview);
    });
  },

  markdownEditor: function() {
    let markdownBtns = document.querySelectorAll('.easyMarkdown--btn');
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


$(document).on('turbolinks:load page:load ready', EasyMarkdownEditor.initializeEditor);
