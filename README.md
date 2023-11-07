# Weathermom

An application used to inform about weather data to the user in a different way, as it is a caring mother. The project was built using React (JavaScript, HTML and CSS) + TypeScript.

## Project Status

Project in currently development. Users can input the place to get the weather information using cities. Functionality to be possible to select places instead of cities, like bars, restaurants, night clubs in progress.

## Project Screen Shots

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:5173`

## About

This was my second project built using React JS + TypeScript and the objective was to study and familiarizing myself with this framework.

I wanted to to build an application using some weather API because it's free and there are plenty of options, so I choosed the Open Weather API. Originally, I wanted to create an application where users could input the name of some city and get the result of the weather data about that city. However, I know that there are millions of projects like this because almost every web development learner built one of this type of project 😁.

I started thinking about what I could do to make the app different from the other ones and then I remembered my mom. She is always very careful with me and when I go to some place she always ask me if I got everything, like my coat when it is cold or suncream when it is hot and sunny. Also, I was thinking about the name of the profession that tell the people about the weather and I found a version as "weatherman". After that it was easy and then I built "Weathermom", a virtual mom that tells you about what you need to take to the place you are going to, based in the weather in that place.

I created two API keys, one for the Open Weather API and the other one for the Google Places API.

In this project I used different packages:

* **react-i18next** for internationalization, so the mom can write in more than one language;
* **react-icons** for the icons in the project;
* **react-loading-icons** for the loading icons in the project;
* **react-type-animation** for the typing effect in the chat between the user and the mom;
* **react-google-autocomplete** for bringing the cities based on the string typed in the input element.

I could learn a lot about the React infrastructure as how to create my own hooks and that it is not allowed to call hooks inside other hooks, only from components.

I chosed to use Vite to minimize initial setup and invest more time in working in the project business logic.