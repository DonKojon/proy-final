<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $usuario = Usuario::with('role')->where('email', $request->email)->first();

        if ($usuario && $usuario->pass === $request->pass) {
            return response()->json(['usuario' => $usuario]);
        }

        return response()->json(['error' => 'Credenciales incorrectas'], 401);
    }
}
