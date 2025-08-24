# elemento_task
----/elemento_task/backend----
Instalacija dependencija: composer install
Kopiranje .env fajla: cp .env.example .env
Generiranje application key-a: php artisan key:generate
Podesite bazu u .env fajlu, primjer za MySQL:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=elemento_task
DB_USERNAME=root
DB_PASSWORD=lozinka
Pokrenite migracije:php artisan migrate
Pokrenite lokalni server:php artisan serve

Laravel backend će biti dostupan na: http://127.0.0.1:8000

----/elemento_task/frontend----
Instalacija dependencija: npm install
Pokretanje dev servera: npm run dev

Frontend će biti dostupan na: http://localhost:5173
