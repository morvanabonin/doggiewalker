<?php
    require_once 'Mail.php';
    
    if (!empty($_POST['acao'])) {
    switch ($_POST['acao']) {
        case ('enviar'):
            try {
                $cad = new Mail();
                $nome = $_POST['nome'];
                $telefone = $_POST['telefone'];
                $email = $_POST['email'];
                $assunto = $_POST['assunto'];
                $mensagem = $_POST['mensagem']; 
                echo json_encode($cad->sendMail($nome, $telefone, $email, $assunto, $mensagem));
            } catch (exception $e) {
                throw ($e);
            }
        }
    }
?>
