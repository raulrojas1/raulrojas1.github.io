@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-10">
			@include('includes.message')
			        <div class="card pub_image pub_image_detail">
            <div class="card-header">
                @if ($image->user->image)
                <div class="container-avatar">
                    <img src=" {{ 
                            route('user.avatar',
                            ['filename' => $image->user->image]) 
                        }}
                    ">
                </div>
                @endif
                <div class="data-user">
                    {{ '$'.$image->user->nick }}
                </div>
            </div>
            <div class="card-body">
                <div class="image-container image-detail">
                    <img src="{{ route('image.file',['filename' => $image->image_path]) }}">
                </div>

                <div class="description">
                    <span class="nickname">{{ $image->user->name.' '.$image->user->surname }}</span>

                    <span class="nickname date ">
                        {{ \FormatTime::LongTimeFilter($image->created_at) }}
                    </span>
                    <p>{{ $image->description }}</p>
                </div>

                <div class='likes'>
                    <span class="number_likes">
                    {{ count($image->likes) }}&nbsp;&nbsp;
                    </span> 
                    @php $user_like = false @endphp
                    @foreach ($image->likes as $like)
                        @if ($like->user->id == \Auth::user()->id)
                            @php
                                $user_like = true;
                            @endphp
                        @endif
                    @endforeach

                    @if (!$user_like)
                        <img src="{{ asset('img/heart-black.png') }}" 
                            data-id="{{ $image->id }}" class="btn-like">
                    @else
                        <img src="{{ asset('img/heart-red.png') }}" 
                            data-id="{{ $image->id }}" class="btn-dislike">
                    @endif
                </div>
                @if (Auth::user() and Auth::user()->id == $image->user_id )
                <div class="actions">
                    <a href="{{ route('image.edit',['id'=>$image->id]) }}" class="btn btn-sm btn-primary">Actualizar</a>
                    <!-- Button to Open the Modal -->
                    <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal">
                      Borrar
                    </button>

                    <!-- The Modal -->
                    <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">

                          <!-- Modal Header -->
                          <div class="modal-header">
                            <h4 class="modal-title">¿Desea borrar este elemento?</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>

                          <!-- Modal body -->
                          <div class="modal-body">
                            Luego de esta acción no se podrá recuperar este elemento
                          </div>

                          <!-- Modal footer -->
                          <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Cancelar</button>
                            <a href="{{ route('image.delete',['id' => $image->id]) }}" class="btn btn-danger">Borrar</a>
                          </div>

                        </div>
                      </div>
                    </div>

                </div>
                @endif


                <div class="clearfix"></div>
                <div class="comments">
                	<h2>Commentarios ({{ count($image->comments) }})</h2><hr>
                     <form method="POST" action="{{ route('comment.save') }}">
                     	@csrf                     	
                     	<input type="hidden" name="image_id" value="{{ $image->id }}">
                     	<p>
                     		@if ($errors->any())
                     			<span role='alert' class="alert-danger">
                     				<strong>{{ $errors->first() }}</strong>
                     			</span>
                     		@endif

	                     	<textarea class="form-control" name="content">
	                     	</textarea>
                     	</p>

                     	<button type="submit" class="btn btn-success">
                     		Enviar
                     	</button>
                     </form>
                @foreach ($image->comments as $comment)
                	<div class="comment"><hr>
	                    <span class="nickname">{{'$'.$comment->user->nick }}</span>
	                    <span class="nickname date ">
	                        {{ \FormatTime::LongTimeFilter($comment->created_at) }}
	                    </span>
	                    <p>{{ $comment->content }}
	                    <br>
						@if (\Auth::check() and (\Auth::user()->id == $comment->user_id or \Auth::user()->id == $image->user_id))
		                    <a class="btn btn-sm btn-danger" 
		                    href="{{ route('comment.delete',['id' => $comment->id]) }}">
		                    	Eliminar
		                    </a>
						@endif
						</p>
                	</div>
                @endforeach
                </div>
            </div>
        </div>

    </div>
</div>
@endsection

