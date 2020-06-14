$(document).ready(function(){
    let currentMemberId = null;
    $(".member").on("click", function(){
        var id = $(this).data("id");
        currentMemberId = id;
    })
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
           downvotes: downvotes,
           userid: currentMemberId

       }
       $.ajax({
        url:"/api/jokes",
        method: "POST",
        data: data
       })
    });

});