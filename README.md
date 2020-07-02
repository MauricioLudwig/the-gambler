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
...

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