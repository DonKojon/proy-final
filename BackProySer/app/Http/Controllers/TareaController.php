<?php

namespace App\Http\Controllers;

use App\Models\Tarea;
use Illuminate\Http\Request;

class TareaController extends Controller
{
    public function index()
    {
        return Tarea::with('curso')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required',
            'id_curso' => 'required|exists:cursos,id_curso',
            'fecha_entrega' => 'required|date',
        ]);

        return Tarea::create($request->all());
    }

    public function show($id)
    {
        return Tarea::with('entregas')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $tarea = Tarea::findOrFail($id);
        $tarea->update($request->all());
        return $tarea;
    }

    public function destroy($id)
    {
        Tarea::destroy($id);
        return response()->json(['message' => 'Tarea eliminada']);
    }
}
