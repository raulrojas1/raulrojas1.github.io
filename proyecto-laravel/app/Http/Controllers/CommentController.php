<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function save(Request $request)
    {
    	$validate = $this->validate($request,[
    		'image_id' => 'integer|required', 
    		'content' => 'string|required'
    	]);

    	$image_id = $request->input('image_id');
    	$content = $request->input('content');
    	$user = \Auth::user();

    	$comment = new Comment();
    	$comment->user_id = $user->id;
    	$comment->image_id = $image_id;
    	$comment->content = $content;

    	$comment->save();

    	return redirect()
    			->route('image.detail',['id' => $image_id ])
    			->with(['message' => 'Comentario publicado']);

    }

    public function delete($id)
    {
    	//Conseguir datos del usuario identificado
    	$user = \Auth::user();

    	//Conseguir objeto del comentario
    	$comment = Comment::find($id);

    	//Comprobar si es dueno del comentario o publicacion
    	if ($user and ($user->id == $comment->user_id or $user->id == $comment->image->user_id)) {
    		$comment->delete();
    		return redirect()
    			->route('image.detail',['id' => $comment->image->id ])
    			->with(['message' => 'Comentario eliminado']);

    	}else{
    		return redirect()
    			->route('image.detail',['id' => $comment->image->id])
    			->with(['message' => 'El comewntario no se pudo borrar']);
    	}
    }

}
