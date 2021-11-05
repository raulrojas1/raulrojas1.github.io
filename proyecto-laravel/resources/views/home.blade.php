@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            @include('includes.message')        
            <div class="row d-flex justify-content-center flex-nowrap">
              {{ $images->links() }}
            </div>            
        @foreach ($images as $image)
            @include('includes.image', ['image' => $image])
        @endforeach
        <div class="clearfix"></div>
        <div class="row d-flex justify-content-center flex-nowrap">
              {{ $images->links() }}
        </div>
        </div>
    </div>
</div>
@endsection
