@extends('layouts.app')

@section('content')

<div id="login-jira">
</div>
@endsection

@section('scripts')
<script src="{{asset('js/login.js')}}"></script>
<script>
  // A $( document ).ready() block
  $(document).ready(function() {


    login.initLogin({
      fontColor: 'red',
      forgot: {
        utlForgotPassword: "{{ route('password.request') }}",
        text: '¿Olvidaste tu contraseña?'
      },
      textButtonSubmit: 'login',
      remember: {
        isActive: 'checked',
        text: 'Recordar'
      },
      token: '{{ csrf_field() }}',
      text: {
        color: 'red',
        size: '20px'
      },

      TextfirshInput: {
        text: 'Correo Electronico',
        placeholder: 'Escribe tu correo electronico',
        name: 'email'
      },
      TextSecondhInput: {
        text: 'Contraseña',
        placeholder: 'Escribe tu contraseña aquí',
        name: 'password'
      },
      form: {
        action: '{{ route('login') }}',
        method: 'POST',
        ajax: 'true'
      }
    }).ajax(function(e) {
      e.preventDefault();
      console.log(document.getElementsByName('_token'));
      $.ajax({
        /* the route pointing to the post function */
        url: '{{ route('ajax') }}',
        type: 'POST',
        /* send the csrf-token and the input to the controller */
        data: {
          _token: document.getElementsByName('_token')[0].value,
          message: 'mi mensage'
        },
        dataType: 'JSON',
        /* remind that 'data' is the response of the AjaxController */
        success: function(data) {
          alert('sii ajax');
          console.log(data);
        }
      });
    });

  });
</script>
@endsection
