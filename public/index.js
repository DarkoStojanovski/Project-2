$(document).ready(function(){
    let currentMemberId = null;
    $(".member").on("click", function(){
        var id = $(this).data("id");
        currentMemberId = id;
    })
    $(".delete").on("click", function(){
        var id = $(this).data("id");
        $.ajax({
            url:"/api/jokes/"+ id,
            method: "Delete"
           })
    })
    $("#savebtn").on("click", function(){
        alert("Your Joke IS Saved! HAHA!");
       var jokeData = $(this).data("joke");
       var upvotes = $(this).data("upvotes");
       var downvotes = $(this).data("downvotes");

       console.log(jokeData);
       console.log(upvotes, downvotes);
       console.log(`Joke Saved by ${currentMemberId}`)

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