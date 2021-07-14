<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        #Reemplazar este correo por el correo electrónico del destinatario
        $mail_to = "josep@demeq.com";
        $email_subject = "Cotización - WEB";
        
        # Envío de datos
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $company = trim($_POST["company"]);
        $cuit = trim($_POST["cuit"]);
        $phone = trim($_POST["phone"]);
        $message = str_replace(array("\r","\n"),array("<br>") , strip_tags(trim($_POST["message"])));
        $model_VB = !empty($_POST["val_VB"]) ? trim($_POST["val_VB"]) : NULL;
        $model_VDL = !empty($_POST["val_VDL"]) ? trim($_POST["val_VDL"]) : NULL;
        $model_VDCI = !empty($_POST["val_VDCI"]) ? trim($_POST["val_VDCI"]) : NULL;
        $model_VDCM = !empty($_POST["val_VDCM"]) ? trim($_POST["val_VDCM"]) : NULL;
        $tr_2_12 = !empty($_POST["tr_2_12"]) ? trim($_POST["tr_2_12"]) : NULL;
        $tr_2_22 = !empty($_POST["tr_2_22"]) ? trim($_POST["tr_2_22"]) : NULL;
        $tr_5_90 = !empty($_POST["tr_5_90"]) ? trim($_POST["tr_5_90"]) : NULL;
        $cal_i = !empty($_POST["cal_i"]) ? trim($_POST["cal_i"]) : NULL;
        $cal_m = !empty($_POST["cal_m"]) ? trim($_POST["cal_m"]) : NULL; 
        $g_50 = !empty($_POST["g_50"]) ? trim($_POST["g_50"]) : NULL;
        $g_100 = !empty($_POST["g_100"]) ? trim($_POST["g_100"]) : NULL;
        $oaa_1 = !empty($_POST["oaa_1"]) ? trim($_POST["oaa_1"]) : NULL;
        $ccq = !empty($_POST["ccq"]) ? trim($_POST["ccq"]) : NULL;
        $pa_5 = !empty($_POST["pa_5"]) ? trim($_POST["pa_5"]) : NULL;
        $pa_10 = !empty($_POST["pa_10"]) ? trim($_POST["pa_10"]) : NULL;
        $pa_5_oaa = !empty($_POST["pa_5_oaa"]) ? trim($_POST["pa_5_oaa"]) : NULL;
        $pa_10_oaa = !empty($_POST["pa_10_oaa"]) ? trim($_POST["pa_10_oaa"]) : NULL;
        $f_am = !empty($_POST["f_am"]) ? trim($_POST["f_am"]) : NULL; 
        $c_is = !empty($_POST["c_is"]) ? trim($_POST["c_is"]) : NULL;
        $c_im = !empty($_POST["c_im"]) ? trim($_POST["c_im"]) : NULL;
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($company)) {
            # Establecer un código de respuesta y salida.
            http_response_code(400);
            echo "Por favor completa el formulario y vuelve a intentarlo.";
            exit;
        }


        # Contenido del correo interno
        $content = "<html>
                    <body style='font-family:Calibri, Lucida Grande, Arial, sans-serif;max-width:600px;margin:20px auto;'>
                    <h1 style='color:#000000;font-weight:bold;font-size:22px;'> " . $name . " " . $surname . " de la empresa  " . $company . " nos env&iacute;a una solicitud de cotizaci&oacute;n.</h1>
                    <p style='margin-top:0;margin-bottom:20px;'>A continuaci&oacute;n pod&eacute;s ver su pedido:</p>
                    <div style='border: 2px solid #333;overflow: hidden;width: 100%;max-width: 600px;'>
                        <div style='font-size: 18px;font-weight: 600; background: #000;width:100%;padding:10px;color:#fff;'>
                        Datos personales
                        </div>
                        <div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Nombre y Apellido</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;border-bottom:1px solid #000000;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'> " . $name . " </div>
                        </div>
                        <div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                        <div style='width: 49%;display: inline-block;margin: 0;'>Empresa</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>CUIT/CUIL</div>
                        </div>
                        <div style='background: #ffffff;;width:100%;padding:10px;border-bottom:1px solid #000000;'>
                        <div style='width: 49%;display: inline-block;margin: 0;'> " . $company . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $cuit . " </div>
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

                        if ($model_VB >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                              <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_VB . " </div>
                                              <div style='margin: 0;font-weight:600;'>x QSV B</div>
                                           </div>";
                        }

                        if ($model_VDL >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_VDL . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QSV DL</div>
                                            </div>";
                        }

                        if ($model_VDCI >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_VDCI . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QSV DCI</div>
                                            </div>";
                        }

                        if ($model_VDCM >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_VDCM . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QSV DCM</div>
                                            </div>";
                        }
        
             $content.="<div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Accesorios</div>
                        </div>";

                        

                        if ($tr_2_12 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_2_12 . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSS201:</span> Transductor de 2MHz Ø12mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_2_22 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_2_22 . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSS202:</span> Transductor de 2MHz Ø22mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_5_90 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5_90 . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSS501:</span> Transductor de 5MHz Ø10mm. 90°</div>
                                            </div>";
                        }

                        if ($cal_i >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $cal_i . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QS-------:</span> Calibre Insize</div>
                                            </div>";
                        }

                        if ($cal_m >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $cal_m . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QS-------:</span> Calibre Mitutoyo</div>
                                            </div>";
                        }

                        if ($g_50 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_50  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSG005:</span> Gel acoplante 50cc</div>
                                            </div>";
                        }

                        if ($g_100 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_100  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSG010:</span> Gel acoplante 100cc</div>
                                            </div>";
                        }

                        if ($oaa_1 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $oaa_1  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSD000:</span> Certificado de calibración - Trazabilidad OAA (QSD001 / QSD002 según modelo/s)</div>
                                            </div>";
                        }

                        if ($ccq >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ccq  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x -----:</span> Certificado de conformidad de fábrica</div>
                                            </div>";
                        }

                        if ($pa_5 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_5 . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSR005:</span> Patrón escalonado de 5 pasos en acero al carbono</div>
                                            </div>";
                        }

                        if ($pa_10 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_10 . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSR010:</span> Patrón escalonado de 10 pasos en acero al carbono</div>
                                            </div>";
                        }

                        if ($pa_5_oaa >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_5_oaa . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSD005:</span> Certificación OAA para patrón escalonado de 5 pasos</div>
                                            </div>";
                        }

                        if ($pa_10_oaa >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_10_oaa . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSD010:</span> Certificación OAA para patrón escalonado de 10 pasos</div>
                                            </div>";
                        }

                        if ($f_am >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_am  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSP001:</span> Funda Protectora Amarilla</div>
                                            </div>";
                        }

                        if ($c_is >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_is  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSC001:</span> Cable de interfaz para QSV-DLI a calibre digital Insize</div>
                                            </div>";
                        }

                        if ($c_im >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_im  . " </div>
                                            <div style='margin: 0;'><span style='font-weight:600;'>x QSC002:</span> Cable de interfaz para QSV-DLM a calibre digital Mitutoyo</div>
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
                        <body style='font-family:Calibri, Lucida Grande, Arial, sans-serif;max-width:600px;margin:20px auto;'>
                        <div style='width: 100%;max-width: 600px;text-align: center;margin:40px auto;'>
                        <img src='http://www.demeqcom.ipage.com/webdemeq/img/formularios/logo_es.png' alt='Para tener una mejor experiencia habilite mostrar el contenido remoto' height='40px' style='font-size: 14px;font-style: italic; color: #ef7d2d;'>
                        </div>
                        <div style='background: #fff;padding:40px'>
                        <h1 style='color:#000000;font-weight:bold;margin-top: 0;padding-top: 0;'>Su solicitud de cotizaci&oacute;n</h1>
                        <p style='margin-top:0;margin-bottom:40px;'>Gracias ...En breve nos pondremos en contacto con usted para brindarle...</p>
                        <div style='font-size: 24px;font-weight: 600;color:#ef7d2d;margin-bottom: 20px;'>
                        Datos personales
                        </div>
                        <div style='color: #000;font-weight: 600;font-size: 18px;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Nombre y Apellido</div>
                        </div>
                        <div style='margin-bottom: 20px;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'> " . $name . " </div>
                        </div>
                        <div style='color: #000;font-weight: 600;font-size: 18px;'>
                        <div style='width: 49%;display: inline-block;margin: 0;'>Empresa</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>CUIT/CUIL</div>
                        </div>
                        <div style='margin-bottom: 20px;'>
                        <div style='width: 49%;display: inline-block;margin: 0;'> " . $company . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $cuit . " </div>
                        </div>
                        <div style='color: #000;font-weight: 600;font-size: 18px;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Email</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Tel&eacute;fono</div>
                        </div>
                        <div style='margin-bottom: 40px;padding-bottom: 40px; border-bottom: 1px solid #999;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $email . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $phone . " </div>
                        </div>
                        <div style='font-size: 24px;font-weight: 600;color:#ef7d2d;margin-bottom: 20px;'>
                            Solicitud de cotizaci&oacuten
                        </div>
                        
                        <div style='color: #000;font-weight: 600;font-size: 18px;'>
                            <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Modelo/s</div>
                        </div>";

    if ($model_VB >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_VB . " </div>
                            <div style='margin: 0;'>x QSV B</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QS5 B</li>
                                <li>Certificado de conformidad</li>
                                <li>Transductor 5MHz HD estándar</li>
                                <li>Gel acoplante</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_VDL >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_VDL . " </div>
                            <div style='margin: 0;'>x QSV DL</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QS5 E</li>
                                <li>Certificado de conformidad</li>
                                <li>Transductor 5MHz HD para medición sobre pintura</li>
                                <li>Gel acoplante</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_VDCI >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_VDCI . " </div>
                            <div style='margin: 0;'>x QSV DCI</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QS5 DL</li>
                                <li>Certificado de conformidad</li>
                                <li>Transductor 5MHz HD estándar</li>
                                <li>Gel acoplante</li>
                                <li>Manual de usuario</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_VDCM >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_VDCM . " </div>
                            <div style='margin: 0;'>x QSV DCM</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QS5 DLE</li>
                                <li>Certificado de conformidad</li>
                                <li>Transductor 5MHz HD para medición sobre pintura</li>
                                <li>Gel acoplante</li>
                                <li>Manual de usuario</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }
            
        $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;'>
                            <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Accesorios Opcionales</div>
                        </div>";

                            

    if ($tr_2_12 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_2_12 . " </div>
                            <div style='margin: 0;'>x Transductor de 2MHz Ø12mm. 90°</div>
                        </div>";
    }

    if ($tr_2_22 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_2_22 . " </div>
                            <div style='margin: 0;'>x Transductor de 2MHz Ø22mm. 90°</div>
                        </div>";
    }

    if ($tr_5_90 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_5_90 . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz Ø10mm. 90°</div>
                        </div>";
    }

    if ($cal_i >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $cal_i . " </div>
                            <div style='margin: 0;'>x Calibre Insize</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye cable</div>
                        </div>";
    }

    if ($cal_m >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $cal_m . " </div>
                            <div style='margin: 0;'>x Calibre Mitutoyo</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye cable</div>
                        </div>";
    }

    if ($g_50 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_50 . " </div>
                            <div style='margin: 0;'>x Gel acoplante en botella plástica de 50cc con pico vertedor</div>
                        </div>";
    }

    if ($g_100 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_100 . " </div>
                            <div style='margin: 0;'>x Gel acoplante en botella plástica de 100cc con pico vertedor</div>
                        </div>";
    }

    if ($oaa_1 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $oaa_1 . " </div>
                            <div style='margin: 0;'>x Certificado de calibración - Trazabilidad OAA</div>
                        </div>";
    }

    if ($ccq >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $ccq . " </div>
                            <div style='margin: 0;'>x Certificado de conformidad de fábrica confeccionado a partir de patrones internos</div>
                        </div>";
    }

    if ($pa_5 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_5 . " </div>
                            <div style='margin: 0;'>x Patrón escalonado de 5 pasos en acero al carbono</div>
                        </div>";
    }

    if ($pa_10 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_10 . " </div>
                            <div style='margin: 0;'>x Patrón escalonado de 10 pasos en acero al carbono</div>
                        </div>";
    }

    if ($pa_5_oaa >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_5_oaa . " </div>
                            <div style='margin: 0;'>x Certificación OAA para patrón escalonado de 5 pasos</div>
                        </div>";
    }

    if ($pa_10_oaa >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_10_oaa . " </div>
                            <div style='margin: 0;'>x Certificación OAA para patrón escalonado de 10 pasos</div>
                        </div>";
    }

    if ($f_am >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $f_am . " </div>
                            <div style='margin: 0;'>x Funda Protectora de silicona color amarillo</div>
                        </div>";
    }

    if ($c_is >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_is . " </div>
                            <div style='margin: 0;'>x Cable de interfaz para QSV-DLI a calibre digital Insize. Longitud: 1m</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye calibre</div>
                        </div>";
    }

    if ($c_im >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_im . " </div>
                            <div style='margin: 0;'>x Cable de interfaz para QSV-DLI a calibre digital Mitutoyo. Longitud: 1m</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye calibre</div>
                        </div>";
    }

        $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;'>
                            <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Observaciones</div>
                        </div>
                        <div style='display: inline-block;margin: 0;text-align: justify;text-justify: inter-word;'> " . $message . " </div>

                        <div style='margin-top: 80px;padding-top: 40px; border-top: 1px solid #999;'>
                        <p style='color: #000;font-weight: 400;font-size: 18px;margin-bottom:0;font-size:20px;'>En breve le haremos llegar su cotización</p>
                        <p style='color: #000;font-weight: 600;font-size: 18px;font-size:20px;'>Saludos, dmq</p>
                        </div>
                    </div>
                    <div style='margin: 40px'>
                        <div style='width: 100%;display: flex;align-items: center;'>
                            <div style='display:flex;float: left;padding-right: 10px;'>
                                <img src='http://www.demeqcom.ipage.com/webdemeq/img/formularios/logo_es.png' alt='Para tener una mejor experiencia habilite mostrar el contenido remoto' height='30px' style='font-size: 14px;font-style: italic; color: #ef7d2d;'>
                            </div>
                            <div style='display:flex;float: left;border-left: 1px solid #999;padding-left: 10px;font-size: 14px'>
                                <p>Armenia 3878 (B1605CEJ) Munro Buenos Aires - Argentina
                                <br>+54 (11) 4765 7678
                                <br>infodemeq@demeq.com</p>
                            </div>
                        </div>
                        <div style='display: block;font-size: 14px;margin-bottom: 40px;'>
                            <p>Recibió este correo electrónico informativo para confirmar su solicitud de cotización en la web www.demeq.com...</p>
                        </div>
                        <div style='display: flex; justify-content: center;>
                            <a href='#'>Seguinos en:</a>
                            <a href='https://www.linkedin.com/company/demeq'><img src='http://demeqcom.ipage.com/emailimg/social-in.png' alt='LinkedIn' style='font-size: 12px; display: flex;padding:0 15px;width: 20px;'></a>
                            <a href='https://www.facebook.com/demeq.dmq'><img src='http://demeqcom.ipage.com/emailimg/social-fb.png' alt='Facebook' style='font-size: 12px; display: flex;padding:0 15px;width: 20px;'></a>
                            <a href='https://www.instagram.com/dmq_instruments/'><img src='http://demeqcom.ipage.com/emailimg/social-ig.png' alt='Instagram' style='font-size: 12px; display: flex;padding:0 15px;width: 20px;'></a>
                            <a href='https://www.youtube.com/channel/UC_aDutY84Dx2TnJ9w_vwyAQ'><img src='http://demeqcom.ipage.com/emailimg/social-yt.png' alt='Youtube' style='font-size: 12px; display: flex;padding:0 15px;width: 20px;'></a>
                        </div>
                    </div>
                </body>
                </html>";

        # Datos para el mail de confirmación.
        $mail_cliente = $email;
        $email_subject_conf = "DMQ - Confirmación de su solicitud de cotización";
        $headers_conf = "From: infodemeq@demeq.com" . "\r\n";
        $headers_conf .= "MIME-Version: 1.0" . "\r\n";
        $headers_conf .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 


        # Encabezados de correo electrónico.
        $headers = "From: $name $surname  <$email>" . "\r\n";
        $headers .= "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

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


