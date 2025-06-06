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
Schema::create('notas', function (Blueprint $table) {
    $table->id('id_nota');
    $table->foreignId('id_usuario_estudiante')->constrained('usuarios', 'id_usuario');
    $table->foreignId('id_curso')->constrained('cursos', 'id_curso');
    $table->decimal('calificacion', 5, 2);
    $table->text('observacion')->nullable();
    $table->date('fecha');
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notas');
    }
};
