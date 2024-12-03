$(document).ready(function(){
  $('#editForm').hide()
  $('#removeAll').hide()
  $('#removeSelect').hide()
  if($("#menu tr").length==0){
    $("#menu ").append($("<tr class='nothing'><td>No Tasks For Show</td></tr>"))
  }
  if($('#markedList').children().length==0){
    $("#markedList").append($("<tr><td class='nothing1'>Empty Completed task</td></tr>"))
    // console.log('pp')
   }
  let count =0;
  $("#button").click(function (event)
  
  {
    event.preventDefault();
    let value = $(".input").val().trim()
    if(value==""){
      alert('enter the valid data in input field')
    }else{
      count++
      $("#menu ").append($("<tr class='main'><td class='li'>"+$(".input").val()+"</td><td class='action'><span id='SelectBtn' class='btn btn-primary'>Completed</span><span id='removeBtn' class='btn btn-danger'>Delete</span></td></tr>"))
      $(".input").val("")
      if($("#menu tr").length==0){
        $("#menu ").append($("<tr><td>No Tasks For Show</td></tr>"))
      }else{
        $('.nothing').remove()
      }
      
      

    }
    // console.log($(".input").val())
    // if($('#menu').children().length==0){
    //   $('#removeAll').hide()
    //  }else{
    //   $('#removeAll').show()
    //  }
  })
//   $('#menu').on('dblclick', '.li', function() {
//     $(this).remove();
//     $(".editInput").val("")
//     $('#editForm').hide()
//     $('#form').show()
// });
$('#menu').on('click', '.li', function() {
  $('#editForm').show()
  $('#form').hide()
  $('.editInput').focus()
  $('.li').removeClass("editli")
  $('.main').removeClass("edit")
  $(this).addClass('editli')
  $(this).parents(".main").addClass('edit')
  let text =$(this).text()
  $(".editInput").val(text)
  $(".editInput").keyup(function(e){
    let value = $(".editInput").val()
    $('.editli').text(value);
  });
  $('#save').click(function(event){
    event.preventDefault();
    if ($(".editInput").val() == '') {
      $('.edit').remove()
      // $(this).parent().remove()
      $(".editInput").val("")
      // $('li').removeClass("edit")
      $('.main').removeClass("edit")
      // if($('#menu').children().length==0){
      //   $('#removeAll').hide()
      //  }else{
      //   $('#removeAll').show()
      //  }
    }  
    else{
      $(".editInput").val("")
      // $('li').removeClass("edit")
      $('.main').removeClass("edit")

    }   
    if($("#menu tr").length==0){
      $("#menu").append($("<tr class='nothing'><td>No Tasks For Show</td></tr>"))
      // console.log('pp')
    }else{
      $('.nothing').remove()
    } 
    $('#editForm').hide()
    $('#form').show()
  })
  
});
$('#menu').on('click', '#SelectBtn', function() {
  // $(this).siblings("li").addClass('selected')
  alert("You sure the task is completed")
  $("#markedList").append($("<tr class='selected'><td class='li'>"+$(this).parents('.main').children('.li').text()+"</td><td><span id='removeBtnslt' class='btn btn-danger'>Delete</span></td></tr>"))
  $(this).parents('.main').remove()
  // $(this).parents('.main').addClass('selected')
  if($('.selected').length == 0){
    $('#removeSelect').hide()
  }
  else{
    $('#removeSelect').show()
  }
  if($("#menu tr").length==0){
    $("#menu").append($("<tr class='nothing'><td>No Tasks For Show</td></tr>"))
    // console.log('pp')
  }
  else{
    $('.nothing').remove()
  }
  if($('#markedList').children().length==0){
    $("#markedList").append($("<tr><td class='nothing1'>Empty Completed task</td></tr>"))
    // console.log('pp')
   }
   else{
    $('.nothing1').remove()
  }
  
})
$('.marked').on('click', '#removeBtnslt', function() {
  alert("You want to Delete the Completed task")
  $(this).parents(".selected").remove();
  // $('#editForm').hide()
  // $('#form').show()
  // $(".input").val("")
  // $(".editInput").val("")
  if($('.selected').length == 0){
    $('#removeSelect').hide()
    $("#markedList").append($("<tr><td class='nothing1'>Empty Completed task</td></tr>"))
  }
  else{
    $('#removeSelect').show()
  $('.nothing1').remove()

  }
  // if($("#markedList tr").length==0){
  //   $("#markedList").append($("<tr><td>No Tasks For Show</td></tr>"))
  //   console.log('pp')
  // }
//  if($('#markedList').children().length==0){
//   $("#markedList").append($("<tr><td class='nothing1'>Empty Completed task</td></tr>"))
//   // console.log('pp')
//  }else{
//   $('.nothing1').remove()
// }
})

$('#menu').on('click', '#removeBtn', function() {
  alert("You want to Delete the task")
  $(this).parents(".main").remove();
  $('#editForm').hide()
  $('#form').show()
  $(".input").val("")
  $(".editInput").val("")
  if($('.selected').length == 0){
    $('#removeSelect').hide()
  }
  else{
    $('#removeSelect').show()
  }
  if($("#menu tr").length==0){
    $("#menu").append($("<tr class='nothing'><td>No Tasks For Show</td></tr>"))
    // console.log('pp')
  }else{
    $('.nothing').remove()
  }

})
// $('#removeAll').click(function(){
//   $('#menu').empty()
//   $('#removeAll').hide()
// })
$('#removeSelect').click(function(){
  alert("You want to Delete All the Completed task")
  $('.selected').remove();
  // console.log($('.selected').length)
  if($('.selected').length == 0){
    $('#removeSelect').hide()
    $("#markedList").append($("<tr><td class='nothing1'>Empty Completed task</td></tr>"))

  }else{
    $('.nothing1').remove()

  }
  // if($('#markedList').children().length==1){
  //   $("#markedList").append($("<tr><td class='nothing1'>Empty Completed task</td></tr>"))
  //   // console.log('pp')
  //  }
  //  else{
  //   $('.nothing1').remove()
  //   console.log($('#markedList').children().length)
  // }
})



});