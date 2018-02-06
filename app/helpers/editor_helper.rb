module EditorHelper
  def markdown_editor(options)
    content_tag(:div, class: 'easyMarkdown') do
      yield
      content_tag(:div, class: 'easyMarkdown--buttons') do
        Editor.build_buttons(options)
      end
    end
  end

  class Editor
    ALL_BUTTONS = [
      :h1,
      :h2,
      :h3,
      :h4,
      :h5,
      :italic,
      :bold,
      :bullet,
      :indent,
      :underline,
      :table,
      :break,
      :block_quote,
      :link,
      :image
    ]

    def self.build_buttons(options)
      buttons = ALL_BUTTONS - options[:exclude]
      content_tag(:div, class: 'easyMarkdown--buttons') do
        buttons.each do |b|
          button_tag(:div, class: "easyMarkdown--#{b}") +
        end
        button_tag(:div, class: 'easyMarkdown--previewBtn')
      end
    end
  end
end
