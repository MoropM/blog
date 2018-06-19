var Login = function() {
  //is a private attribute that container the default attributes
  var attributes = {
    fontColor: 'white',
    token: '',
    textButtonSubmit: 'login',
    forgot: {
      utlForgotPassword: '#',
      text: 'Forgot Your password?'
    },
    remember: {
      isActive: 'checked',
      text: 'Remember Me',
    },
    text: {
      aling: 'left',
      size: '16px',
      color: 'black'
    },
    TextFirstInput: {
      text: 'Email',
      value:'',
      textError:null,
      placeholder: 'Type your Email',
      name: 'email'
    },
    TextSecondhInput: {
      text: 'Password',
      value:'',
      textError:null,
      placeholder: 'Type your Password',
      name: 'password',
    },
    form: {
      action: '#',
      method: 'post',
      ajax: false
    }
  };


  //is a private function return html of login
  var getHtml = function() {
  var html='\
    <div class="container">\
               <div class="row">\
                 <div class="col-md-8 col-md-offset-2">\
                   <div class="panel panel-default">\
                     <div class="panel-heading">Login</div>\
                       <div class="panel-body">\
                          <form class="form-horizontal" id="form-jira" method="' + attributes.form.method + '" action="' + attributes.form.action + '">\
                          ' + attributes.token + '\
                            <div class="form-group">\
                            <label for="email" class="col-md-4 control-label">' + attributes.TextFirstInput.text + '</label>\
                               <div class="col-md-6">\
                                  <input id="email" placeholder="'+attributes.TextFirstInput.placeholder+'" type="email" class="form-control" name="' + attributes.TextFirstInput.name + '"  value="'+attributes.TextFirstInput.value+'" required autofocus>';

                                  if(attributes.TextFirstInput.textError!=null){
                                      html=html+'<span class="invalid-feedback" role="alert">\
                                                <strong>'+attributes.TextFirstInput.textError+'</strong>\
                                                </span>';
                                   }

                              html=html+'</div>\
                            </div>\
                        <div class="form-group">\
                             <label for="password" class="col-md-4 control-label">' + attributes.TextSecondhInput.text + '</label>\
                              <div class="col-md-6">\
                                   <input id="password" placeholder="'+attributes.TextSecondhInput.placeholder+'" type="password" class="form-control" name="' + attributes.TextSecondhInput.name + '" value="'+attributes.TextSecondhInput.value+'"  required autofocus>';
                                   if(attributes.TextSecondhInput.textError!=null){
                                       html=html+'<span class="invalid-feedback" role="alert">\
                                                 <strong>'+attributes.TextSecondhInput.textError+'</strong>\
                                                 </span>';
                                    }

                                   html=html+'</div>\
                              </div>\
                             <div class="form-group">\
                                 <div class="col-md-6 col-md-offset-4">\
                                     <div class="checkbox">\
                                         <label>\
                                             <input type="checkbox" name="remember" ' + attributes.remember.isActive + '> ' + attributes.remember.text + '\
                                         </label>\
                                     </div>\
                                 </div>\
                             </div>\
                          <div class="form-group">\
                             <div class="col-md-8 col-md-offset-4">\
                                <button type="submit" class="btn btn-primary">' + attributes.textButtonSubmit + '</button>\
                                <a class="btn btn-link" href="' + attributes.forgot.utlForgotPassword + '">' + attributes.forgot.text + '</a>\
                             </div>\
                          </div>\
                       </form>\
                       </div>\
                   </div>\
               </div>\
           </div>\
       </div>';

       return html;


  }

  var checkParameters = function(param) {
    param.hasOwnProperty('fontColor') ? attributes.fontColor = param.fontColor : '';
    param.hasOwnProperty('token') ? attributes.token = param.token : '';
    param.hasOwnProperty('textButtonSubmit') ? attributes.textButtonSubmit = param.textButtonSubmit : '';


    param.hasOwnProperty('forgot') ? (param.forgot.hasOwnProperty('utlForgotPassword') ? attributes.forgot.utlForgotPassword = param.forgot.utlForgotPassword : '') : '';
    param.hasOwnProperty('forgot') ? (param.forgot.hasOwnProperty('text') ? attributes.forgot.text = param.forgot.text : '') : '';

    param.hasOwnProperty('remember') ? (param.remember.hasOwnProperty('isActive') ? attributes.remember.isActive = param.remember.isActive : '') : '';
    param.hasOwnProperty('remember') ? (param.remember.hasOwnProperty('text') ? attributes.remember.text = param.remember.text : '') : '';

    //check values of text attributes
    param.hasOwnProperty('text') ? (param.text.hasOwnProperty('aling') ? attributes.text.aling = param.text.aling : '') : '';
    param.hasOwnProperty('text') ? (param.text.hasOwnProperty('size') ? attributes.text.size = param.text.size : '') : '';
    param.hasOwnProperty('text') ? (param.text.hasOwnProperty('color') ? attributes.text.color = param.text.color : '') : '';

    //check values of TextFirstInput attributes
    param.hasOwnProperty('TextFirstInput') ? (param.TextFirstInput.hasOwnProperty('text') ? attributes.TextFirstInput.text = param.TextFirstInput.text : '') : '';
    param.hasOwnProperty('TextFirstInput') ? (param.TextFirstInput.hasOwnProperty('placeholder') ? attributes.TextFirstInput.placeholder = param.TextFirstInput.placeholder : '') : '';
    param.hasOwnProperty('TextFirstInput') ? (param.TextFirstInput.hasOwnProperty('name') ? attributes.TextFirstInput.name = param.TextFirstInput.name : '') : '';
    param.hasOwnProperty('TextFirstInput') ? (param.TextFirstInput.hasOwnProperty('value') ? attributes.TextFirstInput.value = param.TextFirstInput.value : '') : '';
    param.hasOwnProperty('TextFirstInput') ? (param.TextFirstInput.hasOwnProperty('textError') ? attributes.TextFirstInput.textError = param.TextFirstInput.textError : '') : '';

    //check values of TextSecondhInput attributes
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('text') ? attributes.TextSecondhInput.text = param.TextSecondhInput.text : '') : '';
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('placeholder') ? attributes.TextSecondhInput.placeholder = param.TextSecondhInput.placeholder : '') : '';
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('name') ? attributes.TextSecondhInput.name = param.TextSecondhInput.name : '') : '';
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('value') ? attributes.TextSecondhInput.value = param.TextSecondhInput.value : '') : '';
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('textError') ? attributes.TextSecondhInput.textError = param.TextSecondhInput.textError : '') : '';

    //check values of form attributes
    param.hasOwnProperty('form') ? (param.form.hasOwnProperty('method') ? attributes.form.method = param.form.method : '') : '';
    param.hasOwnProperty('form') ? (param.form.hasOwnProperty('method') ? attributes.form.method = param.form.method : '') : '';
    param.hasOwnProperty('form') ? (param.form.hasOwnProperty('ajax') ? attributes.form.ajax = param.form.ajax : '') : '';


  };
  this.initLogin = function(attributes = {}) {


    checkParameters(attributes);

    $("#login-jira").append(getHtml());

    return {
      ajax: function(clousure) {
        if (attributes.form.ajax) {
          document.getElementById("form-jira").onsubmit = clousure;

        }

        //  document.getElementById("form-jira").onsubmit = instruction;
      }
    }

  }

  this.build = function(attributes) {


  }

  this.ajax = function(instruction) {



  }



  this.comer = function() {
    alert("Estas comiendi ");
  }
}

var login = new Login();
