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
Schema::create('asistencias', function (Blueprint $table) {
    $table->id('id_asistencia');
    $table->foreignId('id_usuario_estudiante')->constrained('usuarios', 'id_usuario');
    $table->foreignId('id_curso')->constrained('cursos', 'id_curso');
    $table->date('fecha');
    $table->enum('estado', ['presente', 'ausente', 'justificado']);
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asistencias');
    }
};
