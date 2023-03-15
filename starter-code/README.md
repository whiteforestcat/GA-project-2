# Image-Searcher App

This Image Project enables the user to search for images. The user is able to enlarge and minimise images upon clicking and save a particular image to favourites.

Technologies used

# 1. React.js

React.js is used to create the user interface and functions of the events.

Each gallery of category (animals, flowers and furniture) are built in separate components.

The search button utilises useRef which passes its value and fetching the API upon clicking the "Search" button

The favoruites states and setStates are accessed in the App.jsx via useContext to easily pass its values from one page to another

# 2. CSS

CSS is used to style and design the overall look of the website.

It is also used to animate the popping up effect when an image is clicked to enlarge it (and minimise it). When clicking an image, the click will change the class of that <div> to to another class which resizes that image to the whole screen. Clicking the enlarge image will revert back to its original class where the image size is smaller.

# 3. React Router v6

React Rotuer v6 is used to create the various pages. Routers are used to link the links in the navigation bar to their respective pages.