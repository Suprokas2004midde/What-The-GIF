# 🖼️ What-The-GIF

**Deployment Link:** [https://what-the-gif.vercel.app/](https://what-the-gif.vercel.app/)

A simple, fun web application to generate and display random GIFs. Users can fetch a completely **random GIF** or search for GIFs related to a **specific tag/term**. This project is a focused exercise in modern front-end development, custom hooks, and seamless API integration.


<img width="1892" height="862" alt="Screenshot 2025-10-24 110909" src="https://github.com/user-attachments/assets/05cdb3d8-42db-4c08-b815-a3b27a453183" />
<img width="1861" height="863" alt="Screenshot 2025-10-24 110917" src="https://github.com/user-attachments/assets/70993f3c-f985-4def-9024-fd69e8dfebe5" />

## ✨ Features

  * **Random GIF Generation:** Get a surprise GIF with a single button click.
  * **Tag-Based Search:** Input any term (e.g., "bheem," "coding," "cat") to get a random GIF relevant to that topic.
  * **Responsive Design:** Clean, easy-to-use interface that works well on all screen sizes.
  * **Loading Spinner:** A visual indicator (`Spinner.jsx`) ensures a smooth user experience while the GIF loads.

## 🛠️ Tech Stack

  * **Front-end Framework:** **React**
  * **Build Tool:** **Vite**
  * **Styling:** Pure CSS (using `index.css`)
  * **API:** **GIPHY API** (used for fetching GIF data)
  * **Deployment:** **Vercel**

## 📂 File Structure

The project follows a typical React/Vite structure, with key components and logic separated for maintainability:

```
Random_gif/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Random.jsx    # Component for generating a fully random GIF (Top section)
│   │   ├── Spinner.jsx   # Loading animation component
│   │   └── Tag.jsx       # Component for generating a tag-based GIF (Bottom section)
│   ├── hooks/
│   │   └── useGif.js     # Custom hook containing API fetching logic (reusable)
│   ├── App.jsx           # Main application component, orchestrates Random.jsx and Tag.jsx
│   ├── index.css         # Global styles and utility classes
│   └── main.jsx          # Entry point for the React application (Vite-specific)
├── .env                  # Environment variables (IGNORED, contains API key)
├── .gitignore            # Specifies files/directories to ignore
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration file
```

-----

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1\. Prerequisites

You must have **Node.js** and **npm** (or yarn/pnpm) installed.

### 2\. Clone the Repository

```bash
git clone [YOUR_REPO_URL]
cd Random_gif
```

### 3\. Install Dependencies

```bash
npm install
# or
yarn install
```

### 4\. Setup Environment Variables

This project requires a **GIPHY API Key**.

1.  Sign up for a GIPHY Developer account and get an API Key.

2.  Create a file named **`.env`** in the root directory.

3.  Add your API key to the file in the following format:

    ```env
    VITE_GIPHY_API_KEY="YOUR_API_KEY_HERE"
    ```

    *(Note: The file `.env` is correctly included in `.gitignore` for security)*

### 5\. Run the Project

Start the development server:

```bash
npm run dev
# The application will typically open at http://localhost:5173/
```

### 6\. Build for Production (Optional)

To create a production-ready build:

```bash
npm run build
```

The compiled assets will be placed in the `dist` directory.

-----

## ⚙️ Key Logic (`useGif.js` Hook)

The custom hook **`useGif.js`** is the brain of the application. It encapsulates the core logic for fetching data:

  * It uses the `useState` and `useEffect` hooks.
  * It handles the **API request** to the GIPHY endpoint.
  * It manages the **loading state** (`loading`) to display the spinner.
  * It accepts an optional `tag` argument to handle both random and tagged GIF requests with the **same reusable logic**.
