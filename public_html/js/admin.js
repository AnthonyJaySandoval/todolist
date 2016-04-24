$(function () {
    var APPLICATION_ID = "0C522C4D-8A19-3723-FF46-E630D2591200",
        SECRET_KEY = "F482E78C-48CD-2FF4-FFBD-5323A21EFB00",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var postsCollection = Backendless.Persistence.of(Posts).find();
        
        
             
        var loginScript = $("#login-template").html();
        var loginTemplate = Handlebars.compile(loginScript);
        
        
        $('.main-container').html(loginTemplate);
        
        $(document).on('submit', '.form-signin', function(event){
            event.preventDefault();
            
            var data = $(this).serializeArray(),
                email = data[0].value,
                password = data[1].value;
                
                Backendless.UserService.login(email, password, true, new Backendless.Async(userLoggedIn, gotError));
            
        });
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
//    this.content = args.content || "";
//    this.authorEmail = args.authorEmail || "";
}

function userLoggedIn() {
    console.log("user succsessfully logged in");
}

function gotError(error){
    console.log("Error message-" + error.message);
    console.log("Error code - " + error.code);
}

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );