# common-sandbox
If you need a Codespace not linked to any particular project or code repo, this is the place for you!

There are two dev containers to choose from. A .NET 8 (C#) environment, and a Node.js environment. If it makes sense, we could merge these.

Codespaces are configured to use the 4-core machine type (second lowest) by default. This balances cost and performance.


## POC Project: Postcode Lookup

Using a variety of different technologies and frameworks, create a Postcode Lookup component. An API key for the Ordinance Survey [Places API](https://osdatahub.os.uk/docs/places/overview) has been provided in the Codespaces environment variables.

Create a basic website using the Scottish Government Design System. Add a form with an input box for a Postcode. Add a button which, when clicked, calls the OS API. From the returned set of data, display a list of all the valid addresses for that postcode.

Acceptance criteria:

- Website uses the SGDS
- User can enter a postcode and be shown a list of addresses at that postcode
- Include error handling, e.g. for invalid postcode entry, if their is an API call failure, and so on

Each team member should use a different development framework.

- *Liam*: SvelteKit 5
- *Michael*: Blazor
- *Neil*: Angular
- *Oksana*: Vue
- *Cristian*: React

