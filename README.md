# Github portfolio

![Frontpage](https://github.com/EvaZ7/project1/blob/0acb66c0cc566a042146327309a7c7e2b0537d71/images/home.png)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![license: mit](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/EvaZ7/Blok-tech/blob/main/LICENSE)
[![stars](https://img.shields.io/badge/stars-0-9cf?style=flat-square)](https://github.com/EvaZ7/Blok-tech/stargazers)

With this web-app, you have access to all my github repos in an portfolio form. It provides a list with all the repositories, their descriptions and links to their homepage. I also recreated my profile on my home page. Together it creates an awesome portfolio website!

## Contents 📑

- [Use it?](https://github.com/EvaZ7/project1#use-it) What is it all about and how does it work?
- [Install it](https://github.com/EvaZ7/project1#install-it) How do I start? How do I use it?
- [The Data](https://github.com/EvaZ7/project1#the-external-data-source) A Github API
- [Wishlist](https://github.com/EvaZ7/project1#wishlist) ...
- [Author](https://github.com/EvaZ7/project1#author) This project is made by...
- [Help](https://github.com/EvaZ7/project1#help) Where do I find help?
- [Progress](https://github.com/EvaZ7/project1#progressin-dutch-) Yes I wrote it in Dutch🇳🇱, shoot in an issue.
- [Sources](https://github.com/EvaZ7/project1#sources) APA list with used sources.

## Use it

You can use this project to display your github repositories for your users. But you can also use it to sort and fetch data from an API, it has different section that each provide a different way of displaying the data variating from very controlled to putting it all in a list. You can use it also for a more detailed project, or just use the github api layout as a building block for your application.

## Install it

It is made in vanilla JavaScript with an API. Because of the API you will need to have access to it first. In order to do so:
1. You have to create and account on [API-Ninjas](https://api-ninjas.com/)
2. Then you will need the API link, which is: [this link](https://api.api-ninjas.com/v1/quotes?category=amazing)
3. Add your personal API-key to the link, the key can be found on your personal API-Ninjas account.

## The external data source

The data source gives you tons and tons of different quotes, the API of API-Ninjas has a built-in randomizer that gives you up till 10 different quotes every time you refresh it. It also gives you an author name and a category within the string. You can change the category of the API very easily by just changing it within the link. There are tons of different categories to choose from!

The data source gives you all the information about your Github repositories, from the license you used till the stargazers count. It also given you links to different parts of your github profile or a part of your repository. You can manipultate the lnk so you can also view your profile data instead of all the ropsitories, this gives you more data instead of the "owner" data in the repositories. Also you dont need an API key to use it.

## Wishlist

- Light mode
- Copy to clipboard clone function
- More data on the homepage

## Author

Credits to me, Eva Zaadnoordijk (500847567) 2023 for Communication and Multimedia Design at the Amsterdam University of Applied Sciences.

## Help

Are some parts still a bit confusing? Feel free to contact me at:
_eva.zaadnoordijk.zaadnoordijk@hva.nl_

----

## Progress(in Dutch 🇳🇱)

Ik heb voor de de "Quotes" user story gekozen. De Case die ik heb gekozen is de quotes, de userstory gaat als volgt:

**Als student digital design, wil ik inspirerende web design quotes kunnen bekijken, zodat ik weer een beetje energie krijg wanneer ik het even niet meer zie zitten met al die hard-core deadlines die op me afkomen.**

### Ideeën

*Mijn idee is om een web app te maken met een daily quote, een overzicht van alle quotes met een sorteerfunctie en een overzichtje van quotes per auteur.*

### Schetsen

![breakdownschets 1](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/breakdown1.jpeg)

![features](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/interacties.jpeg)

### Process

- Als eerste heb ik deze week de data ingeladen vanuit de API, dit ging vrij gemakkelijk.
- Ik heb een idee bedacht op basis van de data.
- Ik heb een wireframe gemaakt van mijn idee en hier vervolgens een breakdown schets van gemaakt met toelichting.
- Ik heb schetsen gemaakt van mijn features.
- Ik heb een setup gemaakt van mijn HTML.

### Ideeën

*Mijn idee is om een web app te maken met een dagelijkse quote, een overzicht van de 10 quotes uit de array van de categorie "Amazing" met een sorteerfunctie en een overzichtje van een quote per auteur met iconen.*

### Schetsen

Ik heb schetsen gemaakt van de verschillende states met wat annotaties.
![loadingstate](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/loadingstate.jpeg)
![errorstate](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/errorstate.jpeg)

ik heb een hifi prototype/ ontwerp in XD gemaakt.
![hifi ontwerp](https://github.com/EvaZ7/Quotes/blob/17738ddd78bcb964d1135e4672aa5c5945a735b1/readmeimg/errorstate.jpeg)


## Sources

- https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/
- https://api-ninjas.com/
- Copyright (c) 2021 Communication and Multimedia Design, Amsterdam University of Applied Science
