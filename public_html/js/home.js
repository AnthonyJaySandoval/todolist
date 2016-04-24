$(function () {
    var APPLICATION_ID = "0C522C4D-8A19-3723-FF46-E630D2591200",
        SECRET_KEY = "F482E78C-48CD-2FF4-FFBD-5323A21EFB00",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        var postsCollection = Backendless.Persistence.of(Posts).find();
        
        var wrapper = {
            posts: postsCollection.data
        };
        
        Handlebars.registerHelper('format', function (time){
            return moment(time).format("dddd, MMMM Do YYYY");
        });
             
        var blogScript = $("#blogs-template").html();
        var blogTemplate = Handlebars.compile(blogScript);
        var blogHTML = blogTemplate(wrapper);
        
        $('.main-container').html(blogHTML);
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
//    this.content = args.content || "";
//    this.authorEmail = args.authorEmail || "";
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
