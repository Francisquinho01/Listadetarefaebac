$(document).ready(function() {
   
    $('form').on('submit', function(e) {
        e.preventDefault(); 

        
        var tarefa = $('#tex').val();

       
        if (tarefa.trim() !== '') {
           
            var novoItem = $('<li></li>').text(tarefa);
            
          
            $('ul').append(novoItem);
            
       
            $('#tex').val('');
        }
    });

 
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('Linha');
    });
});
