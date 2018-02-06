module EditorHelper
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

  def markdown_editor(options)
    content_tag(:div, class: 'easyMarkdown') do
      content_tag(:div, class: 'easyMarkdown-textarea') do
        yield
      end +
      content_tag(:div, class: 'easyMarkdown--buttons') do
        build_buttons(options)
      end
    end
  end

  def build_buttons(options)
    buttons = ALL_BUTTONS - options[:exclude]
    content_tag(:div, class: 'easyMarkdown--buttons') do
      buttons.reduce('') do |group,btn|
        group << button_tag(:div, class: "easyMarkdown--btn easyMarkdown--#{btn}")
      end.html_safe +
      button_tag(:div, class: 'easyMarkdown--previewBtn')
    end
  end
end
