# Vo Ho An Khang

## Install
- Open folder server by VSCode.
- Open VSCode's terminal and type command "npm install" to install all packages.
- Use "npm start" to run server
- Similar to the client folder

## Tasks completed

Frontend:
- A post on homepage should display the basic information as below
    + Author.
    + Created date (fake it).
    + Title.
    + Content summary - 100 first characters of the content.
    + Comments will be collapsed by default, display the count of the comments for each post.
    + Click on comment, the comments section will be expanded and render all post's comments.
    + User can search for a post with a given keywords (title).
    + Post detail page.
-  Technical requirements
    + Pagination.
    + All EXTERNAL-APIs must be called from Back-end side.
    + Use redux for state management.
    + Use redux-saga to call your Node-API.
    + Use redux-persist to persist data.
    + You should have a route for each page.
    + All posts must be saved in local storage or persisted within redux.
Backend:
- Implement the following APIs.
    + All EXTERNAL-APIs must be called from Back-end sidePost APIs (Must have)
    + Server Structure must be MCV (per module) and well structured
- Additional requirements
    + All APIs should be RESTful (Mandatory for ExpressJS)
    + API should have a well design
- Additional information
    + You can use pre-defined json data as a reference
    + NodeJS & ExpressJS boilerplate or other is accepted
