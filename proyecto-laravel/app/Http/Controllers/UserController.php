<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use App\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
	public function config()
	{
		return view('user.config');
	}

	public function update(Request $request )
	{
		//get autenticated user
		$user = \Auth::user();
		$id = $user->id;

		//validate form data
		$validate= $this->validate($request,[
			'name'     => ['required', 'string', 'max:255'],
			'surname'  => ['required', 'string', 'max:255'],
			'nick'     => ['required', 'string','max:255', 'unique:users,nick,'.$id],
			'email'    => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.$id],
		]);

		//get form data
		$name          = $request->input('name');
		$surname       = $request->input('surname');
		$nick          = $request->input('nick');
		$email         = $request->input('email');
		
		//assign new object values
		$user->name    = $name;
		$user->surname =$surname;
		$user->nick    =$nick;
		$user->email   =$email;

		//recibe imagen
		$image = $request->file('image');
		if ($image) {
			
			$image_name = time().$image->getClientOriginalName();

			//guardar en disco users    nombre unico  obtener imagen
			Storage::disk('users')->put($image_name, File::get($image));

			//insertar a objeto/registro
			$user->image = $image_name;

		}

		//ejecutar consulta y cambios en la BD
		$user->update();

		return redirect()->route('config')
						 ->with(['message' => 'Usuario actualizado']);

	}

	public function getImage($filename)
	{
		$file = Storage::disk('users')->get($filename);
		return new Response($file, 200);
	}

	public function profile($id)
	{
		$user = User::find($id);

		return view('user.profile', [
					'user' => $user]);
	}

	public function index($search = null)
	{
		if (!empty($search)) {
			$users = User::where('nick','LIKE','%'.$search.'%')
					->orwhere('name','LIKE','%'.$search.'%')
					->orwhere('surname','LIKE','%'.$search.'%')
					->orderBy('id','desc')
					->paginate(3);

		}else{
			$users = User::orderBy('id','desc')->paginate(3);
		}
		return view('user.index',[
				'users' => $users
			]);
	}

}
