require 'easy_markdown_editor/view_helpers'
module EasyMarkdownEditor
  class Railtie < Rails::Railtie
    ActiveSupport.on_load(:action_view) do
      include EasyMarkdownEditor::ViewHelpers
    end
  end
end
