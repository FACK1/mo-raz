# FAC Revs

**The Link of website**: [FAC Revs](https://facrevs.herokuapp.com/)


## User Stories
*As a FACK1 student...*
> I can leave a review/feedback about the course

> I can see other students' reviews

*As a visitor on the site...*

> I can see the students in FACK1

>  I can see the FACK1 student reviews


## File Structure 
```
- Public
       |__index.html
       |__Js
              |_ main.js
              |_dom.js
       |__ css
              |_ styles.css
              |_ resets.css
- Src
     |__ database
              |_ db_build.sql
              |_ db_bulid.js
              |_ db_connection.js
    |__ queries
              |_ getData.js
              |_postRevs.js
    |__ server
              |_ server.js
              |_ router.js
              |_ handler.js
    |__ test
              |_ routes_test.js
              |_ db_test.js
- gitignore


## Schema database
![screenshot from 2018-12-05 19-11-49](https://user-images.githubusercontent.com/41734542/49532305-e25fae80-f8c4-11e8-9352-f33de2682110.png)


 ## How to run our site on your machine?
 - Clone this repo(https://github.com/FACK1/mo-raz.git).
 - Open your command line.
 - Put in terminal **npm install**.
 - Then put in terminal  **npm run nodemon** to run the server.
 - Open your browser and put in terminal **localhost:8001**.
 
 ## CI Test

 ## Team Members:
    - [Mohammad Al-Sharif](https://github.com/mhmdtshref)
    - [Razan Tayyem](https://github.com/razantayyem)

- config.env
```

