/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".blank").css("background-color", "yellow");
    
    $('#superhuman').accordion({header: "h3"});
    $('#superhuman').css('width', '400px');
    
    $('h3').css('background', 'cyan');

    $('div:last p:nth-child(3)').css('background-color', 'pink');

    $('p:last').css('color', 'red');

    $('p:gt(4)').css('border-style', 'solid');

    $('p:first').css({'background-color': 'cyan', 'color': 'white'});

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);
    
    $('#replaceWText').bind('click', replaceWText);
    
    $('#randpara').bind('click', removeAPara);
    
    $('#removePara').bind('click', removeAPara);
    
    $("#hide").click(function() {
        $("p").hide();
    });

    $("#show").click(function() {
        $("p").show();
    }); 
    
});


function showThePage( ){
    
}   

function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara (){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced1');
}

function mouseOverMe(){
    $('h1').html("bye");
}

function mouseOutMe(){
    $('h1').html("hiii");
}

function mouseClick(){

    $('p').html('clicked');
}


