# Account Service

### Purpose
This is the first step of a change in Priston Tale Architecture.
My goal with this service is:
* Possibility of starting a server in a home computer without the need of SGDB. Dev Environment could use SQLite.
* Capability of have a Database Server physically separated from the World Server.
* A central point to authenticate login. The game, panel, app mobile and whatever other client you can think about would use this route to be authenticated.
* BREAK THE MONOLITHIC ARCHITECTURE

<br />

### Install
* git clone git@github.com:leomachado73/AccountService.git
* npm install
* npm install -g nodemon
* npm install -g sequelize-cli
* npm run prod
* npm run seed-all-prod


<br />

#### Usage
How can I use this service?
Click [here](https://github.com/leomachado73/Authentication) and find out.
<br>
<br>
<br>
#### Docs
Inside docs folder there's a json to be imported in [Insomnia](https://insomnia.rest/).
I'll try out Swagger ASAP.

<br />

#### Tests
I'd appreciate some help here ;)

<br />

#### Notes
I haven't been using NodeJs for a while ( almost an year ), so if you've got any knowledge in this technology do not hesitate to help **us**.

<br />

## Database Model
![alt text](https://i.imgur.com/llxzzZn.png)
