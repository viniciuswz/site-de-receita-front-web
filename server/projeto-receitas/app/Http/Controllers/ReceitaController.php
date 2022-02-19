<?php

namespace App\Http\Controllers;

use App\Models\Receita;
use Illuminate\Http\Request;

class ReceitaController extends Controller
{
    public function __construct (Receita $receita)
    {
        $this->receita = $receita;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $receitas = Receita::all();
        return $receitas;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->receita->rules(), $this->receita->feedback());

        $receita = $this->receita->create([
            'titulo' => $request->titulo,
            'imagens' => $request->imagens,
            'tempo_preparo' => $request->tempo_preparo,
            'qtd_porcoes' => $request->qtd_porcoes,
            'status_aprovacao' => $request->status_aprovacao
        ]);
        return $receita;
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $receita = $this->receita->find($id);

        if (!$receita) return response()->json(['erro' => 'Recurso pesquisado não existe!'], 404);

        return $receita;
    }

    /**
     * Display the specified resource.
     *
     * @param  str  $titulo
     * @return \Illuminate\Http\Response
     */
    public function findByTitle($titulo)
    {
        $receita = $this->receita->where('titulo', 'like', '%'.$titulo.'%')->get();
        return $receita;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $receita = $this->receita->find($id);

        if (!$receita) return response()->json(['erro' => 'Recurso pesquisado não existe!'], 404);

        $receita->update($request->all());

        return $receita;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $receita = $this->receita->find($id);

        if (!$receita) return response()->json(['erro' => 'Recurso pesquisado não existe!'], 404);

        $receita->delete();
        return ['msg' => 'A receita foi removida com sucesso!'];
    }
}
