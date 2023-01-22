//Code JQuery : Démarrage d'une partie 
$(function () {
  
  $('#start').click(function()
  {  
  $('<input>').insertBefore('#bSpan1');
  $('#span1').css('display','block');
  $('#start').css('display','none');
    });
  
    $('#bSpan1').click(function(){
      $('#joueur1').html($('input').val());
      $('#span1').css('display','none');
      $('#span2').css('display','block');
      $('input').insertBefore('#bSpan2');
      $('input').val('');
     
    })
  
    $('#bSpan2').click(function(){
      $('#joueur2').html($('input').val());
        $('#span2').css('display','none');
        $('#party').css('display','none');
        $('#coliseum').css('display','none');
        $('#canvas').css('display','block');
        $('#athDiv').css('display','flex');
    
  });
  });
  class Restaurant {
    constructor(name,adress,url,rating)
    {
      
    }
  }

$('#newResto').on('click',function(){
  var restoCard= 
      {
        "restaurantName": $('#Nom').val(),
        "adress":$('#place').val()+$('#city').val()+$('#postalCode').val() ,
        "description": $('#description').val(),
        "stars": $('select').val()
      }
    var addressResto= $('<p></p>').text(restoCard.adress);
    var titleResto=$('<h4></h4>').text(restoCard.restaurantName);
    var divResto= $('<div></div>').addClass('resto');
    var divSecond= $('<div class="row"></div>');
    var divDescription =$('<div></div>').addClass('description').text(restoCard.description).appendTo(divSecond);
    
    titleResto.appendTo(divResto);
    addressResto.appendTo(divResto);
   
    divResto.appendTo('#restList');
    divDescription.appendTo(divResto);
    for (let i = 0; i <restoCard.stars; i++) {
      $('<i class="fas fa-star"></i>').appendTo(addressResto); 
     }
    $('p > i:first-child').css('margin-left', '10px');

});

