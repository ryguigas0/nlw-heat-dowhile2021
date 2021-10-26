defmodule ElixirHeatTagsWeb.MessagesView do
  use ElixirHeatTagsWeb, :view

  def render("created.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
