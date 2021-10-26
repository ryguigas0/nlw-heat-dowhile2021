defmodule ElixirHeatTags.Messages.Create do
  alias ElixirHeatTags.{Repo, Message}

  def call(new_message) when is_map(new_message) do
    new_message
    |> Message.changeset()
    |> Repo.insert()
    |> handle_insert()
  end

  defp handle_insert({:ok, message}), do: message
  defp handle_insert({:error, reason}), do: {:error, %{reason: reason, status: :bad_request}}
end
