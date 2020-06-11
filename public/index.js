$(document).ready(function(){
    $("#savebtn").on("click", function(){
        alert("clicked");
       var jokeData = $(this).data("joke");
       var upvotes = $(this).data("upvotes");
       var downvotes = $(this).data("downvotes");

       console.log(jokeData);
       console.log(upvotes, downvotes);

       var data = {
           body: jokeData,
           upvotes: upvotes,
           downvotes: downvotes
       }
       $.ajax({
        url:"/api/jokes",
        method: "POST",
        data: data
       })
    });
});