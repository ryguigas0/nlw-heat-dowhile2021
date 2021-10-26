defmodule ElixirHeatTagsWeb.Router do
  use ElixirHeatTagsWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ElixirHeatTagsWeb do
    pipe_through :api # Filters the request in the scope
    post "/message", MessagesController, :create
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through [:fetch_session, :protect_from_forgery]
      live_dashboard "/dashboard", metrics: ElixirHeatTagsWeb.Telemetry
    end
  end
end
