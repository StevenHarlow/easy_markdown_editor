//= require markdown

EasyMarkdownEditor = {
  intializeEditor: function() {
    this.markdownEditor();
    document.removeEventListener('turbolinks:load page:load ready', this.intializeEditor);
    previewBtns = document.querySelectorAll('.easyMarkdown--previewBtn');
    previewBtns.forEach(function(elem) {
      elem.addEventListener('click', this.preview);
    });
  },

  markdownEditor: function() {
    markdownBtns = document.querySelectorAll('.easyMarkdown--option');
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

document.addEventListener('turbolinks:load page:load ready', EasyMarkdownEditor.intializeEditor);
