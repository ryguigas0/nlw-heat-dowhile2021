# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     ElixirHeatTags.Repo.insert!(%ElixirHeatTags.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias ElixirHeatTags.{Message, Repo}

new_msg = %{
  content: "DOWHILE!!!!",
  email: "xewowir703@fretice.com",
  username: "ryguigas0"
}

new_msg
|> Message.changeset()
|> Repo.insert!()

IO.inspect(:ok, label: "db seeds status")
