$(function(){
//------------------this is the add item function--------------------- 
   $('#btn').click(function(){
       var data=$('#target').val();
       
       var todo={item:data};
       $.ajax({
        type: "POST",
        url: "/todo",
        
        data: todo,

        success: function(data) {
            //show content
            location.reload(true);
                }
     });
   });
// ---------------------this is the item delete function---------------- 
    $('li').on('click',function(){
          var item=$(this).text().replace(/ /g,'-');
         
          
          $.ajax({
            type: "DELETE",
            url: "/todo/"+item,
            success: function(data) {
                //show content
                location.reload(true);
                    }
         });
    });


});