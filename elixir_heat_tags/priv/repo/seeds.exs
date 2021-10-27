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


msgs = [
  %{
    content: "Ended Pedigree Pedigree Geriatric Resend Tamale!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Sloppy Fantasize Fondue Plausible Plausible Mounting!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Dropper Untoasted Banish System Untoasted Banish!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Hefty Astronaut Astronaut Skies Skies Stunning!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Spotted Disloyal Henchman Rockfish Spotted Henchman!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Sulphuric Ideally Sulphuric Baffling Sulphuric Unwoven!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Revert Eradicate Revert Shaking Revert Fruit!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Widow Spectator Choosy Donated Obscure Cough!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
  %{
    content: "Manned Disdain Manned Quartered Disdain Quartered!!!!",
    email: "xewowir703@fretice.com",
    username: "ryguigas0"
  },
]


Enum.each(msgs, fn msg ->
  msg
  |> IO.inspect(label: "inserting new message")
  |> Message.changeset()
  |> Repo.insert!()
end)

IO.inspect(:ok, label: "db seeds status")
