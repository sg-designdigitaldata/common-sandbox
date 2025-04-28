using System;
using System.Dynamic;
using System.Text.Json;

namespace ApiVisualiser.Helpers;

public static class ParseJsonAsDynamic
{
    public static dynamic? Parse(JsonElement element)
    {
        dynamic? returnObj = element.ValueKind switch
        {
            JsonValueKind.String => element.GetString(),
            JsonValueKind.Number => element.TryGetInt64(out var l) ? l : element.GetDouble(),
            JsonValueKind.True => true,
            JsonValueKind.False => false,
            JsonValueKind.Null => null,
            JsonValueKind.Object => ParseJsonObject(element),
            JsonValueKind.Array => element.EnumerateArray()
                                        .Select(Parse)
                                        .ToList(),
            _ => element.ToString()
        };

        return returnObj;
    }

    private static ExpandoObject ParseJsonObject(JsonElement element)
    {
        var expando = new ExpandoObject() as IDictionary<string, object?>;
        foreach (var prop in element.EnumerateObject())
        {
            expando[prop.Name] = Parse(prop.Value);
        }
        var returnObj = (ExpandoObject)expando;
        return returnObj;
    }

}
