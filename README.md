# The Shoppies

My submission for the Frontend developer intern position at Shopify for Fall 2021

## Tech

- React 17
- Axios for API requests
- Lodash for array manipulations and debouncing
- Chakra UI (framer built in) as a component library with animations

## Features

- Search OMDB for movies
- Nominate Movies
- View nominated movies
- Remove nominated movies
- All the technical requirements on the Google Doc basically

## Added Features

- Search results are paginated so you can see all results that match text (Still only grabs 10 movies at a time from the API)
- Live search toggle (Search using search button or have results update as you type)
- Search is debounced for 300ms so users can't spam the API
- View more about a movie by clicking the info button next to it (Genres, Actors, Poster, etc...)
- Nominations are stored in Local storage so they persist
- Animations for actions (add movie, search, next page, etc...)
- Notifications when adding/removing nominations

## Bugs

- None, I'm a god
- (Probably some I haven't discovered but I tried to be as extensive as possible while testing)

Thanks for looking at my application :)
