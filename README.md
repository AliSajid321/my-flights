# README

Welcome to My flights. An app that allows you to write reviews on different American Airlines. The backend is designed in Rails 6 and the frontend in React.

Prerequistes:

* Ruby version: 3.0.4
* Rails: 6.1.6.1
* Database: Sqlite3

Running Locally:

* Install dependencies ``` bundle install ```

* Migrate database ``` rails db:migrate ```

* Database initialization with seed data ``` rails db:seed ``` 

* Start the server ``` rails s ```


Troubleshoot Webpack issue:

* Webpacker::Manifest::MissingEntryError in Pages#index

If you come across this error when trying to run the server then stop the server and run the command ``` yarn add @rails/webpacker ``` followed by ``` rails webpacker:install ``` to resolve the issue. The server should start properly now.

* ...
