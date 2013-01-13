!function($){
	"use strict";
        
    $('.carousel').carousel({
        interval: 7000
    })
    
    $(document).ready(function() {
        $('#telefone').mask("(99) 9999-9999");
    })

    $('.enviar').click(function(){
        var nome = $("#nome").val();
        var telefone  = $("#telefone").val();
        var email  = $("#email").val();
        var assunto   = $("#assunto").val();
        var mensagem = $("#mensagem").val();
        if ((nome != "" && email != "" && assunto != "" && mensagem != "")) {
                    var data = {
                        "acao": "enviar",
                        "nome"       : nome,
                        "telefone"   : telefone,
                        "email"      : email,
                        "assunto"    : assunto,
                        "mensagem"   : mensagem
                    };
                $('#load').show();
                            alert(data.toSource());
                $.ajax({
                  url:'contacts/controller.php',
                  async:true,
                  complete: function(json) {
                                    alert(json.toSource());
                      var result = eval('(' + json.responseText + ')');
                      if(result == true) {
                          $('#load').hide();
                          alert('Mensagem enviada com sucesso!');
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
    })

    $('.limpar').click(function(){
        $("#nome").val('');
        $("#telefone").val('');
        $("#email").val('');
        $("#assunto").val('');
        $("#mensagem").val('');

    })
        
}(window.jQuery);