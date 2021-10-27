defmodule ElixirHeatTags.Messages.Get do
  alias ElixirHeatTags.{Repo, Message}
  import Ecto.Query

  def today_messages() do
    today = Date.utc_today()
    # Finds messages sent (today converts from naive date time to date time)
    Repo.all(from message in Message, where: type(message.inserted_at, :date) == ^today)
  end
end
