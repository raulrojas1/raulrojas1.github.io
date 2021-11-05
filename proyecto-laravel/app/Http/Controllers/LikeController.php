<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Like;


class LikeController extends Controller
{
        public function __construct()
    {
        $this->middleware('auth');
    }


    public function like($image_id)
    {
    	//Recoger datos del usuario
    	$user = \Auth::user();


    	//Verificar que no existe el like del usuario
    	$isset_like = Like::where('user_id',$user->id)
    						->where('image_id',$image_id)
    						->count();
    	
		if($isset_like == 0){
	    	$like = new Like();
	
	    	$like->user_id = $user->id;
	    	$like->image_id = (int)$image_id;
	
	    	$like->save();

            return response()->json([
                    'like' => $like
                    ]);
        }else{
            
            return response()->json([
                    'message' => 'Like ya existe'
                    ]);
        }
    }

    public function dislike($image_id)
    {
        //Recoger datos del usuario
        $user = \Auth::user();


        //Verificar que no existe el like del usuario
        $like = Like::where('user_id',$user->id)
                            ->where('image_id',$image_id)
                            ->first();
        
        if($like){
            
            $like->delete();

            return response()->json([
                    'dislike' => $like,
                    'message' => 'Diste dislike'
                    ]);
        }else{
            
            return response()->json([
                    'message' => 'Like no existe'
                    ]);
        }    	
    }

    public function index()
    {   
        $user= \Auth::user();
        $likes = Like::where('user_id',$user->id)
                    ->orderBy('id','desc')
                    ->paginate(2);

        return view('like.index',[
            'likes' => $likes
        ]);

    }


}
