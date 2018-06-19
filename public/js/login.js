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
    TextfirshInput: {
      text: 'Email',
      placeholder: 'Type your Email',
      name: 'email'
    },
    TextSecondhInput: {
      text: 'Password',
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
    return '\
    <div class="container">\
               <div class="row">\
                 <div class="col-md-8 col-md-offset-2">\
                   <div class="panel panel-default">\
                     <div class="panel-heading">Login</div>\
                       <div class="panel-body">\
                          <form class="form-horizontal" id="form-jira" method="' + attributes.form.method + '" action="' + attributes.form.action + '">\
                          ' + attributes.token + '\
                             <div class="">\
                                <label for="email" class="col-md-4 control-label">' + attributes.TextfirshInput.text + '</label>\
                                <div class="col-md-6">\
                                  <input id="email" type="email" class="form-control" name="' + attributes.TextfirshInput.name + '"  required autofocus>\
                                </div>\
                             </div>\
                             <div class="">\
                                <label for="password" class="col-md-4 control-label">' + attributes.TextSecondhInput.text + '</label>\
                                <div class="col-md-6">\
                                   <input id="password" type="password" class="form-control" name="' + attributes.TextSecondhInput.name + '"  required autofocus>\
                                </div>\
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

    //check values of TextfirshInput attributes
    param.hasOwnProperty('TextfirshInput') ? (param.TextfirshInput.hasOwnProperty('text') ? attributes.TextfirshInput.text = param.TextfirshInput.text : '') : '';
    param.hasOwnProperty('TextfirshInput') ? (param.TextfirshInput.hasOwnProperty('placeholder') ? attributes.TextfirshInput.placeholder = param.TextfirshInput.placeholder : '') : '';
    param.hasOwnProperty('TextfirshInput') ? (param.TextfirshInput.hasOwnProperty('name') ? attributes.TextfirshInput.name = param.TextfirshInput.name : '') : '';

    //check values of TextSecondhInput attributes
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('text') ? attributes.TextSecondhInput.text = param.TextSecondhInput.text : '') : '';
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('placeholder') ? attributes.TextSecondhInput.placeholder = param.TextSecondhInput.placeholder : '') : '';
    param.hasOwnProperty('TextSecondhInput') ? (param.TextSecondhInput.hasOwnProperty('name') ? attributes.TextSecondhInput.name = param.TextSecondhInput.name : '') : '';

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
           document.getElementById("form-jira").onsubmit =   clousure;

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
