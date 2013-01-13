<?php

class Mail {

    public function sendMail($nome, $telefone, $email, $assunto, $mensagem){
         try {

            $destinatario = "morvanabonin@gmail.com";
            $corpo = "
            Nome: $nome

            Telefone: $telefone
            E-mail: $email

            $mensagem
            ";

            //para o envio em formato HTML
            $headers = "MIME-Version: 1.0 ";
            $headers .= " Content-type: text/html; charset=iso-8859-1 ";

            //endereço do remetente
            $headers .= " From: Morvana Bonin <morvanabonin@gmail.com> ";

            mail($destinatario, $assunto, $corpo, $headers);
            return true;

        } catch (exception $e) {
             error_log($e->getMessage());
        }
    }
}
?>
