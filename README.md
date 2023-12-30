# Weathermom

An application designed to provide weather information to the user in a unique way, adopting the persona of a caring mother. The project was built using React (JavaScript, HTML, and CSS) + TypeScript.

## Project Status

The project is currently in development. Users can input a location to retrieve weather information using cities. Functionality to enable the selection of places, such as bars, restaurants, and nightclubs, is in progress.

## Project Screen Shots

![screenshot_1](/public/screenshot_1.png)

![screenshot_2](/public/screenshot_2.png)

![screenshot_3](/public/screenshot_3.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:5173`

## About

This was my second project built using React JS + TypeScript, and the objective was to study and familiarize myself with this framework.

I wanted to build an application using a weather API because it's free and there are plenty of options, so I chose the Open Weather API. Originally, I wanted to create an application where users could input the name of a city and get the weather data for that city. However, I'm aware that there are millions of projects like this because almost every web development learner has built one of this type of project 😁.

I started thinking about what I could do to make the app different from the others, and then I remembered my mom. She is always very careful with me, and when I go somewhere, she always asks if I've got everything, like my coat when it's cold or sunscreen when it's hot and sunny. Also, I was thinking about the name of the profession that informs people about the weather, and I found a version as "weatherman." After that, it was easy, and then I built "Weathermom," a virtual mom that tells you what you need to take based on the weather in the place you are going to.

I created two API keys, one for the Open Weather API and the other for the Google Places API.

In this project, I used different packages:

* **react-i18next** for internationalization, so the mom can write in more than one language;
* **react-icons** for the icons in the project;
* **react-loading-icons** for the loading icons in the project;
* **react-type-animation** for the typing effect in the chat between the user and the mom;
* **react-google-autocomplete** for bringing the cities based on the string typed in the input element.

I learned a lot about the React infrastructure, such as how to create my own hooks and that it is not allowed to call hooks inside other hooks, only from components.

I chose to use Vite to minimize the initial setup and invest more time in working on the project's business logic.