## Project Overview

This project is a simple homepage that displays pictures fetched from the Unsplash API. It includes features like infinite scrolling, favoriting pictures (stored in local storage), lazy-loading of images, and error handling for a seamless user experience.

### Technologies Used

- React framework with Next.js
- Inline styling using JavaScript objects
- Data fetched from the Unsplash API
- Lazy-loading of images for improved performance
- Local storage to persist favorited images across page refreshes

### Development Environment

- Code Editor: Visual Studio Code (VSCode)
- Browser: Google Chrome

## Getting Started

To run this project on your local machine, please follow these steps:

1. **Node.js Installation**: Ensure you have Node.js installed on your computer. This project was developed using Node.js version 16, but any version above 16 should work.

   - Download Node.js from the official website: [Node.js Download](https://nodejs.org/)
   - After installation, verify Node.js and npm (Node Package Manager) are installed by running the following commands in your terminal:

     ```bash
     node -v
     npm -v
     ```

2. **Download and Extract the Project**: If you haven't already, download the project as a ZIP file and extract it to a location on your computer.

3. **Clone the Repository (Optional)**: Alternatively, you can clone this project directly from my GitHub repository by running the following command in your terminal

Please note that if you choose to clone the repository, you'll need to have Git installed on your computer.

4. **Install Dependencies**: Navigate to the project folder in your terminal and run the following command to install all the necessary packages:

   ```bash
   npm install
   ```

5. **Configure the API Key**: In the project folder, locate the `index.js` file inside the `lib` folder. Open the `index.js` file, and in the `fetcher` function, find the section where headers are set. Replace the existing access key in the `Authorization` header with your own Unsplash access key as follows:

   ```javascript
   headers: {
     Authorization: 'Bearer your_access_key_here',
   },
   ```

6. **Run the Project**: Once the dependencies are installed and the API key is configured, start the development server by running:

   ```bash
   npm run dev
   ```

7. **Access the Project**: Open your web browser (Google Chrome) and go to `http://localhost:3000` to access the project. You should now see the homepage displaying pictures fetched from the Unsplash API with lazy-loaded images for improved performance. Favorited pictures are stored in local storage, ensuring they persist across page refreshes.

## Usage

- Scroll down to load more pictures infinitely.
- Click the favorite button to favorite a picture. Favorited pictures will appear on the favorites page and are stored in local storage.
- On the favorites page, you can unfavorite pictures by clicking the remove favorite button.

