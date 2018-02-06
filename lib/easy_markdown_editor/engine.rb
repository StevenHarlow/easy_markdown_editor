module EasyMarkdownEditor
  module Rails
    class Engine < ::Rails::Engine
      config.to_prepare do
        ApplicationController.helper(EditorHelper)
      end
    end
  end
end
