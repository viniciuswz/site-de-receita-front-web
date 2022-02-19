<?php

namespace App\Http\Controllers;

use App\Models\LocalPreparo;
use Illuminate\Http\Request;

class LocalPreparoController extends Controller
{
    public function __construct(LocalPreparo $localPreparo)
    {
        $this->localPreparo = $localPreparo;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $locaisPreparo = $this->localPreparo->with('receitas')->get();
        return $locaisPreparo;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->localPreparo->rules(), $this->localPreparo->feedback());

        $localPreparo = LocalPreparo::create($request->all());
        return $localPreparo;
    }

    /**
     * Display the specified resource.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $localPreparo = $this->localPreparo->find($id);

        if(!$localPreparo) return response()->json(['erro' => 'Recurso pesquisado nao existe'], 404);

        return $localPreparo;
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
        $localPreparo = $this->localPreparo->find($id);

        if (!$localPreparo) return response()->json(['erro' => 'Recurso pesquisado não existe!'], 404);

        $localPreparo->update($request->all());

        return $localPreparo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Integer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $localPreparo = $this->localPreparo->find($id);

        if (!$localPreparo) return response()->json(['erro' => 'Recurso pesquisado não existe!'], 404);

        $localPreparo->delete();
        return ['msg' => 'O localPreparo foi removido com sucesso!'];
    }
}
