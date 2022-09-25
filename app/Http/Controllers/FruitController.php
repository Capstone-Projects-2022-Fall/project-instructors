<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FruitController extends Controller
{
    /**
     * Handle POST events to create fruits.
     * @param Request $request the request JSON object.
     * 
     */
    public function store(Request $request)
    {
        $fruit = new Fruit;
        /*
            {
            "name": "Watermelon",
            "type": "melon",
            "size": "large",
            "taste": "good"
            }
        */
        $fruit->name = $request->name;
        $fruit->type = $request->type;
        $fruit->size = $request->size;
        $fruit->taste = $request->taste;

        $fruit->save();

        return response()->json(["result" => "ok"], 201);
    }
    /**
     *  Handle GET Requests to find all fruits that match a specified type.
     *  @param string $type String of the type of fruit requested.
     */
    public function show($type)
    {
        return [
            'fruit' => Fruit::where('type', '=', $type)
                ->get()
        ];
    }

    /**
     * Handle PUT requests to update a specific fruit. 
     * @param Request $request the request JSON object.
     * @param UUID $fruitId the unique ID of the fruit to be updated.
     */
    public function update(Request $request, $fruitId)
    {
        $fruit = Fruit::find($fruitId);
        $fruit->name = $request->name;
        $fruit->type = $request->type;
        $fruit->size = $request->size;
        $fruit->taste = $request->taste;
        $fruit->save();

        return response()->json(["result" => "ok"], 201);
    }
}
