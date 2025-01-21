
Teamtailor CSV Downloader

This is a simple web application that allows users to download a CSV file containing candidate data fetched from the Teamtailor API. The app consists of a Node.js backend that handles API calls to Teamtailor and a React frontend that lets the user trigger the CSV
download.

Project Structure

teamtailor-csv-app/
├── backend/                              # Node.js backend server
│   ├── controllers                       # Business logic for handling requests
        ├── candidatesController.js       # Handles candidate-related operations
    ├── services                          # Reusable logic and functions
        ├── candidateServices.js          # API call and data processing for candidates
    ├── tests                             # Unit and integration tests for backend
        ├── candidatesController.test.js  # Tests for candidatesController.js
        ├── candidatesService.test.js     # Tests for candidateServices.js
    ├── utils                             # Helper functions and utilities
        ├── csvHelpers.js                 # Utility for CSV file creation
        ├── retryLimit.js                 # Retry logic for failed API requests
│   ├── app.js                            # Express app setup and middleware
    ├── routes.js                         # API routes for the backend
├── frontend/              # React frontend
│   ├── src/
│   │   ├── App.js         # React component for the download button and UI
│   │   ├── App.test.js    # Frontend tests for UI interactions
├── README.md              # Project documentation

Technologies Used

Backend:

    Node.js and Express for server-side handling
    Axios for HTTP requests to the Teamtailor API
    JSON2CSV for converting JSON data into CSV format
    Jest and Supertest for backend testing
    CORS for enabling cross-origin requests

Frontend:

    React for building the UI and handling user interactions
    React Testing Library for frontend testing

Installation

1. Clone the Repository

    git clone https://github.com/your-username/teamtailor-csv-app.git
    cd teamtailor-csv-app

2. Install Dependencies
    Backend Setup

    npm install

    Frontend Setup
    Navigate to the frontend folder and install the required packages:

    cd frontend
    npm install

Running the Application

1. Start the Backend Server
    In the teamtailor csv app directory, run the following command to start the backend server:

    npm run dev

    This will start the Node.js backend server at http://localhost:5000.

2. Start the Frontend React App

    In the frontend directory, run the following command to start the React frontend:

    cd frontend
    npm run start

    This will start the React development server at http://localhost:3000.


Usage
Open your browser and go to http://localhost:3000.

You should see a "Download CSV" button on the page.

Click the button, and the app will fetch candidate data from the Teamtailor API, convert it to CSV, and initiate the download.