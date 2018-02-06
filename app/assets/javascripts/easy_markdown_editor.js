//= require markdown

EasyMarkdownEditor = {
  intializeEditor: function() {
    markdownEditor();
    document.removeEventListener('turbolinks:load page:load ready', intializeEditor);
    previewBtns = document.querySelectorAll('.easyMarkdown--previewBtn');
    previewBtns.forEach(function(elem) {
      elem.addEventListener('click', preview);
    });
  }

  markdownEditor: function() {
    markdownBtns = document.querySelectorAll('.easyMarkdown--option');
    markdownBtns.forEach(function(elem) {
      elem.addEventListener('clcik', function(){
        console.log('hi');
        console.log(this);
      });
    });
  }

  preview: function() {
    console.log('Preview!');
  }
}

document.addEventListener('turbolinks:load page:load ready', intializeEditor);
