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
Schema::create('cursos', function (Blueprint $table) {
    $table->id('id_curso');
    $table->string('nombre');
    $table->text('descripcion')->nullable();
    $table->foreignId('id_usuario_profesor')->constrained('usuarios', 'id_usuario');
    $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cursos');
    }
};
