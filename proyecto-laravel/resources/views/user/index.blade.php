@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <form method="GET" action="{{ route('user.index') }}" id="buscador">
                <div class="row">
                    <div class="form-group col">
                        <input type="text" id="search" class="form-control"/>
                    </div>
                    <div class="form-group col btn-search">
                        <input type="submit" value="Buscar" class="btn btn-success"/>
                    </div>  
                </div>          
            </form>


            @include('includes.message')        
            <div class="row d-flex justify-content-center flex-nowrap">
              {{ $users->links() }}
            </div>            
        @foreach ($users as $user)
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
                    <h3>{{ $user->name.' '.$user->surname }}</h3>
                    <p>{{ 'Miembro '.\FormatTime::LongTimeFilter($user->created_at) }}</p>
                    <a href="{{ route('profile',['id'=>$user->id]) }}" class="btn btn-success">Ver Perfil</a>
                </div>
                <div class="clearfix"></div>
                <hr>
            </div>



        @endforeach
        <div class="clearfix"></div>
        <div class="row d-flex justify-content-center flex-nowrap">
              {{ $users->links() }}
        </div>
        </div>
    </div>
</div>
@endsection
