<?php

use Illuminate\Database\Seeder;
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        // start from scratch.
        Task::truncate(); 
        // And now, let's create a few tasks in our database:
        for ($kk = 0; $kk < 50; $kk++) {
            Task::create([
                'title' => $faker->sentence,
                'done'  => $faker->boolean,
            ]);
        }
    }
}
