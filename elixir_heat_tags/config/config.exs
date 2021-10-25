# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :elixir_heat_tags,
  ecto_repos: [ElixirHeatTags.Repo]

# Configures the endpoint
config :elixir_heat_tags, ElixirHeatTagsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "xFDFvyTiwyWyAF7t7JejOu4BdK93Asv6/8X2YaXZcyko06BSiFdn+rTkvexFeMCr",
  render_errors: [view: ElixirHeatTagsWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: ElixirHeatTags.PubSub,
  live_view: [signing_salt: "OMUNKSii"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
