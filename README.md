# The Takehome Times

### Getting Started
#### To run this app locally:

1. Clone down this repo

2. Cd into the directory from your terminal and install the project dependencies:
    - Run `npm install` or `npm i` in the terminal

3. To load the web app:
    - Run `npm start` in the terminal
    - go to `http://localhost:3000` to interact with the app
    - Press `ctrl + c` to shutdown the server
---
### E2E Testing via Cypress
#### To run the testing suite:
- Make sure to have the web app running locally
- Run `npm run cypress` in the terminal
- Navigate to E2E testing with chrome
- Click on the test specs you wish to run
---
### Table of Contents
- [About the Project](#about-the-project)
- [Technologies Used](#technologies-used)
- [App demo](#see-the-app-in-action)
- [Lighthouse scores](#lighthouse-accessibility)
- [Wire Frames](#wireframes-via-figma)
- [Reflections](#reflections)
---
#### About the Project
**The Takehome Times** will display the top stories fetched from the New York Times [Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview) and display them to the user. The user can filter through the top stories. Clicking on an article will route to a detail page, giving more information on the article, as well as a link to read the full article on the nytimes website.

---
#### Contributors
 - [Alex Bumpus](https://github.com/Abumpus1)

#### Technologies Used
- React
- Javascript
- HTML
- CSS
- React Router
- Cypress 
- Fetch API
- [nytimes Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)
---
## See the app in action

### **_Dashboard_**

Visiting the app, the user will be able to see a list of recent news articles and filter through them.

![Dashboard-times](https://user-images.githubusercontent.com/3982238/181594324-f7d53745-51fe-4be8-9bb3-f16ff1f407df.gif)


### **_Details Page_**

Clicking on an article will navigate to a page displaying additional details about the article, and a link nagivating to the full article.

![Details-times](https://user-images.githubusercontent.com/3982238/181594435-34077d51-461a-460b-8775-24eb4f62a069.gif)

---

## Lighthouse accessibility

![Screen Shot 2022-07-28 at 6 20 49 PM](https://user-images.githubusercontent.com/3982238/181687366-7c753b6b-0ba2-4c31-93c5-8ef5c6fd0a73.png)

---
## Basic Wireframes via Figma

<img width="838" alt="Screen Shot 2022-07-28 at 10 55 39 AM" src="https://user-images.githubusercontent.com/3982238/181594876-64f1be2b-1ecc-4931-b34a-3ff7fe578d41.png">

<img width="842" alt="Screen Shot 2022-07-28 at 10 55 51 AM" src="https://user-images.githubusercontent.com/3982238/181594922-731730eb-19f3-4427-95b1-dbd0053232f7.png">

## Reflections
- Going into this project, I didn't realize that I would not be getting full articles from the API, and instead only a snippet and a link to the full article, so it was interesting to decide how to best lay everything out. 
- I had initially considered fetching from multiple category endpoints and allowing the user to sort by category, however I decided the safer route was to start with just the top stories endpoint for MVP, which turned out to be the right choice for me given the time frame.