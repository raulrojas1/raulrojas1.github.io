
@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @include('includes.message')
            <div class="row d-flex justify-content-center flex-nowrap">
            	{{ $likes->links() }}
            </div>
            <h1>Mis imagenes favoritas</h1>

            @foreach ($likes as $like)
            	@include('includes.image', ['image' => $like->image])
            @endforeach
        </div>
    </div>
</div>
@endsection
