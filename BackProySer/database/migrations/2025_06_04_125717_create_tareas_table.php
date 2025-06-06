<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
Schema::create('tareas', function (Blueprint $table) {
    $table->id('id_tarea');
    $table->string('titulo');
    $table->text('descripcion')->nullable();
    $table->date('fecha_entrega');
    $table->foreignId('id_curso')->constrained('cursos', 'id_curso');
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tareas');
    }
};
