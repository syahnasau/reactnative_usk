<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Product;
use App\Models\Role;
use App\Models\Transaction;
use App\Models\User;
use App\Models\UserTransaction;
use App\Models\Wallet;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Role::create([
            "name" => "admin",
        ]);
        Role::create([
            "name" => "kantin",
        ]);
        Role::create([
            "name" => "bank",
        ]);
        Role::create([
            "name" => "siswa",
        ]);

        Category::create([
            "name" => "minuman"
        ]);
        Category::create([
            "name" => "makanan"
        ]);
        Category::create([
            "name" => "pakaian"
        ]);

        User::create([
            "name" => "raya",
            "password" => "123",
            "roles_id" => 1,

        ]);
        User::create([
            "name" => "iksan",
            "password" => "678",
            "roles_id" => 2,

        ]);
        User::create([
            "name" => "rizki",
            "password" => "999",
            "roles_id" => 3,

        ]);
        User::create([
            "name" => "rapael",
            "password" => "890",
            "roles_id" => 4,

        ]);
        User::create([
            "name" => "faris",
            "password" => "345",
            "roles_id" => 4,

        ]);

        Product::create([
            "name" => "lemon ice tea",
            "price" => 5000,
            "stock" => 100,
            "desc" => "lemon es lemon",
            "photo" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzjtQz9C1BGyA8_XZD0fXxJEEi2QlZV5Udw&usqp=CAU",
            "categories_id" => 1,
            "stand" => 2,
            "created_at" => "2023-10-25 01:50:58"
        ]);
        Product::create([
            "name" => "bakso",
            "price" => 10000,
            "stock" => 50,
            "desc" => " bakso bakso",
            "photo" => "data:image/jpeg;base64,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",
            "categories_id" => 2,
            "stand" => 1,
            "created_at" => "2023-10-25 01:50:59"
        ]);
        Product::create([
            "name" => "risol",
            "price" => 2000,
            "stock" => 15,
            "desc" => "risol risol",
            "photo" => "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNZUgmBtJvilNEyhmkYY_UUpkkLiUOltUGA&usqp=CAU",
            "categories_id" => 3,
            "stand" => 4,
            "created_at" => "2023-10-25 01:50:51"
        ]);

        // Wallet::create([
        //     "users_id" => 4,
        //     "credit" => 100000,
        //     "debit" => NULL,
        //     "status" => "selesai"
        // ]);
        // Wallet::create([
        //     "users_id" => 4,
        //     "credit" => NULL,
        //     "debit" => 15000,
        //     "status" => "selesai"
        // ]);

        // Transaction::create([
        //     "users_id" => 4,
        //     "products_id" => 1,
        //     "status" => "dibayar",
        //     "order_code" => "INV_12345",
        //     "price" => 5000,
        //     "quantity" => 1
        // ]);
        // Transaction::create([
        //     "users_id" => 4,
        //     "products_id" => 2,
        //     "status" => "dibayar",
        //     "order_code" => "INV_12345",
        //     "price" => 10000,
        //     "quantity" => 1
        // ]);
        // Transaction::create([
        //     "users_id" => 4,
        //     "products_id" => 3,
        //     "status" => "dibayar",
        //     "order_code" => "INV_12345",
        //     "price" => 3000,
        //     "quantity" => 2
        // ]);

        // UserTransaction::create([
        //     "user_id" => 4,
        //     "transaction_id" => 1,
        // ]);
        // UserTransaction::create([
        //     "user_id" => 4,
        //     "transaction_id" => 2,
        // ]);
        // UserTransaction::create([
        //     "user_id" => 4,
        //     "transaction_id" => 3,
        // ]);
    }
}
