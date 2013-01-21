!function($){
    "use strict";
        
    $('.carousel').carousel({
        interval: 7000
    })

    $('.anchorLink').click(function() {
        $('.nav-collapse').collapse('toggle');
    });
    
    $(document).ready(function() {
                
        $('#formulario').on('submit', function(){
            var nome = $("#nome").val();
            var telefone  = $("#telefone").val();
            var email  = $("#email").val();
            var assunto   = $("#assunto").val();
            var mensagem = $("#mensagem").val();
            if ((nome && email && assunto && mensagem)) {
                var data = {
                    "acao": "enviar",
                    "nome"       : nome,
                    "telefone"   : telefone,
                    "email"      : email,
                    "assunto"    : assunto,
                    "mensagem"   : mensagem
                };
                $('#load').show();
                $.ajax({
                    url:'mail/controller.php',
                    async:true,
                    complete: function(json) {
                        var result = eval('(' + json.responseText + ')');
                        if(result == true) {
                            $('#load').hide();
                            alert('Mensagem enviada com sucesso');
                        } else {
                            $('#load').hide();
                            alert('Ocorreu um erro ao enviar a mensagem!');
                        }
                    },
                    cache:false,
                    type:'POST',
                    data:data
                });
            } else {
                alert('Verifique os campos mandatorios');
            }

            return false;
        })
    })

    $('.limpar').click(function(){
        $("#nome").val('');
        $("#telefone").val('');
        $("#email").val('');
        $("#assunto").val('');
        $("#mensagem").val('');

    })
        
}(window.jQuery);