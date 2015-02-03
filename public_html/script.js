
//-----------------------------------------------------------------------------
//                            Document 
//-----------------------------------------------------------------------------
$("document").ready(function() {
    $(".blank").css("background-color", "white");
// The accordion is foldabe paragraph
    $('#superhuman').accordion({header: "h3"});
    // This line of code is what is setting the width of the accordion 
    $('#superhuman').css('width', '400px');

    $('h3').css('background', 'cyan');

    $('div:last p:nth-child(3)').css('background-color', 'pink');

    $('p:last').css('color', 'red');

    $('p:gt(4)').css('border-style', 'solid');
//Sets the background color to the first paragraph 
    $('p:first').css({'background-color': 'cyan', 'color': 'white'});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);

    $('#replaceWText').bind('click', replaceWText);

    $('#randpara').bind('click', removeAPara);

    $('#removePara').bind('click', removeAPara);

    $('#addPara').bind('click', addAPara);

//Hides function when clicked
    $("#hide").click(function() {
        $("p").hide();
    });
//Shows function when clicked
    $("#show").click(function() {
        $("p").show();
    });

});

//----------------------------------------------------------------------------
//                             Functions
//-----------------------------------------------------------------------------
function showThePage( ){
    
}    

//removes a paragraph
function removeAPara(){
    $('#RandPara p:last').remove();
}
//adds a paragraph
function addAPara (){
    $('#RandPara').append('<p>ADDED</p>');
}
//replaces text with another word
function replaceWText(){
    $('#replaceWText').text('Replaced1');
}
//changes the selected id when mouse is over it
function mouseOverMe(){
    $('h1').html("bye");
}
//Changes the selected id when mouse is not on it
function mouseOutMe(){
    $('h1').html("hiii");
}
//Changes selected id when clicked
function mouseClick(){

    $('p').html('clicked');
}


