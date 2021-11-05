<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\Image;
use App\Like;
use App\Comment;

class ImageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create()
    {
    	
    	return view('image.create');

    }

    public function save(Request $request)
    {
    	//validacion
    	$validate = $this->validate($request,[
    		'description' => 'required',
    		'image' => 'required|mimes:jpg,jpeg,gif,png|max:6000'
    	]);

    	$image_form = $request->file('image');
    	$descripcion = $request->input('description');

    	//asignar valores al objeto
    	$user= \Auth::user();
    	$image = new Image();
    	$image->user_id = $user->id;    	
    	$image->description = $descripcion;

    	//Subir fichero
    	if ($image_form) {
    		$image_path = time().$image_form->getClientOriginalName();
    		Storage::disk('images')->put($image_path,File::get($image_form));
    		$image->image_path = $image_path;
    	}

    	$image->save();

    	return redirect()->route('home')->with([
    		'message' => 'Imagen subida correctamente'
    	]);

    }


    public function getImage($filename)
    {
        $file = Storage::disk('images')->get($filename);
        return new Response($file,200);

    }

    public function detail($id)
    {
        $image = Image::find($id);

        return view('image.detail',[
        'image' => $image
        ]);

    }

    public function delete($id)
    {
        $user = \Auth::user();        
        $image = Image::find($id);
        $comments = Comment::where('image_id',$id)->get(); 
        $likes =  Like::where('image_id',$id)->get();

        if ($user and $image and $image->user->id == $user->id) {
            //borrar comentarios
            if ($comments and count($comments)>=1) {
                foreach ($comments as $comment) {
                    $comment->delete();
                }
            }

            //borrar likes
            if ($likes and count($likes)>=1) {
                foreach ($likes as $like) {
                    $like->delete();
                }
            }

            //borrar ficheros
            Storage::disk('images')->delete($image->image_path);
            
            $image->delete();
            $message = array('message' => 'La imgaen ha sido borrada' );

        }else{
            $message = array('message' => 'La imgaen no se ha podido borrar' );
        }
        return redirect()->route('home')->with($message);
    }

    public function edit($id)
    {
        $user = \Auth::user();
        $image = Image::find($id);

        if ($user and $image and $user->id == $image->user_id) {
            return view('image.edit',[
                            'image' => $image]);
        }else{
            return redirect()->route('home')
            //->with(['message' => 'No se puede acceder','type' => 'danger'])
            ;
        }
    }

    public function saveEdit(Request $request)
    {
        //validacion
        $validate = $this->validate($request,[
            'description' => 'required',
            'image' => 'mimes:jpg,jpeg,gif,png|max:6000'
        ]);

        $image_id = $request->input('image_id');
        $image_form = $request->file('image');
        $descripcion = $request->input('description');

        //Conseguir objeto
        $image = Image::find($image_id);
        $image->description = $descripcion;

        //Subir fichero
        if ($image_form) {
            $image_path = time().$image_form->getClientOriginalName();
            Storage::disk('images')->put($image_path,File::get($image_form));
            Storage::disk('images')->delete($image->image_path);
            $image->image_path = $image_path;
        }

        $image->update();

        return redirect()->route('image.detail',['image' => $image_id])->with([
            'message' => 'Publicación actualizada'
        ]);
    }


}
