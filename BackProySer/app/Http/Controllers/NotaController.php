<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Http\Request;

class NotaController extends Controller
{
    public function index()
    {
        return Nota::with(['curso', 'estudiante'])->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_usuario_estudiante' => 'required|exists:usuarios,id_usuario',
            'id_curso' => 'required|exists:cursos,id_curso',
            'calificacion' => 'required|numeric',
            'fecha' => 'required|date',
        ]);

        return Nota::create($request->all());
    }

    public function show($id)
    {
        return Nota::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $nota = Nota::findOrFail($id);
        $nota->update($request->all());
        return $nota;
    }

    public function destroy($id)
    {
        Nota::destroy($id);
        return response()->json(['message' => 'Nota eliminada']);
    }
}
