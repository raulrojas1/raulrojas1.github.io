<div class="card pub_image">
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
            <a href="{{ route('profile',['id' => $image->user->id]) }}"
                >{{ '$'.$image->user->nick }}</a>     
        </div>
    </div>
    <div class="card-body">
        <div class="image-container">
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
            {{ count($image->likes)}} &nbsp;&nbsp;
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

        <div class="comments">
             <a href="{{ route('image.detail',['id' => $image->id]) }}" class="btn btn-warning btn-comments btn-sm">
                 Comentarios ({{ count($image->comments) }})
             </a>
        </div>
    </div>
</div>