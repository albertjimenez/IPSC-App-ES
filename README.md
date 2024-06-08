# IPSC Events in Spain

In this application, you can find upcoming IPSC (International Practical Shooting Confederation) events in Spain.

## Description

This application is designed to provide information about upcoming IPSC events in Spain. You can search and filter events by name, location, and weapon type.

## Technologies Used

- **Astro**: A modern framework for building static and dynamic web applications.
- **Preact**: A lightweight alternative to React, used to handle dynamic behavior within the app.
- **TypeScript**: A typed superset of JavaScript that improves code quality and development productivity.

## Features

- **Event Listing**: Displays a list of IPSC events in Spain with details such as name, weapon type, date and time, location, and additional notes.
- **Search Filter**: Allows real-time filtering of events as you type.
- **Reactive Components**: Uses Preact for interactive and dynamic components.

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/albertjimenez/IPSC-App-ES.git
    cd ipsc-events
    ```

2. Install dependencies using `pnpm`:

    ```bash
    pnpm install
    ```

3. Run the development server:

    ```bash
    pnpm run dev
    ```

4. Open your browser and visit `http://localhost:4321` to see the application in action.

## Project Structure

- `src/components`: Contains the application's components.
    - `ReactTSEventCard.tsx`: Card component to display event information.
    - `ReactCardBoxLayout.tsx`: Layout component that includes the search and event listing functionality.
- `src/layouts`: Contains the layouts used in the application.
- `public`: Contains static assets like images and JSON files.
- `styles`: Contains CSS style files.

## Sample JSON for Events

The JSON file containing the events looks like this:

```json
[
    {
        "name": "National Tournament",
        "tipoArma": "Pistol",
        "datetime": "2024-06-01T00:00:00.000Z",
        "url": "https://example.com/national-tournament",
        "notes": "Registration open until May 25.",
        "location": "Madrid, Spain",
        "level": "National"
    }
]
```
## Contributing
If you wish to contribute to this project, please fork the repository, create a new branch for your changes, and submit a pull request. We welcome all contributions!
