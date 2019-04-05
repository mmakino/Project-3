# Liquid Assets

### Background: Bar Inventory
* Taking bar inventory is a long daunting task
* Measurement of liquor is often inaccurate
* Inventory tracking is important for profitability

### Our Goals & Motivations
* Develop an app to take bar inventory easier
* Improve accuracy of remaining liquor measurement
* Produce meaningful reports to help bar business profitability

## Prerequisites
  * Local development installation
    * Node.js https://nodejs.org/
      * npm -- should come with Node.js installation
    * MySQL server needs to be up and running with all CRUD priviledges.

## Quick Start

1. Clone the repository
    ```
    git clone git@github.com:jenaym/Project-3.git
    cd Project-3
    ```

2. Install dependencies
    ```
    npm install
    npm install -g nodemon sequelize-cli
    ```

3. Run `server/db/sql/schema.sql`

4. Edit `config/config.js` and adjust database configurations.

5. Create a `.env` file and add the following settings
    ```
    DB_PASSWORD=<your database password for MySQL>
    JWT_KEY=<your secret key string>
    ```

6. Run migration and seeding
    ```
    sequelize db:migrate
    sequelize db:seed:all
    ```

7. Launch Project-3
    ```
    npm start
    ```

### Troubleshooting

* To undo a migration or seeding, run the following:
    ```
    sequelize db:migrate:undo:all
    sequelize db:seed:undo:all
    ```

## Deployment
* Live app on heroku
  * Current version: https://tranquil-meadow-47203.herokuapp.com/

## Built With

* [Node.JS](https://nodejs.org/)
* [Express](http://expressjs.com/)
* [React](https://reactjs.org/)
* [MySQL](https://www.mysql.com/)
* [MATERIAL-UI](https://material-ui.com/)
* [React Autosuggest](https://react-autosuggest.js.org/)
* [Redux](https://redux.js.org/)

## Authors
* [__Nate__](https://github.com/nholdsworth) 
* [__Grant__](https://github.com/jgrantlyons)
* [__Neri__](https://github.com/xoamara)
* [__Jenay__](https://github.com/jenaym)
* [__Moto__](https://github.com/mmakino)

