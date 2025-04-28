# common-sandbox
If you need a Codespace not linked to any particular project or code repo, this is the place for you!

There are two dev containers to choose from. A .NET 8 (C#) environment, and a Node.js environment. If it makes sense, we could merge these.

Codespaces are configured to use the 4-core machine type (second lowest) by default. This balances cost and performance.

# Address Lookup (.NET 9 - Blazor)
## Run me
Once you open the branch on Codespaces, cd into `ApiVisualiser` and execute `dotnet run` in the terminal. Codespaces will expose the app on a port (5206, I think?) for you to connect to. It'll also try opening the app in a new tab, but your browser will probably block the pop up.