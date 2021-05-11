# MyMizu-neptune

This is a team project created during our study in Code Chrysalis in collaboration with MyMizu, a Tokyo based non-profit startup. 

> mymizu と提携して、社会貢献を元に行なっているアプリに、mymizu が今まで達成してきたことを拡大または強化することを通して、もっと注目を集めたり、環境保全をより追及できるような機能（ルート検索やレーティング）を実装。

MyMizu provides a crowd-sourced platform for locations where you can get water with your water bottle to encourage users to consume less bottled water. We've created an app prototype with following enhanced features. Users can review on water refill spots and find a route with water refill spots around.

You can access the deployed app from the following link:
https://mymizu-neptune.herokuapp.com/main 
_(Accessible from desktop or mobile.)_

## User Story and Clickstream

> ユーザーはピンをクリックしてその場所の情報がわかる。また、行きたいルートを検索できる。そしてそのルートの近くの給水所がわかる。その給水所の評価やコメントもできる。

As a user, one can click the pin where a water refill spot is and give ratings and comments to the spot. Also, one can find a route and with water refill spots around.

#### Clickstream 1:

1. Click on a pin to view the water refill spot's detail
3. Click on **給水を記録** (log refill here) button
4. Give a rating stars and comment if any
5. Click on **給水を記録** (log refill here) button again to save the result

#### Clickstream 2:

1. Click on **ルート** (route) button on the footer function list
2. Input location in **From** and **To**
3. Click on **Search** button
4. A route and water refill spots nearby will be displayed

## Tech Stack
<img width="778" alt="Screen Shot 2021-05-11 at 11 02 16" src="https://user-images.githubusercontent.com/34878933/117747038-6c579280-b248-11eb-8dfe-c7a931ceed0b.png">

* Front-end
  * React.js
  * react-google-maps API (https://www.npmjs.com/package/@react-google-maps/api)
  * Bootstrap
* Back-end
  * Node.js
  * Express.js
  * Knex.js
  * PostgreSQL
* Data and APIs
  * Google maps: Map marker, Geocoding, Route planning  
  * MyMizu: water refill spot info
* Deployment and CI/CD collaboration
  * Heroku
  * Github
  * Slack

## Sample Screens
<img width="300" alt="scr1" src="https://user-images.githubusercontent.com/34878933/117744316-68754180-b243-11eb-92c3-b65d18f2db6e.PNG">
<img width="300" alt="scr2" src="https://user-images.githubusercontent.com/34878933/117744337-71661300-b243-11eb-8d17-1f0303ac29cf.PNG">
<img width="300" alt="scr3" src="https://user-images.githubusercontent.com/34878933/117744349-75923080-b243-11eb-9033-2197b3bdd888.PNG">
<img width="300" alt="scr4" src="https://user-images.githubusercontent.com/34878933/117744353-788d2100-b243-11eb-86f0-8172f175a7e4.PNG">


