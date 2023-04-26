# WebProgramming-Startup
CS 260 
Github is super helpful. 
Check out notes from 260 to resolve problems

Yelp, Google Reviews, Rotten Tomatoes, IMDB. All great ways to read reviews and read about people's experiences with restaurants, movies, etc. The problem is that the only contributors to these review centered sites are biased. They have had either the best or worst experience with said product or place. Or its all lengthy columns written by critics who just didn't get enough love growing up. You get the picture. The reviews are hardly ever accurate.

Our website will be a totally new way to gauge music, TV shows, local restaurants, political views, and so much more. Utilizing a simple poll system, the site attracts the feedback from the most ordinary of people. Anyone can jump in, vote, and watch live numbers on how much people like and dislike Kanye's new release. See simple stats on local restaurants like food quality, price, convenience. Its the place for getting a sense of what people, who are just like you, think about anything. Your one-stop shop for rating life.


![IMG_0364](https://user-images.githubusercontent.com/99853592/215228985-48227197-7321-4fe0-974e-05986643e104.jpg)




Pair programmers- Tanner Montgomery and Kyle Standing




http://18.116.56.242  public IP address for my server
ssh -i [filename] umbuntu@18.116.56.242 to ssh into my server

https://kyleandtanner260.click
https://simon.kyleandtanner260.click

Tanner: things to remember from the simon project is that in order to push to a website, one has to run the deploy funciton from within its own repository. 
Tanner: Files that don't have the specific permissions will not send properly to the webstie. 


Tanner(CSS and HTML ASSIGNMENT): After finising the HTML and CSS for our startup website, I appreciate more the idea of pair-programming. I also learned the importance of being deliberate, yet creative with CSS settings and HTML designs. 


Tanner(Simon JAVASCRIPT): I learned the true important of Javascript. The java made the website so much easier to navigate, and made the game ultimately work. 

Tanner(


margin/border/padding/content
ls - list
ssh - access different computer
sudo - access with authoirty mayor to what you have. 
chmod - change mode. make something executable. 

DOM textContent - sets the child text for an element
For promises, async is needed in order to use await
CNAME creates alias

Tanner: things to remember from the simon project is that in order to push to a website, one has to run the deploy funciton from within its own repository.

Tanner: Simon-Service taught me the importance of being deliberate in assigning port numbers. 

Tanner: (SIMON-DB) make sure to include quotes around the credential to the database that you copy and paste into you database file. 

Tanner: (SIMON-Login) i learned about authtokens and how the are used to give permissions to users in order to use the website as they like. Some people can be given more access than others. 

Tanner : (SIMON- websocket) I learned that websockets are needed for peer-to-peer interaction on the web. I have never had to build an app like that, and that is something that is super interesting. 

Tanner : (SIMON - react) I learned how to reorganize the files when wanted to move everything into react. I apprecited the intricacies of the code alot more reading through the notes of how everything was done. 
## Startup Deliverable Notes 
### HTML/CSS-
Tanner: Files that don't have the specific permissions will not send properly to the webstie.  
  
Kyle: HTML and CSS are hard but can be fun and rewarding. It takes a lot of work to get a website looking exactly how you want it so I had to be patient as we worked. I learned a lot more about Bootstrap from this assignment and how exactly it works and interacts with something you are building on your own.

### JavaScript-  
Tanner: I learned how to connect my javascript code that we used to keep track of voting counts to the previous html objects that we created. It a faily intuitive process. Its super facinating seeing all of the pieces slowing coming together.  
  
Kyle: Writing code for this deliverable really bolstered my understanding and skills in JavaScript. It was cool to figure out how to inject the like and dislike counts by manipulating the DOM.


### SERVICES - 
Tanner: The services side was very complicated, yet interesting. It took alot of patience to learn how to drive the API calls to the database, but it proved to be very worthwhile. 

Kyle: I agree with Tanner's notes that the services part of this project was really complicated. However, it was really satisfying to complete our startup and implement each piece of Node to make it fully functional. I really liked the Websocket piece and also getting the Database to work properly.

Notes:
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
  
  
 notes: 
  HTTP : 80
  SSH: 22
  Https: 443
  
  200 - success
  300- content redirects or caches
  400- client error
  500 - server error
  100 - informational
  
  NPM install: 
  In short, npm install is a command used in Node.js to install packages and their dependencies from the npm registry. When you run npm install <package-name>, npm will look up the package in the registry and download its files to your local machine. If the package has any dependencies, npm will also download and install them. Once the installation is complete, the package and its dependencies will be available for use in your Node.js project.
  
  
  
  Standard HTTP Header
Request method: This specifies the HTTP method used by the client in the request, such as GET, POST, PUT, DELETE, etc.

Request URL: This is the URL of the resource that the client is requesting.

Status code: This is a three-digit number sent by the server in response to a client request to indicate the status of the request, such as 200 OK, 404 Not Found, 500 Internal Server Error, etc.

Content type: This specifies the format of the content being sent in the request or response, such as text/html, application/json, image/png, etc.

Cache control: This header tells the client and any intermediaries (e.g. proxies) how to cache the response.

User-Agent: This identifies the client software making the request, such as a web browser or a mobile app.

Cookie: This is used to send and store small amounts of data on the client side that can be used to maintain state between requests.

Authorization: This is used to include authentication information in the request headers, such as a token or a username and password.
