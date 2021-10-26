defmodule ElixirHeatTags.Message do
  use Ecto.Schema

  import Ecto.Changeset

  @fields [:content, :username, :email]

  @derive {Jason.Encoder, only: [:id] ++ @fields} # What to render in json

  schema "messages" do
    field :content, :string
    field :username, :string
    field :email, :string

    timestamps()
  end

  # Verify the changes done to a previous messages before doing anything with it
  def changeset(changes) when is_map(changes) do
    %__MODULE__{}
    |> cast(changes, @fields)
    |> validate_required(@fields)
    |> validate_length(:content, min: 7, max: 140)
    |> validate_format(:email, ~r/@/)
  end
end
