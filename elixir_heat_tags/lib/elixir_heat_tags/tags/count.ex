defmodule ElixirHeatTags.Tags.Count do
  alias ElixirHeatTags.Messages.Get

  def call do
    Get.today_messages()
    # Returns a keyword list with [{:ok, map1}, {:ok, map2}, ...]
    |> Task.async_stream(&count_words(&1.content))
    # Lazy operator -> Run when result is required
    |> Enum.reduce(%{}, &merge_frequencies/2)
    |>IO.inspect(label: "Words counted")
  end

  defp merge_frequencies({:ok, map1}, map2) do
    Map.merge(map1, map2, fn _k, value1, value2 -> value1 + value2 end)
  end

  defp count_words(content) do
    content
    # Split in words
    |> String.split(" ")
    # Map words to how many times they appeared
    |> Enum.frequencies()
  end
end
