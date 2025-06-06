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
Schema::create('entregas_tarea', function (Blueprint $table) {
    $table->id('id_entrega');
    $table->foreignId('id_tarea')->constrained('tareas', 'id_tarea')->onDelete('cascade');
    $table->foreignId('id_usuario_estudiante')->constrained('usuarios', 'id_usuario')->onDelete('cascade');
    $table->string('archivo');
    $table->timestamp('fecha_entrega');
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entregas_tarea');
    }
};
