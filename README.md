# Toolshed

Objective - create an app that neighbors can log on to and list the tools that they have that their neighbors can borrow.  Their neighborhood can look at a neighborhood created for them that lists all the tools available for them to borrow.

[Here is the published project.](http://toolshed.surge.sh/)

[Here is the frontend repository.](https://github.com/xjeffss/toolshed-frontend/tree/main/toolshed-frontend)

[Here is the backend repository.](https://github.com/xjeffss/toolshed-backend)

## Tools Used

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/5D0BA7CF-A86C-411F-AD9B-ED697C1478D8.png?raw=true">


## Planning

I put together a Powerpoint to plan what I wanted the website to look like and an ERD to plan how it would interact.

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/3E3BC721-B835-4EA3-83D7-617CA72C748E.png?raw=true">

This is the user page with future goals of tracking lending to your neighbors.

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/ECE3796B-8379-46A6-B2D7-625B24F785F1.png?raw=true">

## User stories
* A neighbor doesn't want to buy a tool to use once every three years
* A neighbor has bought a tool that he has only used once in 3 years and would not mind if someone borrowed it
* A neighbor does not want to make a huge purchase of a tool that he only needs on time
* A neighbor wants to borrow tools from his neighbors but needs to know what tools are available and close to lend

## Challenges
* Getting the join tables to connect and display joined data
* Floating CSS styling
* Locating and passing data from the DB between pages

## Summary
This website was the result of a question I asked to people around me, "What website do you wish existed?"  The most intriguing answer was about a website where neighbors could display to their neighbors what tools they had that were available to them for loan. This drove the MVP and MVP ++ requirements below.

## MVP 
* Create User
* Login 
* Create Neighborhood with passcode
* Add Tools to your use profile that register to neighborhoods of which you are member
* Display all users and tools that are members of a neighborhood

## MVP ++
* Log to whom the tool was lent and confirm when it has been returned
* Be able to list only certain categories of tools to each neighborhood
* Be able to post requests on your Neighborhood page that email neighbors when someone posts

This was the original login screen.  The image was created by Charles Brisbee on Code Pen.  I studied his work and made modifications to make it look like the second picture.

<img src="./toolshed-frontend/public/images/91A01B82-B2B5-4AF5-B4E5-2346E0A5739E.jpeg">

The original point of the house was created using angled blocks colored as the background to cut the top corners off a large yellow rectangle.  I changed this to make the house a square below the roof line and adding a triangle on top to match the roof line. 

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/B1F6332E-359A-4CB0-AB93-52ED5D0D7B0C.png?raw=true">

Once the user registers or logs in, it takes him to his "toolshed" page where an opening garage door reveals a list of his tools and neighborhoods of which he is a member.

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/C60470FE-282C-46A9-AF41-41CF078FDA8B_1_105_c.jpeg?raw=true">

This is where the user will add or delete tools to his shed that will also appear in the neighborhoods where he is a member.  He can also create, join and leave neighborhoods.  Clicking on the nieghborhood name will take you to the neighborhood where all the tools are displayed.

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/Screen%20Shot%202021-04-07%20at%208.21.06%20AM.png?raw=true">


<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/Screen%20Shot%202021-04-07%20at%208.18.54%20AM.png?raw=true">

Getting all the neighbors and tools to display forced a deep understanding of (and experimenting with) join tables.  My original method would write each user and their tools separately, then overwrite them when writing the next neighbor and their tools leaving only the last neighbor's information visible.  I found that I was able to run a queary in postgres that produced the data I was looking for, so I knew it was possible with the way the database and table interactions were currently set up.

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/BF51B923-A289-436C-A2F8-80EFC4B7C518_4_5005_c.jpeg?raw=true">

As I experimented with the backend repository, I found a combination of belongsTo/belongsToMany/hasMany/hasOne through all the models would return the neighborhood name, all the users that were a member of that neighborhood and their tools in one block of returned data. I originally was querying for a "Neighborhoods" or "Tools" model (table) and trying to include other models but that wouldn't bring in all the data.  Finally I was able to queary the "Users" model and gather all the users, tools and neighborhoodName associated with a specific neighborhood (seen on the right below) and display them on the browser Neighborhood page.

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/4E52DC53-7405-4548-8083-E8972695B75E_1_105_c.jpeg?raw=true">

This was the queary that worked

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/Screen%20Shot%202021-04-07%20at%208.13.58%20AM.png?raw=true">

and how it is requested, retrieved and displayed

<img src="https://github.com/xjeffss/toolshed-frontend/blob/main/toolshed-frontend/public/images/Screen%20Shot%202021-04-07%20at%208.16.57%20AM.png?raw=true">

<img src="">

## Future work planned:

* Login Token - remembers the log in until page closure or log out.  Important so that when a tool or neighborhood is created, the page can be refreshed and not lose track of the user.
* Hot links to the home page or user page.
* Password and Passcode encryption.

