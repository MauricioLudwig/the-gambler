# The Gambler
A minimalistic application featuring an SPA client, API/web-socket server & an (insignificant) admin page. Namesake owed the novel written by Fyodor Dostoevsky.

### Installation
Begin by cloning, alternatively forking the repo. Proceed with the instructions outlined below. Note (!), order of installation (i.e. server then client) does not matter but is recommended in order to view the logged-in client when accessing the admin page (otherwise you must logout/login as the client again).

Run server
```
1. cd server
2. npm install
3. create a .env file at the root of the server folder. Must contain a JWT_SECRET key, value can be anything, e.g. JWT_SECRET=My secret
4. npm run dev
5. open http://localhost:3000/index.html to view admin page
```

Run client
```
1. cd client
2. npm install
3. npm run serve
```

### Fixtures - aka mock data
Registration feature does not exist, however there are two mock users you can log in as:

```
email: bulgakov@gmail.com
password: master

email: david.gemmell@gmail.com
password: druss

fixtures data located here -> ./server/src/db/fixtures.mjs
```

### Assumptions

**DB**

Although a db is not specifically requested, it is nonetheless, given the nature of the task, required for some form of storage to exist. For instance, we need to keep track of old messages/events belonging to certain users. It is equally important to gather a prefixed list of games currently available to play, not only for the user to view but also for the admin to remove. Because of this, and due to the existing time contraint, I've opted for a 'mock' db directly in the code, consisting of essentially 3 tables: games, messages and users.

**Authentication**

As mentioned above, a collection of old messages/events (as well as level progression among other things) are required in this application. The aforementioned data is retrieved immediately upon successful login. In this case I've opted for json web tokens. A secret is defined in the env variables to ensure security and (in the case of actual release) can be defined with the hosting company, for example Heroku. Although needless but following good practice, I make sure to hash the passwords before storing them in the 'mock' db.

Note the token is currently stored in the state, meaning the user is automatically logged out upon refresh of the page/application. I've not focused particularly much on this issue but a possible solution would be to use localStorage or better yet a server-side cookie.

If the server ever returns a 401 (unauthorized) a check in the router setup immediately prompts a redirect to the login page.

**Styling**

Styling is part Ant Design and part custom CSS. The styling in the application adheres to mobile first principles.

**API + Web sockets**

I've concluded that the best approach to handling data in the application is to use both API requests as well as web sockets. For instance, upon successful login, the user fetches initial data while a connection is established (from which real-time data is sent back/forth).

Whenever a client successfully logs in, the socket id is stored in the 'mock' db. This permits transmission of messages directly to the client. Upon signing out the socket id is purged from the client's record.

**Time constraint**

Unfortunately I've had to omit unit testing altogether as well as having taken some liberties with TypeScript. In case I would have managed I would have opted for Jest + React-testing-library as well as configure Eslint for even better code management.

**Minute details**

To the observant, you'll notice minute details such as no error message rendered when inserting the wrong email/password combination or hard-coded routes. Of course such bugs/malpractices are, in due time, expunged, but, for now they stand, like thorns mockingly pricking at the skin. 

### Screenshots

Login

![Alt text](/screenshots/login.PNG?raw=true "Login")

Login mobile

![Alt text](/screenshots/login-mobile.PNG?raw=true "Login mobile")

Home

![Alt text](/screenshots/home.PNG?raw=true "Home")

Home mobile

![Alt text](/screenshots/home-mobile.PNG?raw=true "Home mobile")

Admin

![Alt text](/screenshots/admin.PNG?raw=true "Admin")
