<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');                         // npr. naziv projekta
            $table->text('description')->nullable();        // opis
            $table->enum('status', ['planned','active','completed'])->default('planned');
            $table->date('deadline')->nullable();           // rok
            $table->decimal('budget', 12, 2)->nullable();   // proračun
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('projects');
    }
};
