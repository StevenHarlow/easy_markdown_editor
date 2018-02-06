require 'easy_markdown_editor/version'
require 'easy_markdown_editor/engine' if defined?(Rails)

module EasyMarkdownEditor
  module Rails
    class Engine < ::Rails::Engine
    end
  end
end
