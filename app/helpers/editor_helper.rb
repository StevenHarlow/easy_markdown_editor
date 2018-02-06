module EditorHelper
  def markdown_editor(content = 'hello world')
    content_tag(:div, class: 'easyMarkdown') do
      content_tag(:div, class: 'easyMarkdown--option') do
        content
      end +
      content_tag(:div, class: 'easyMarkdown--previewBtn') do
        content
      end
    end
  end
end
