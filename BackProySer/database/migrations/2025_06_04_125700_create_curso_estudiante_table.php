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
Schema::create('curso_estudiante', function (Blueprint $table) {
    $table->foreignId('id_curso')->constrained('cursos', 'id_curso')->onDelete('cascade');
    $table->foreignId('id_usuario_estudiante')->constrained('usuarios', 'id_usuario')->onDelete('cascade');
    $table->primary(['id_curso', 'id_usuario_estudiante']);
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('curso_estudiante');
    }
};
