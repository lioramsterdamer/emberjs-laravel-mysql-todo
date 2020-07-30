# emberjs-laravel-mysql-todo
## Description
Todo list with basic CRUD functionality, using [Ember](https://emberjs.com), [Laravel](https://laravel.com) and [MySQL](https://www.mysql.com).

## How to run on localhost (Windows)
 1. Make sure you have [PHP](https://php.net), [Node.js](https://nodejs.org), [Composer](https://getcomposer.org), [Ember](https://emberjs.com) and a [MySQL](https://www.mysql.com) server installed on your computer.
 2. In the "server" folder, copy the file .env.example and rename it to ".env".
 3. Inside the .env file, update the MySQL credentials (DB_DATABASE, DB_USERNAME and DB_PASSWORD) and/or port number as needed.
 4. Open a new terminal window in the root folder and enter the following commands:
 ```sh
 $ cd client 
 $ npm install
 $ ember build
 $ cd ../server
 $ composer update
 $ php artisan migrate
 $ php artisan db:seed --class=TasksTableSeeder
 $ php artisan key:generate
 $ php artisan serve
 ```
 5. Open http://localhost:8000 in your browser of choice.
 6. Enjoy!
