<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        #Reemplazar este correo por el correo electrónico del destinatario
        $mail_to = "josep@demeq.com";
        $email_subject = "Cotización - WEB";
        
        # Envío de datos
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $company = trim($_POST["company"]);
        $phone = trim($_POST["phone"]);
        $message = str_replace(array("\r","\n"),array("<br>") , strip_tags(trim($_POST["message"])));
        $model_5B = !empty($_POST["val_QS5B"]) ? trim($_POST["val_QS5B"]) : NULL;
        $model_5E = !empty($_POST["val_QS5E"]) ? trim($_POST["val_QS5E"]) : NULL;
        $model_5DL = !empty($_POST["val_QS5DL"]) ? trim($_POST["val_QS5DL"]) : NULL;
        $model_5DLE = !empty($_POST["val_QS5DLE"]) ? trim($_POST["val_QS5DLE"]) : NULL;
        $model_3B = !empty($_POST["val_QS3B"]) ? trim($_POST["val_QS3B"]) : NULL;
        $model_3DL = !empty($_POST["val_QS3DL"]) ? trim($_POST["val_QS3DL"]) : NULL;
        $model_2S = !empty($_POST["val_QS2S"]) ? trim($_POST["val_QS2S"]) : NULL;
        $model_2V = !empty($_POST["val_QS2V"]) ? trim($_POST["val_QS2V"]) : NULL;
        $model_2DL = !empty($_POST["val_QS2DL"]) ? trim($_POST["val_QS2DL"]) : NULL;
        $model_2DLV = !empty($_POST["val_QS2DLV"]) ? trim($_POST["val_QS2DLV"]) : NULL;
        $tr_212 = !empty($_POST["tr_2_12"]) ? trim($_POST["tr_2_12"]) : NULL;
        $tr_222 = !empty($_POST["tr_2_22"]) ? trim($_POST["tr_2_22"]) : NULL;
        $tr_5 = !empty($_POST["tr_5"]) ? trim($_POST["tr_5"]) : NULL;
        $tr_7 = !empty($_POST["tr_7"]) ? trim($_POST["tr_7"]) : NULL; 
        $tr_5_eco2 = !empty($_POST["tr_5_eco2"]) ? trim($_POST["tr_5_eco2"]) : NULL;
        $tr_at_350 = !empty($_POST["tr_at_350"]) ? trim($_POST["tr_at_350"]) : NULL;
        $tr_at_150 = !empty($_POST["tr_at_150"]) ? trim($_POST["tr_at_150"]) : NULL;
        $pa_6 = !empty($_POST["pa_6"]) ? trim($_POST["pa_6"]) : NULL;
        $pa_4 = !empty($_POST["pa_4"]) ? trim($_POST["pa_4"]) : NULL;
        $g_100 = !empty($_POST["g_100"]) ? trim($_POST["g_100"]) : NULL;
        $g_50 = !empty($_POST["g_50"]) ? trim($_POST["g_50"]) : NULL;
        $f_gr = !empty($_POST["f_gr"]) ? trim($_POST["f_gr"]) : NULL;
        $f_ro = !empty($_POST["f_ro"]) ? trim($_POST["f_ro"]) : NULL;
        $f_am = !empty($_POST["f_am"]) ? trim($_POST["f_am"]) : NULL; 
        $c_usb = !empty($_POST["c_usb"]) ? trim($_POST["c_usb"]) : NULL; 
        $c_rs232 = !empty($_POST["c_rs232"]) ? trim($_POST["c_rs232"]) : NULL; 
        $impr = !empty($_POST["impr"]) ? trim($_POST["impr"]) : NULL;
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($company)) {
            # Establecer un código de respuesta y salida.
            http_response_code(400);
            echo "Por favor completa el formulario y vuelve a intentarlo.";
            exit;
        }


        # Contenido del correo interno
        $content = "<html>
                    <body style='font-family:Calibri, Lucida Grande, Arial, sans-serif;max-width:600px;margin:20px auto;'>
                    <h1 style='color:#000000;font-weight:bold;'> " . $name . " " . $surname . " de la empresa  " . $company . " nos env&iacute;a una solicitud de cotizaci&oacute;n.</h1>
                    <p style='margin-top:0;margin-bottom:20px;'>A continuaci&oacute;n pod&eacute;s ver su pedido:</p>
                    <div style='border: 2px solid #333;overflow: hidden;width: 100%;max-width: 600px;'>
                        <div style='font-size: 18px;font-weight: 600; background: #000;width:100%;padding:10px;color:#fff;'>
                        Datos personales
                        </div>
                        <div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Nombre y Apellido</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Empresa</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;border-bottom:1px solid #000000;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $name . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $company . " </div>
                        </div>
                        <div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Email</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Tel&eacute;fono</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $email . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $phone . " </div>
                        </div>
                    </div>
                    <div style='border: 2px solid #333;overflow: hidden;width: 100%;max-width: 600px;margin-top: 20px;'>
                        <div style='font-size: 18px;font-weight: 600; background: #000;width:100%;padding:10px;color:#fff;'>
                            Solicitud de cotizaci&oacuten
                        </div>
                        <div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Modelo/s</div>
                        </div>";

                        if ($model_5B >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                              <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5B . " </div>
                                              <div style='margin: 0;'>x QS5 B</div>
                                           </div>";
                        }

                        if ($model_5E >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5E . " </div>
                                            <div style='margin: 0;'>x QS5 E</div>
                                            </div>";
                        }

                        if ($model_5DL >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5DL . " </div>
                                            <div style='margin: 0;'>x QS5 E</div>
                                            </div>";
                        }

                        if ($model_5DLE >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5DLE . " </div>
                                            <div style='margin: 0;'>x QS5 DLE</div>
                                            </div>";
                        }

                        if ($model_3B >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_3B . " </div>
                                            <div style='margin: 0;'>x QS3 B</div>
                                            </div>";
                        }

                        if ($model_3DL >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_3DL . " </div>
                                            <div style='margin: 0;'>x QS3 B</div>
                                            </div>";
                        }

                        if ($model_2S >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2S . " </div>
                                            <div style='margin: 0;'>x QS2 S</div>
                                            </div>";
                        }

                        if ($model_2V >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2V . " </div>
                                            <div style='margin: 0;'>x QS2 V</div>
                                            </div>";
                        }

                        if ($model_2DL >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2DL . " </div>
                                            <div style='margin: 0;'>x QS2 DL</div>
                                            </div>";
                        }

                        if ($model_2DLV >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2DLV . " </div>
                                            <div style='margin: 0;'>x QS2 DL</div>
                                            </div>";
                        }
        
             $content.="<div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Accesorios</div>
                        </div>";

                        

                        if ($tr_212 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_212 . " </div>
                                            <div style='margin: 0;'>x Transductor 2MHz 12mm</div>
                                            </div>";
                        }

                        if ($tr_222 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_222 . " </div>
                                            <div style='margin: 0;'>x Transductor 2MHz 22mm</div>
                                            </div>";
                        }

                        if ($tr_5 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5 . " </div>
                                            <div style='margin: 0;'>x Transductor 5MHz</div>
                                            </div>";
                        }

                        if ($tr_7 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_7 . " </div>
                                            <div style='margin: 0;'>x Transductor 7MHz</div>
                                            </div>";
                        }

                        if ($tr_5_eco2 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5_eco2 . " </div>
                                            <div style='margin: 0;'>x Transductor 5MHz Hi-Damp</div>
                                            </div>";
                        }

                        if ($tr_at_350 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_at_350 . " </div>
                                            <div style='margin: 0;'>x Transductor Alta Temperatura 1</div>
                                            </div>";
                        }

                        if ($tr_at_150 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ttr_at_150 . " </div>
                                            <div style='margin: 0;'>x Transductor Alta Temperatura 2</div>
                                            </div>";
                        }

                        if ($pa_6 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_6 . " </div>
                                            <div style='margin: 0;'>x Patrones Escalonados - 6 escalones</div>
                                            </div>";
                        }

                        if ($pa_4 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_4 . " </div>
                                            <div style='margin: 0;'>x Patrones Escalonados - 4 escalones</div>
                                            </div>";
                        }

                        if ($g_100 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_100  . " </div>
                                            <div style='margin: 0;'>x Gel Acoplante 100g</div>
                                            </div>";
                        }

                        if ($g_50 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_50  . " </div>
                                            <div style='margin: 0;'>x Gel Acoplante 50g</div>
                                            </div>";
                        }

                        if ($f_gr >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_gr  . " </div>
                                            <div style='margin: 0;'>x Funda Protectora Gris</div>
                                            </div>";
                        }

                        if ($f_ro >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_ro  . " </div>
                                            <div style='margin: 0;'>x Funda Protectora Roja</div>
                                            </div>";
                        }

                        if ($f_am >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_am  . " </div>
                                            <div style='margin: 0;'>x Funda Protectora Amarilla</div>
                                            </div>";
                        }

                        if ($c_usb >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_usb  . " </div>
                                            <div style='margin: 0;'>x Cable USB</div>
                                            </div>";
                        }

                        if ($c_rs232 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_rs232  . " </div>
                                            <div style='margin: 0;'>x Cable RS232</div>
                                            </div>";
                        }

                        if ($impr >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $impr  . " </div>
                                            <div style='margin: 0;'>x impresora Térmica</div>
                                            </div>";
                        }

        $content.="</div>
                    <div class='dato' style='border: 2px solid #333;overflow: hidden;width: 100%;max-width: 600px;margin-top: 20px;'>
                        <div style='font-size: 18px;font-weight: 600; background: #000;width:100%;padding:10px;color:#fff;'>
                            Observaciones
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;'>
                            <div style='width: 95%;display: inline-block;margin: 0;text-align: justify;text-justify: inter-word'> " . $message . " </div>
                        </div>
                    </div>
                    <br><br><br><br>
                    </body>
                    </html>";

        
        # Contenido del correo para el cliente
        $content_conf = "<html style='background:#ededed;'>
                    <body style='font-family:Calibri, Lucida Grande, Arial, sans-serif;max-width:600px;margin:20px auto;background: #fff;padding:30px'>
                    <div style='width: 100%;max-width: 600px;text-align: left;margin-bottom:40px;'>
                    <img src='http://www.demeqcom.ipage.com/webdemeq/img/formularios/logo_es.png' alt='Para tener una mejor experiencia habilite mostrar el contenido remoto' height='40px''>
                </div>
                <h1 style='color:#000000;font-weight:bold;'>Su solicitud de cotizaci&oacute;n</h1>
                <p style='margin-top:0;margin-bottom:40px;'>Gracias ...En breve nos pondremos en contacto con usted para brindarle...</p>
                    <div style='font-size: 24px;font-weight: 600;color:#ef7d2d;margin-bottom: 20px;'>
                    Datos personales
                    </div>
                    <div style='color: #000;font-weight: 600;font-size: 18px;'>
                        <div style='width: 280px;display: inline-block;margin: 0;'>Nombre y Apellido</div>
                        <div style='width: 280px;display: inline-block;margin: 0;'>Empresa</div>
                    </div>
                    <div style='margin-bottom: 20px;'>
                        <div style='width: 280px;display: inline-block;margin: 0;'> " . $name . " </div>
                        <div style='width: 280px;display: inline-block;margin: 0;'> " . $company . " </div>
                    </div>
                    <div style='color: #000;font-weight: 600;font-size: 18px;'>
                        <div style='width: 280px;display: inline-block;margin: 0;'>Email</div>
                        <div style='width: 280px;display: inline-block;margin: 0;'>Tel&eacute;fono</div>
                    </div>
                    <div style='margin-bottom: 40px;padding-bottom: 40px; border-bottom: 1px solid #999;'>
                        <div style='width: 280px;display: inline-block;margin: 0;'> " . $email . " </div>
                        <div style='width: 280px;display: inline-block;margin: 0;'> " . $phone . " </div>
                    </div>
                    <div style='font-size: 24px;font-weight: 600;color:#ef7d2d;margin-bottom: 20px;'>
                        Solicitud de cotizaci&oacuten
                    </div>
                    
                    <div style='color: #000;font-weight: 600;font-size: 18px;'>
                        <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Modelo/s</div>
                    </div>";

                        if ($model_5B >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_5B . " </div>
                                                <div style='margin: 0;'>x QS5 B</div>
                                            </div>";
                        }

                        if ($model_5E >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_5E . " </div>
                                                <div style='margin: 0;'>x QS5 E</div>
                                            </div>";
                        }

                        if ($model_5DL >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_5DL . " </div>
                                                <div style='margin: 0;'>x QS5 E</div>
                                            </div>";
                        }

                        if ($model_5DLE >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_5DLE . " </div>
                                                <div style='margin: 0;'>x QS5 DLE</div>
                                            </div>";
                        }

                        if ($model_3B >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_3B . " </div>
                                                <div style='margin: 0;'>x QS3 B</div>
                                            </div>";
                        }

                        if ($model_3DL >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_3DL . " </div>
                                                <div style='margin: 0;'>x QS3 B</div>
                                            </div>";
                        }

                        if ($model_2S >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_2S . " </div>
                                                <div style='margin: 0;'>x QS2 S</div>
                                            </div>";
                        }

                        if ($model_2V >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_2V . " </div>
                                                <div style='margin: 0;'>x QS2 V</div>
                                            </div>";
                        }

                        if ($model_2DL >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_2DL . " </div>
                                                <div style='margin: 0;'>x QS2 DL</div>
                                            </div>";
                        }

                        if ($model_2DLV >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $model_2DLV . " </div>
                                                <div style='margin: 0;'>x QS2 DLV</div>
                                            </div>";
                        }
        
             $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;'>
                                <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Accesorios</div>
                            </div>";

                        

                        if ($tr_212 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_212 . " </div>
                                                <div style='margin: 0;'>x Transductor 2MHz 12mm</div>
                                            </div>";
                        }

                        if ($tr_222 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_222 . " </div>
                                                <div style='margin: 0;'>x Transductor 2MHz 22mm</div>
                                            </div>";
                        }

                        if ($tr_5 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_5 . " </div>
                                                <div style='margin: 0;'>x Transductor 5MHz</div>
                                            </div>";
                        }

                        if ($tr_7 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_7 . " </div>
                                                <div style='margin: 0;'>x Transductor 7MHz</div>
                                            </div>";
                        }

                        if ($tr_5_eco2 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_5_eco2 . " </div>
                                                <div style='margin: 0;'>x Transductor 5MHz Hi-Damp</div>
                                            </div>";
                        }

                        if ($tr_at_350 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_at_350 . " </div>
                                                <div style='margin: 0;'>x Transductor Alta Temperatura 1</div>
                                            </div>";
                        }

                        if ($tr_at_150 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $tr_at_150 . " </div>
                                                <div style='margin: 0;'>x Transductor Alta Temperatura 2</div>
                                            </div>";
                        }

                        if ($pa_6 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $pa_6 . " </div>
                                                <div style='margin: 0;'>x Patrones Escalonados - 6 escalones</div>
                                            </div>";
                        }

                        if ($pa_4 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $pa_4 . " </div>
                                                <div style='margin: 0;'>x Patrones Escalonados - 4 escalones</div>
                                            </div>";
                        }

                        if ($g_100 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $g_100 . " </div>
                                                <div style='margin: 0;'>x Gel Acoplante 100g</div>
                                            </div>";
                        }

                        if ($g_50 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $g_50 . " </div>
                                                <div style='margin: 0;'>x Gel Acoplante 50g</div>
                                            </div>";
                        }

                        if ($f_gr >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $f_gr . " </div>
                                                <div style='margin: 0;'>x Funda Protectora Gris</div>
                                            </div>";
                        }

                        if ($f_ro >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $f_ro . " </div>
                                                <div style='margin: 0;'>x Funda Protectora Roja</div>
                                            </div>";
                        }

                        if ($f_am >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $f_am . " </div>
                                                <div style='margin: 0;'>x Funda Protectora Amarilla</div>
                                            </div>";
                        }

                        if ($c_usb >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $c_usb . " </div>
                                                <div style='margin: 0;'>x Cable USB</div>
                                            </div>";
                        }

                        if ($c_rs232 >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $c_rs232 . " </div>
                                                <div style='margin: 0;'>x Cable RS232</div>
                                            </div>";
                        }

                        if ($impr >= 1) {
                            $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                                                <div style='margin: 0 3px 0 0;'> " . $impr . " </div>
                                                <div style='margin: 0;'>x impresora Térmica</div>
                                            </div>";
                        }

        $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;margin-bottom: 40px;padding-bottom: 40px; border-bottom: 1px solid #999;'>
                            <div style='width: 560px;display: inline-block;margin: 10px 0 5px 0;'>Observaciones</div>
                            <div style='display: inline-block;margin: 0;text-align: justify;text-justify: inter-word;'> " . $message . " </div>
                        </div>
                    </body>
                    </html>";

        # Datos para el mail de confirmación.
        $mail_cliente = $email;
        $email_subject_conf = "DMQ - Confirmación de su solicitud de cotización";
        $headers_conf = "From: Demeq S.R.L";
        $headers_conf .= "MIME-Version: 1.0\r\n";
        $headers_conf .= "Content-Type: text/html; charset=\"UTF-8\"\r\n"; 


        # Encabezados de correo electrónico.
        $headers = "From: $name $surname  <$email>";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";  

        # Envía el correo interno.
        $success = mail($mail_to, $email_subject, $content, $headers);
        if ($success) {
            # Establece un código de respuesta 200 (correcto).
            http_response_code(200);
            echo "¡Gracias! Su mensaje fue enviado exitosamente.";
        } else {
            # Establezce un código de respuesta 500 (error interno del servidor).
            http_response_code(500);
            echo "Oops! Algo salió mal, no pudimos enviar tu mensaje.";
        }

    } else {
        # No es una solicitud POST, establezce un código de respuesta 403 (prohibido).
        http_response_code(403);
        echo "Hubo un problema con tu envío, intenta de nuevo.";
    };

    # Envía el correo al cliente.
    $success2 = mail($mail_cliente, $email_subject_conf, $content_conf, $headers_conf);
        if ($success2) {
            # Establece un código de respuesta 200 (correcto).
            http_response_code(200);
        } else {
            # Establezce un código de respuesta 500 (error interno del servidor).
            http_response_code(500);
        };


?>


