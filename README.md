# emberjs-laravel-mysql-todo
## Description
Todo list with basic CRUD functionality, using [EmberJS](https://emberjs.com), [Laravel](https://laravel.com) and [MySQL](https://www.mysql.com).

## How to run on localhost (Windows)
 1. In the "server" folder, copy the file .env.example and rename it to ".env".
 2. Inside the .env file, update the MySQL credentials (DB_DATABASE, DB_USERNAME and DB_PASSWORD) and/or port number as needed.
 3. Open a new terminal window in the root folder and enter the following commands:
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
 4. Open http://localhost:8000 in your browser of choice.
 5. Enjoy!
