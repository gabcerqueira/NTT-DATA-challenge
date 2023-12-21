# Movie  App

Welcome to the Movie Search App! This application allows users to search movies.

## Running the App

### Using Docker

1. For the initial setup, build and run the containers:

    ```bash
    docker-compose up --build
    ```

2. For subsequent runs:

    ```bash
    docker-compose up
    ```

### Running Separately

#### Frontend (Port 5137)

Navigate to the directory containing `package.json` and run:

```bash
yarn dev
```

This will start the frontend, and you can access it at [http://localhost:5137](http://localhost:5137).

#### Backend (Port 3000)

Navigate to the directory containing `package.json` and run:

```bash
yarn start:dev
```

This will start the backend, and you can access it at [http://localhost:3000](http://localhost:3000).

---
