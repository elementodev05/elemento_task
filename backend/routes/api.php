<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;

Route::get('/hello', function () {
    return response()->json([
        'message' => 'Pozdrav! Tvoj zadatak za ovaj test je sljedeći:',
        'task_instructions' => [
            "Backend: Dodaj novu tablicu 'people' s osnovnim atributima (ime, prezime...). Napravi Eloquent model i migraciju.",
            "Frontend: Kreiraj komponentu za unos i prikaz osoba (/people endpoint), stilski identičnu postojećoj formi za prikaz i unos projekata.",
            "Projekti: U formi za unos projekta dodaj multiselect za odabir osoba iz tablice 'people'. Odabir barem jedne osobe je obavezan. Pored multiselect polja dodaj gumb 'Create new person' koji vodi na /people u novom tab-u.",
            "Git: Pushaj gotov zadatak na svoj branch.",
            "Bonus zadatak: U README opiši kako bi odradio deploy ove aplikacije na produkcijski server (npr. Hetzner VPS preko Laravel Forge). Sretno!"
        ]
    ]);
});


Route::get('/projects',  [ProjectController::class, 'index']);
Route::post('/projects', [ProjectController::class, 'store']);
