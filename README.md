# Amsterdam Properties - Nuxt App

## Project Overview

Amsterdam Properties is a web application built with Nuxt.js and Tailwind CSS. It leverages the Funda API to display a list of properties available in Amsterdam. The application provides users with detailed information on each property, including images, addresses, availability, and more. The project showcases a clean and responsive design with a focus on a great user experience.

## Features

- **Property Listings**: View a comprehensive list of properties available for sale in Amsterdam.
- **Property Details**: Click on any property to see detailed information, including address, images, and availability.
- **Responsive Design**: Tailored for both desktop and mobile users with a mobile-first design approach.

## Technologies Used

- **Frontend**: Nuxt.js (Vue.js), Tailwind CSS
- **API**: Funda API
- **Deployment**: Vercel

## Getting Started

To get started with this project, follow the steps below to set up and run it locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 14 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (Package Manager)

### Setup Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd your-repo
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Create a `.env` file**:

    This project uses environment variables to store sensitive information like API keys. To set up your environment variables:

    - Copy the contents of the `.env.example` file:

      ```bash
      cp .env.example .env
      ```

    - Open the `.env` file and add your API keys and URLs. Replace `YOUR_API_KEY_HERE` and `YOUR_BASE_URL_HERE` with your actual values:

      ```
      FUNDA_BASE_URL=https://partnerapi.funda.nl/feeds/Aanbod.svc/json/
      FUNDA_API_KEY=YOUR_API_KEY_HERE
      ```

    > **Note**: Do not commit your `.env` file to version control as it contains sensitive information.

5. **Run the application**:

    ```bash
    npm run dev
    ```

6. **Access the application**:

    Once the server is up and running, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Deploying to Vercel (should you choose to)

To deploy the application to Vercel:

1. Ensure your `.env` variables are set up in Vercel. Go to the Vercel dashboard and add your environment variables as shown below:

