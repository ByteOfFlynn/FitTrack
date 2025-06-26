# FitTrack — Exercise Tracker (MERN Stack)

**FitTrack** is a full-stack Single Page Application (SPA) built using the **MERN stack**:  
**MongoDB**, **Express**, **React**, and **Node.js**. The application allows users to log, view, update, and manage their exercise history through a clean, responsive interface powered by React and a structured RESTful API backend.

---

## Tech Stack

- **Frontend**: React (functional components, hooks, React Router, JSX)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB using Mongoose ODM
- **Environment**: .env for config management on both client and server
- **Design**: CSS styling via `App.css` with form, table, and layout customization

---

## Application Overview

FitTrack enables users to:

- Add new exercise entries
- View a complete history of all logged exercises
- Update existing records
- Delete entries
- Navigate between pages with client-side routing
- Validate all inputs both client- and server-side

Each exercise includes:

- `name` (string): Exercise name  
- `reps` (integer > 0): Number of repetitions  
- `weight` (integer > 0): Weight used  
- `unit` (string): Either `"lbs"` or `"kgs"`  
- `date` (string): Date performed in `MM-DD-YY` format  

---

## REST API Endpoints

The backend is a fully functional REST API supporting standard CRUD operations:

| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| POST   | `/exercises`           | Create a new exercise entry         |
| GET    | `/exercises`           | Retrieve all exercises              |
| GET    | `/exercises/:id`       | Retrieve one exercise by ID         |
| PUT    | `/exercises/:id`       | Update an existing exercise         |
| DELETE | `/exercises/:id`       | Delete an exercise by ID            |

Each route includes full validation with informative error handling and proper status codes (201, 200, 400, 404, 204).

---

##  Frontend Functionality

### Home Page

- Displays all exercises in a responsive table
- Includes edit and delete icons (via [React Icons](https://react-icons.github.io/react-icons/))
- Clicking edit navigates to the **Edit Page**
- Clicking delete removes the entry via `DELETE /exercises/:id`
- Includes a link/button to navigate to the **Create Exercise** page

### Create Exercise Page

- Form with inputs for `name`, `reps`, `weight`, `unit`, and `date`
- `unit` field implemented with a `<select>` dropdown
- Submitting the form calls `POST /exercises`
- Alerts user of success or failure, then navigates back to Home

### Edit Exercise Page

- Pre-populated form for editing an existing entry
- Form submission updates data via `PUT /exercises/:id`
- Alerts user and returns to Home page on success/failure

---

## Navigation & Routing

- Uses `react-router-dom` for routing
- All pages include a reusable `Navigation` component with links to:
  - Home Page
  - Create Exercise Page
- Navigation component built with `<nav>` and `Link` elements
- Page structure includes:
  - `<header>` with app title and description
  - `<footer>` with © and author name, shown on all pages

---

## Styling (CSS)

Custom styles defined in `App.css`:

- Global font, background, and margin/padding via `body`
- Table styling for `tr`, `th`, and `td`
- Form input and button styling
- Select element styling consistent with form inputs

---

## Deployment
This app is designed to be deployed using a standard two-port architecture (React on 8000, API on 3000). MongoDB connection can be configured for either a local or cloud-hosted MongoDB Atlas cluster.
