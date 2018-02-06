module EasyMarkdownEditor
  module ViewHelpers
    def markdown_editor(content = 'hello world')
      content_tag(:div, :id => 'md-editor') do
        content
      end
    end
  end
end
