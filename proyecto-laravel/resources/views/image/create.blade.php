@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
    	<div class="col-md-8">
    		<div class="card">
    			<div class="card-header">Subir nueva imagen</div>
    			<div class="card-body">
					@if ($errors->any())
						<div class="alert alert-danger">
						    	@foreach ($errors->all() as $error)
						    		<strong>{{ $error }}</strong><br>
						    	@endforeach						    	
	    				</div>
					@endif      				
    				<form method="POST" action="{{ route('image.save') }}" enctype="multipart/form-data">
    					@csrf
    					<div class="form-group row">
    						<label for="image" class="col-md-3 col-form-label text-md-right"
    						>Imagen</label>
    						<div class="col-md-7">
    							<input id="image" type="file" name="image" class="form-control" required>
    						</div>

    					</div>

    					<div class="form-group row">
    						<label for="description" class="col-md-3 col-form-label text-md-right"
    						>Descripcion</label>
    						<div class="col-md-7">
    							<textarea id="description" type="text" name="description" class="form-control" required>
    							</textarea>
    							@if ($errors->has('description'))
    								<span class="invalid-feedback" role='alert'>
    									<strong>{{ $errors->first('description') }}</strong>
    								</span>
    							@endif
    						</div>
    					</div>


    					<div class="form-group row">
    						<div class="col-md-6 offset-md-3">
    							<input type="submit" name="enviar" class="btn btn-primary"
    							value="Subir Imagen">
    						</div>
    					</div>

    				</form>

    			</div>




    		</div>



    	</div>
    </div>
</div>

@endsection

