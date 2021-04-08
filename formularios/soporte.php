<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        #Reemplazar este correo por el correo electrónico del destinatario
        $mail_to = "josep@demeq.com";
        $email_subject = "Soporte de producto - WEB";
        
        # Envío de datos
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["phone"]);
        $model = trim($_POST["model"]);
        $serial = trim($_POST["serial"]);
        $company = trim($_POST["company"]);
        $message = trim($_POST["message"]);
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($model) OR empty($serial) OR empty($company) OR empty($message)) {
            # Establecer un código de respuesta y salida.
            http_response_code(400);
            echo "Por favor completa el formulario y vuelve a intentarlo.";
            exit;
        }
        
        # Contenido del correo
        $content = "<html>
                    <body style='font-family:Calibri, Lucida Grande, Arial, sans-serif;max-width:600px;margin:20px auto;'>
                    <h1 style='color:#000000;font-weight:bold;'> " . $name . " de  " . $company . "  necesita nuestra ayuda con su  " . $model . " </h1>
                    <h2 style='color:rgb(239,125,45);font-weight:bold;margin-top:0;margin-bottom:0;'>Nos env&iacute;a un mail desde la web para darle soporte</h2>
                    <p style='margin-top:0;margin-bottom:20px;'>A continuaci&oacute;n pod&eacute;s ver su consulta:</p>
                    <div style='border: 1px solid #333;overflow: hidden;width: 100%;max-width: 600px;'>
                        <div style='font-size: 18px;font-weight: 600; color: rgb(239,125,45);width:100%;padding:10px;border-bottom:2px solid rgb(239,125,45);'>
                        Datos personales
                        </div>
                        <div style='background: #ffffff;color: #000;width:100%;padding:10px;border-bottom:2px solid #000;font-weight: 600;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Nombre y Apellido</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Empresa</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;border-bottom:1px solid #000000;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $name . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $company . " </div>
                        </div>
                        <div style='background: #ffffff;color: #000;width:100%;padding:10px;border-bottom:2px solid #000;font-weight: 600;'>
                        <div style='width: 49%;display: inline-block;margin: 0;'>Email</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Tel&eacute;fono</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $email . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $phone . " </div>
                        </div>
                    </div>
                    <div style='border: 1px solid #333;overflow: hidden;width: 100%;max-width: 600px;margin-top: 20px;'>
                        <div style='font-size: 18px;font-weight: 600; color: rgb(239,125,45);width:100%;padding:10px;border-bottom:2px solid rgb(239,125,45);'>
                        Datos del equipo
                        </div>
                        <div style='background: #ffffff;color: #000;width:100%;padding:10px;border-bottom:2px solid #000;font-weight: 600;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Modelo</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>N&uacute;mero de serie</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $model . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $serial . " </div>
                        </div>
                    </div>
                    <div style='border: 1px solid #333;overflow: hidden;width: 100%;max-width: 600px;margin-top: 20px;'>
                        <div style='font-size: 18px;font-weight: 600; color: rgb(239,125,45);width:100%;padding:10px;border-bottom:2px solid rgb(239,125,45);'>
                            Mensaje
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;'>
                            <div style='width: 100%;display: inline-block;margin: 0;padding-right:10px;'> " . $message . " </div>
                        </div>
                    </div>
                    </body>
                    </html>";


        # Encabezados de correo electrónico.
        $headers = "From: $name <$email>";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        # Envía el correo.
        $success = mail($mail_to, $email_subject, $content, $headers);
        if ($success) {
            # Establece un código de respuesta 200 (correcto).
            http_response_code(200);
            echo "¡Gracias! Tu mensaje ha sido enviado.";
        } else {
            # Establezce un código de respuesta 500 (error interno del servidor).
            http_response_code(500);
            echo "Oops! Algo salió mal, no pudimos enviar tu mensaje.";
        }

    } else {
        # No es una solicitud POST, establezce un código de respuesta 403 (prohibido).
        http_response_code(403);
        echo "Hubo un problema con tu envío, intenta de nuevo.";
    }

?>


