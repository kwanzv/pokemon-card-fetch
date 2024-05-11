# Pokemon fetch API with typescript

This is a really simple React app with Vite and typescript support that was a test bed for me to implement best practices when fetching data, catching errors and implementing loading states.

Some of the challenges I faced were :

* Using types in TS for passing data as props, and then using interfaces for API data.
* React.useEffect to hold the logic for loading states, I actually thought it was better to decouple the loading logic into the main app and used a ternerary to render the loading card or card with data.

## Installation

Just download the package, install with NPM and run on your local server.
