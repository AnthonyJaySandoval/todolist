$(function () {
    var APPLICATION_ID = "476A7D19-48C6-1208-FF04-0A9B880E3800",
        SECRET_KEY = "E67B5764-AD31-C873-FFD6-0900DE7A2800",
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
