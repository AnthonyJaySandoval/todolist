$(function () {
    var APPLICATION_ID = "0F1A0818-EECE-A82E-FFAC-A5E9AB1FDC00",
    SECRET_KEY = "5708C86F-5912-A271-FFB9-5DD3A385D400",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("dddd, MMMM Do YYYY");
    })
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    
});

function Posts (args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}
