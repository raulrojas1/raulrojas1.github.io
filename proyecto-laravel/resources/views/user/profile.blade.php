@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @include('includes.message')        
            <div class="row d-flex justify-content-center flex-nowrap">
              {{-- {{ $user->images->links() }} --}}
            </div> 
            <div class="profile-user">
		        @if ($user->image)
		        <div class="container-avatar">
		            <img src=" {{ 
		                    route('user.avatar',
		                    ['filename' => $user->image]) 
		                }}
		            ">
		        </div>
		        @endif
		        <div class="user-info">
		        	<h1>{{ '$'.$user->nick }}</h1>
		        	<h2>{{ $user->name.' '.$user->surname }}</h2>
		        	<p>{{ 'Miembro '.\FormatTime::LongTimeFilter($user->created_at) }}</p>
		        </div>
		        <div class="clearfix"></div>
		        <hr>
		    </div>
		    <div class="clearfix"></div>

        @foreach ($user->images as $image)
            @include('includes.image', ['image' => $image])
        @endforeach
        <div class="clearfix"></div>
        <div class="row d-flex justify-content-center flex-nowrap">
              {{-- {{ $images->links() }} --}}
        </div>
        </div>
    </div>
</div>
@endsection