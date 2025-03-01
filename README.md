# **College Clubs and Events Website**

A fully responsive and interactive web application to manage and showcase college clubs and events. This project provides a platform for students to explore various clubs, register for events, and stay updated with upcoming activities.

---

## **Features**

- **Navbar**: A dynamic and aesthetic navbar with dropdowns and hover animations.
- **Magic Cursor**: A custom magic cursor with color customization options and a settings toggle.
- **Clubs Page**: 
  - Displays all available clubs in a grid layout.
  - Hover animations reveal the club name and a "Join" button.
  - Search bar to filter clubs by name.
- **Upcoming Events Page**:
  - Displays event posters, names, club logos, deadlines, and registration buttons.
  - Includes event date and venue details.
  - Search functionality to filter events by name.
- **Event Details Page** (To Be Designed):
  - Each event redirects to a detailed page with more information (currently uses dummy routes).
- **Meet the Team Page**:
  - Displays a hierarchical structure of the team members with hover animations.

---

## **Tech Stack**

- **Frontend**: React.js, CSS3
- **Routing**: React Router
- **Deployment**: Vercel
- **Design Tools**: Figma (if applicable)

---

## **Project Setup**

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/college-clubs-events.git
   cd college-clubs-events
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser at `http://localhost:3000` to view the application.

---

## **Folder Structure**

```
src/
│
├── components/               # React components
│   ├── Navbar.jsx             # Navbar with dropdowns and hover effects
│   ├── MagicCursor.jsx        # Magic cursor with settings toggle
│   ├── ClubsPage.jsx          # Clubs page with grid layout and search bar
│   ├── UpcomingEventsPage.jsx # Upcoming events page with event details
│   ├── MeetTheTeam.jsx        # Hierarchical team structure page
│   └── OtherComponents.jsx    # Other reusable components
│
├── styles/                   # CSS files for styling
│   ├── Navbar.css             # Styles for navbar
│   ├── MagicCursor.css        # Styles for magic cursor
│   ├── ClubsPage.css          # Styles for clubs page
│   ├── UpcomingEventsPage.css # Styles for upcoming events page
│   └── App.css                # Global styles for the app
│
├── images/                   # Image assets used in the app
│   ├── club_logos/            # Club logos
│   ├── event_posters/         # Event posters
│   └── other_images/          # Other images used in the app
│
├── App.jsx                   # Main app component with routing logic
├── index.js                  # Entry point of the React app
└── README.md                 # Project documentation (this file)
```

---

## **Pages**

### 1. **Home Page**
- A landing page with an overview of clubs and events.

### 2. **Clubs Page**
- Displays all clubs in a grid layout.
- Includes a search bar to filter clubs by name.
- Hover animations reveal club details.

### 3. **Upcoming Events Page**
- Displays event posters, names, deadlines, registration buttons, dates, and venues.
- Includes a search bar to filter events by name.

### 4. **Meet the Team Page**
- A hierarchical structure of team members with hover animations.

### 5. **Event Details Page**
- Each event redirects to its detailed page (currently uses dummy routes).

---

## **Screenshots**

### Clubs Page

Clubs Page

### Upcoming Events Page

Upcoming Events Page

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Contact**

For questions or suggestions, feel free to reach out:

- Email: [bmanobhiramreddy@gmail.com](mailto:bmanobhiramreddy@gmail.com)
- GitHub: [Manobhiramreddy](https://github.com/Manobhiramreddy)
- LinkedIn: [Manobhiram Reddy](https://www.linkedin.com/in/bodapatla-manobhiramreddy/)
