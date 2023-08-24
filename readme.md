## Overview
A simple front and backend that run concurrently in a Docker container.

### Front
A React/Typescript app that defaults to port 3000.
Dev runs react scripts and live reloads, prod serves static build files from backend.

### Back
Express app that defaults to port 80.

### Docker
Runs front and back concurrently in a container on port 80.

## To start
Development:
    
    docker-compose up

    // Or run in background:
    docker-compose up -d

Production:

    docker-compose -f docker-compose.prod.yml up

    // Or run in background:
    docker-compose -f docker-compose prod.yml up -d

Run both in development without Docker:
    
    yarn run dev


Has only been tested with Docker desktop 4.21.1


