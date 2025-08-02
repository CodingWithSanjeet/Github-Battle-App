# GitHub Battle App

A dynamic React application that allows users to explore popular GitHub repositories and battle GitHub users to determine who has the better profile based on followers and repository statistics.

## 🚀 Live Demo

**[View Live Demo](https://github-users-battle.netlify.app/)**

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Configuration](#api-configuration)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🏆 Popular Repositories
- Browse the top 30 most popular repositories on GitHub
- Filter by programming languages: All, JavaScript, CSS, Ruby, Java, Python
- View repository statistics including stars, forks, and open issues
- Direct links to repositories and user profiles

### ⚔️ GitHub User Battle
- Compare two GitHub users head-to-head
- Battle scoring based on:
  - Number of followers
  - Total stars across all repositories
- Visual results showing winner and detailed user profiles
- User profile information including name, location, company, and follower count

### 🎨 User Experience
- **Dark/Light Theme Toggle**: Seamless switching between themes
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Loading States**: Smooth loading indicators for better UX
- **Interactive Tooltips**: Helpful information on hover
- **Route-based Navigation**: Clean URLs for different sections

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icon library
- **Context API** - State management for theming

### Build Tools
- **Webpack 5** - Module bundler and build tool
- **Babel** - JavaScript transpiler
- **CSS Loader** - CSS processing
- **HTML Webpack Plugin** - HTML generation

### APIs & External Services
- **GitHub REST API** - Repository and user data
- **Netlify** - Hosting and deployment

## 📚 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **GitHub account** (for API access)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/github-battle-app.git
   cd github-battle-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure GitHub API** (Optional but recommended)
   - Open `app/utils/api.js`
   - Replace `YOUR_ID` and `YOUR_SECRET_ID` with your GitHub OAuth app credentials
   - This increases API rate limits from 60 to 5000 requests per hour

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:8080`
   - The app should be running with hot reload enabled

## 📖 Usage

### Exploring Popular Repositories
1. Navigate to the home page
2. Select a programming language from the filter tabs
3. Browse the top 30 repositories with their statistics
4. Click on repository names or user avatars to visit GitHub

### Battling GitHub Users
1. Click on "Battle" in the navigation
2. Enter two GitHub usernames in the input fields
3. Click "Battle" to compare the users
4. View the results showing the winner and detailed profiles
5. Reset to try another battle

### Theme Switching
- Use the theme toggle in the navigation bar
- Preference is maintained across sessions

## 📁 Project Structure

```
github-battle-app/
├── app/
│   ├── components/
│   │   ├── Battle.js          # User battle functionality
│   │   ├── Popular.js         # Popular repositories display
│   │   ├── Results.js         # Battle results page
│   │   ├── NavBar.js          # Navigation component
│   │   └── common/
│   │       ├── Card.js        # Reusable card component
│   │       ├── Loader.js      # Loading spinner
│   │       ├── Tooltip.js     # Tooltip component
│   │       └── Hover.js       # Hover effect component
│   ├── context/
│   │   └── theme.js           # Theme context provider
│   ├── utils/
│   │   └── api.js             # GitHub API integration
│   ├── index.js               # App entry point
│   ├── index.css              # Global styles
│   └── index.html             # HTML template
├── _redirects                 # Netlify redirects for SPA
├── webpack.config.js          # Webpack configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🔧 API Configuration

### GitHub API Setup (Recommended)

To avoid rate limiting, set up GitHub OAuth:

1. **Create a GitHub OAuth App**
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Fill in the application details
   - Note down your Client ID and Client Secret

2. **Update API Configuration**
   ```javascript
   // In app/utils/api.js
   const id = "your_github_client_id";
   const secret = "your_github_client_secret";
   ```

### API Endpoints Used
- `GET /search/repositories` - Popular repositories
- `GET /users/{username}` - User profile information
- `GET /users/{username}/repos` - User repositories

## 📸 Screenshots

### Light Mode vs Dark Mode Comparison
<table>
  <tr>
    <th align="center">
      <img width="441" height="1">
      <p> 
        <small>Light Mode</small>
      </p>
    </th>
    <th align="center">
      <img width="441" height="1">
      <p> 
        <small>Dark Mode</small>
      </p>
    </th>
  </tr>
<tr>
  <td align="center">
    <img alt="image" src="https://user-images.githubusercontent.com/35372091/168482758-16c0f95f-3d50-462e-b1eb-81b72cff2a7b.png" style="max-width: 100%">
    <img alt="image" src="https://user-images.githubusercontent.com/35372091/168482801-98051e96-9f06-4678-a9a8-fe9be1cbacfb.png" style="max-width: 100%">
    <img alt="image" src="https://user-images.githubusercontent.com/35372091/168482582-bda459e3-c4d9-4c69-8af5-f78dcaffacdc.png" style="max-width: 100%">
  </td>
  <td align="center">
    <img alt="image" src="https://user-images.githubusercontent.com/35372091/168482685-70fcf1bd-9c36-4701-bbf5-b5548b160ead.png" style="max-width: 100%">
    <img alt="image" src="https://user-images.githubusercontent.com/35372091/168482834-8581de1c-1698-410e-bb83-8d7ae843079d.png" style="max-width: 100%">
    <img alt="image" src="https://user-images.githubusercontent.com/35372091/168482626-ef50f803-f4de-4a68-9c9b-ce4ff272e7ca.png" style="max-width: 100%">
  </td>
</tr>
</table>

## 📦 Deployment

### Building for Production
```bash
npm run build
```

### Deploying to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects using the included `_redirects` file
4. The app will be available at your Netlify URL

### Environment Variables
For production deployment, set up environment variables for:
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 🙏 Acknowledgments

- **GitHub API** for providing access to repository and user data
- **React Icons** for the beautiful icon set
- **Netlify** for easy deployment and hosting
- **React community** for excellent documentation and resources

---

**Built with ❤️ using React and the GitHub API**
