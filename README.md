# Mokko - oil paintings exhibition teaser

install: npm i  
run: npm start

## Prologue

A static landing page with information about an exhibition of my friend. Including paintings, and their description.

Features and stack:  
React Router | Context API | React Vite

## The core

As it is a static page, all images are put into a 'public' folder so it is easy to access them dynamically. All information about each painting is stored in separate objects.  
The tricky part was a modal window, and how to browse images in it. As they are stored in 4 sections I build an URL with search queries including the folder and name of a currently displayed painting.

## Header:

Nothing spectacular here. Just some basing info about the exhibition.

## Main content:

The main part is taken by a grid of cards with painting details. Clicking on any of the images builds an URL with a proper query containing the section name and painting title, allowing me to display the image in a bigger size.

## Internationalization.

There is one coming.

## RWD.

The page is 80rem at its widest, so RWD is mostly about switching between 4 and 2 grid columns.

## Modal

As mentioned above it was a tricky one for me because of images spread among 4 different sections. It reads the URL, withdraw a folder and a filename from it, and finds a proper image in a large size to display.  
One missing step here is handling a swipe gesture in some nice way.
