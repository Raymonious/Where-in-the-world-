# Where in the world?!

### TODO before deadline
- A link to deployed/running app. You can deploy the app on HerokuLinks to an external site., FirebaseLinks to an external site., or any other server that anybody can easily access when doing the review. Setup this as soon as possible as it takes time and if you start just before the deadline you might be late.

https://group-33-project.web.app/index.html

- A link to your git repository

- A README file (in English) in your Git repository detailing:

- Short description of your project

Welcome to our Where in the world?! Guess the country based on the random fact presented to you about the country. You get 5 tries, and each wrong answers reveals another guess. Try to build as long a streak as possible! 

### What you have done
- [x] Implement the navigation bar, home page, actual guessing page, result page after each round as well as the favorite countries page and details page for each country. 
- [x] Integrate Firebase into the app to persist data and achieve live-update (no user-specific functionality yet). 
- [x] Integrate two APIs and display data from both of them, but the fact API is not fully working as planned. 
- [x] Design "model" for the game using recoil to keep track of the states. 

### What you still plan to do

- [ ] Implement a router between the different pages, currently they are all stacked on top of each other. 
- [ ] Fix the API issues. Currently, the API only returns 1 fact per country, despite it making multiple different calls. However when using curl, the api functions as intended. 
- [ ] Implement a difficulty aspect to the game. 
- [ ] Implement a login page and as such update the persistance atoms in order to save data on a per-user basis. 
- [ ] Improve UI/Ux design. 
- [ ] Improve code readability and clean up duplicate atoms. 


### Your project file structure (short description/purpose of each file)


The "asset" folder in src is left from the creation of the skeleton of the project. The files within the "game" folder hold the presenter and view of the actual game page of the project. The "model" folder contains two files, one with recoil atoms which are not persistant and one with persistant atoms. The files are named accordingly. Inside the react folder, the presenters for the other (finished) parts of the project are located. Favdetailspresenter will display the facts from a country located in the favorite list. Favoritepresenter is the presenter which displays all the countries which the user would like to keep in their favorite country list. Home presenter displays the home page of the app. Lastly, resultpresenter shows the page which comes up after finishing a round, either guessing the correct country or guessing wrong 5 times. The files withing the view folder are the view part of their respective presenters. App.css contains some styling for the webpage however it is far from done and contains a lot of styling which is not used or was used in the skeleton code. App.jsx is the file ties all the presenters together and gets renderd to the root div. countrySource.jsx is the file that handles the api calling as well as getting the target country. This will later take the difficulty into consideration. Index.css is also left from the creationg of the skeleton code. main.jsx renders the app into the root div (bootstrapping). sidebarPresenter and sidebar view are the files for the navigation bar at the top of the page. Teacherfetch will be used with the api to ensure that we don't infinite fetch. Testview and presetners are not used in the project and only served as a pointer for us on how to use the recoilstate.


### Your projects are naturally at various stages of completeness, but the minimum we expect that you have by deadline is:


- that you have setup the basic framework code (e.g. the skeleton)

- have initial layout of your app

- showing the data from at least one API call
