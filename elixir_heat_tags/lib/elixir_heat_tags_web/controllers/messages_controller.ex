defmodule ElixirHeatTagsWeb.MessagesController do
  use ElixirHeatTagsWeb, :controller
  alias ElixirHeatTags.Message

  defp handle_create(%Message{} = msg, conn) do
    conn
    |> put_status(:created)
    |> render("created.json", message: msg)
  end

  defp handle_create({:error, %{reason: err, status: status}}, conn) do
    conn
    |> put_status(status)
    |> put_view(ElixirHeatTagsWeb.ErrorView)
    |> render("bad_request.json", error: err)
  end

  def create(conn, params) do
    # conn -> where you recieve and send data
    # params -> data from body
    # # All controller routes must recieve, manipulate conn and return a new conn
    params
    |> ElixirHeatTags.create_message()
    |> handle_create(conn)
  end
end
