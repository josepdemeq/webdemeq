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
        $model_5F = !empty($_POST["val_QC5F"]) ? trim($_POST["val_QC5F"]) : NULL;
        $model_5N = !empty($_POST["val_QC5N"]) ? trim($_POST["val_QC5N"]) : NULL;
        $model_5C = !empty($_POST["val_QC5C"]) ? trim($_POST["val_QC5C"]) : NULL;
        $model_5DLF = !empty($_POST["val_QC5DLF"]) ? trim($_POST["val_QC5DLF"]) : NULL;
        $model_5DLN = !empty($_POST["val_QC5DLN"]) ? trim($_POST["val_QC5DLN"]) : NULL;
        $model_5DLC = !empty($_POST["val_QC5DLC"]) ? trim($_POST["val_QC5DLC"]) : NULL;
        $model_3F = !empty($_POST["val_QC3F"]) ? trim($_POST["val_QC3F"]) : NULL;
        $model_3N = !empty($_POST["val_QC3N"]) ? trim($_POST["val_QC3N"]) : NULL;
        $model_3DLF = !empty($_POST["val_QC3DLF"]) ? trim($_POST["val_QC3DLF"]) : NULL;
        $model_3DLN = !empty($_POST["val_QC3DLN"]) ? trim($_POST["val_QC3DLN"]) : NULL;
        $model_2F = !empty($_POST["val_QC2F"]) ? trim($_POST["val_QC2F"]) : NULL;
        $model_2DLF = !empty($_POST["val_QC2DLF"]) ? trim($_POST["val_QC2DLF"]) : NULL;
        $s_rf = !empty($_POST["s_rf"]) ? trim($_POST["s_rf"]) : NULL;
        $s_rnf = !empty($_POST["s_rnf"]) ? trim($_POST["s_rnf"]) : NULL;
        $s_rc = !empty($_POST["s_rc"]) ? trim($_POST["s_rc"]) : NULL;
        $s_rfv = !empty($_POST["s_rfv"]) ? trim($_POST["s_rfv"]) : NULL;
        $s_rex = !empty($_POST["s_rex"]) ? trim($_POST["s_rex"]) : NULL; 
        $s_mr = !empty($_POST["s_mr"]) ? trim($_POST["s_mr"]) : NULL;
        $s_m90 = !empty($_POST["s_m90"]) ? trim($_POST["s_m90"]) : NULL;
        $s_m45 = !empty($_POST["s_m45"]) ? trim($_POST["s_m45"]) : NULL;
        $b_fc = !empty($_POST["b_fc"]) ? trim($_POST["b_fc"]) : NULL;
        $b_nfc = !empty($_POST["b_nfc"]) ? trim($_POST["b_nfc"]) : NULL;
        $g_cal = !empty($_POST["g_cal"]) ? trim($_POST["g_cal"]) : NULL;
        $g_cal3 = !empty($_POST["g_cal3"]) ? trim($_POST["g_cal3"]) : NULL;
        $g_cal3ex = !empty($_POST["g_cal3ex"]) ? trim($_POST["g_cal3ex"]) : NULL;
        $ooa_gcal = !empty($_POST["ooa_gcal"]) ? trim($_POST["ooa_gcal"]) : NULL;
        $ccq = !empty($_POST["ccq"]) ? trim($_POST["ccq"]) : NULL;
        $f_gr = !empty($_POST["f_gr"]) ? trim($_POST["f_gr"]) : NULL;
        
        
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

                        if ($model_5F >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                              <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5F . " </div>
                                              <div style='margin: 0;font-weight:600;'>x QC5 F</div>
                                           </div>";
                        }

                        if ($model_5N >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5N . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC5 N</div>
                                            </div>";
                        }

                        if ($odel_5C >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $odel_5C . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC5 C</div>
                                            </div>";
                        }

                        if ($model_5DLF >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5DLF . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC5 DLF</div>
                                            </div>";
                        }

                        if ($model_5DLN >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5DLN . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC5 DLN</div>
                                            </div>";
                        }

                        if ($model_5DLC >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5DLC . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC5 DLC</div>
                                            </div>";
                        }

                        if ($model_3F >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_3F . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC3 F</div>
                                            </div>";
                        }

                        if ($model_3N >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_3N . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC3 N</div>
                                            </div>";
                        }

                        if ($model_3DLF >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_3DLF . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC3 DLF</div>
                                            </div>";
                        }

                        if ($model_3DLN >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_3DLN . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC3 DLN</div>
                                            </div>";
                        }

                        if ($model_2F >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2F . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC2 F</div>
                                            </div>";
                        }

                        if ($model_2DLF >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2DLF . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QC2 DLF</div>
                                            </div>";
                        }
        
             $content.="<div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Accesorios</div>
                        </div>";

                        if ($s_rf >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_rf . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS201:</span> Sonda recta Ferrosa</div>
                                            </div>";
                        }

                        if ($s_rnf >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_rnf . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS301:</span> Sonda recta No-Ferrosa</div>
                                            </div>";
                        }

                        if ($s_rc >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_rc . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS401:</span> Sonda recta Combinada</div>
                                            </div>";
                        }

                        if ($s_rfv >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_rfv . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS231:</span> Sonda recta Ferrosa con corte en V</div>
                                            </div>";
                        }

                        if ($s_rex >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_rex . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS203:</span> Sonda recta Ferrosa de Rango Extendido</div>
                                            </div>";
                        }

                        if ($s_rex >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_rex . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCR005:</span> Juego de 3 Galgas para Sonda de Rango Extendido</div>
                                            </div>";
                        }

                        if ($s_mr >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_mr . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS200:</span> Mini-Sonda Ferrosa recta</div>
                                            </div>";
                        }

                        if ($s_m90 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_m90 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS210:</span> Mini-Sonda Ferrosa a 90°</div>
                                            </div>";
                        }

                        if ($s_m45 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_m45 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCS220:</span> Mini-Sonda Ferrosa a 45°</div>
                                            </div>";
                        }

                        if ($b_fc >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_fc . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCR100:</span> Base Ferrosa para calibración</div>
                                            </div>";
                        }

                        if ($b_nfc >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_nfc . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCR200:</span> Base No-Ferrosa para calibración</div>
                                            </div>";
                        }

                        if ($g_cal >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_cal . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCR001:</span> Galga para calibración</div>
                                            </div>";
                        }

                        if ($g_cal3 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_cal3 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCR003:</span> Juego de 3 Galgas</div>
                                            </div>";
                        }

                        if ($g_cal3ex >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_cal3ex . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCR005:</span> Juego de 3 Galgas para Sonda de Rango Extendido</div>
                                            </div>";
                        }

                        if ($ooa_gcal >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ooa_gcal . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCD001:</span> Certificación OAA para galgas individuales</div>
                                            </div>";
                        }

                        if ($ccq >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ccq . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x ------:</span> Certificado de conformidad de fábrica</div>
                                            </div>";
                        }

                        if ($f_gr >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_gr . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QCP001:</span> Funda protectora de silicona color Gris</div>
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

    if ($model_5F >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5F . " </div>
                            <div style='margin: 0;'>x QC5 F</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC5 F</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta Ferrosa estándar</li>
                                <li>Base Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5N >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5N . " </div>
                            <div style='margin: 0;'>x QC5 N</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC5 N</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta No-Ferrosa estándar</li>
                                <li>Base No-Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($odel_5C >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $odel_5C . " </div>
                            <div style='margin: 0;'>x QC5 C</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC5 C</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta Combinada estándar</li>
                                <li>Base Ferrosa y No-Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5DLF >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5DLF . " </div>
                            <div style='margin: 0;'>x QC5 DLF</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC5 DLF</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta Ferrosa estándar</li>
                                <li>Base Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5DLN >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5DLN . " </div>
                            <div style='margin: 0;'>x QC5 DLN</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC5 DLN</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta No-Ferrosa estándar</li>
                                <li>Base No-Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5DLC >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5DLC . " </div>
                            <div style='margin: 0;'>x QC5 DLC</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC5 DLC</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta Combinada estándar</li>
                                <li>Base Ferrosa y No-Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_3F >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_3F . " </div>
                            <div style='margin: 0;'>x QC3 F</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC3 F</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta Ferrosa estándar</li>
                                <li>Base Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_3N >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_3N . " </div>
                            <div style='margin: 0;'>x QC3 N</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC3 N</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta No-Ferrosa estándar</li>
                                <li>Base No-Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_3DLF >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_3DLF . " </div>
                            <div style='margin: 0;'>x QC3 DLF</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC3 DLF</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta Ferrosa estándar</li>
                                <li>Base Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_3DLN >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_3DLN . " </div>
                            <div style='margin: 0;'>x QC3 DLN</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC3 DLN</li>
                                <li>Certificado de conformidad</li>
                                <li>Sonda recta No-Ferrosa estándar</li>
                                <li>Base No-Ferrosa para calibración</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software dmq DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_2F >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_2F . " </div>
                            <div style='margin: 0;'>x QC2 F</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC2 F</li>
                                <li>Certificado de conformidad</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Guía rápida impresa</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_DLF >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_DLF . " </div>
                            <div style='margin: 0;'>x QC2 DLF</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QC2 DLF</li>
                                <li>Certificado de conformidad</li>
                                <li>Juego de 3 galgas para calibración</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Guía rápida impresa</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }
            
        $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;'>
                            <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Accesorios Opcionales</div>
                        </div>";

                            

    if ($s_rf >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_rf . " </div>
                            <div style='margin: 0;'>x Sonda recta Ferrosa. Rango: 0 a 1500μm</div>
                        </div>";
    }

    if ($s_rnf >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_rnf . " </div>
                            <div style='margin: 0;'>x Sonda recta No-Ferrosa. Rango: 0 a 1500μm</div>
                        </div>";
    }

    if ($s_rc >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_rc . " </div>
                            <div style='margin: 0;'>x Sonda recta Combinada (Ferrosa y No-Ferrosa). Rango: 0 a 1500μm</div>
                        </div>";
    }

    if ($s_rfv >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_rfv . " </div>
                            <div style='margin: 0;'>x Sonda recta Ferrosa con corte en V. Rango: 0 a 1500μm</div>
                        </div>";
    }

    if ($s_rex >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_rex . " </div>
                            <div style='margin: 0;'>x Sonda recta Ferrosa de Rango Extendido. Rango: 0 a 5000μm</div>
                        </div>";
    }

    if ($s_rex >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_rex . " </div>
                            <div style='margin: 0;'>x Juego de 3 Galgas de calibración para sondas de rango extendido</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                        <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Se incluye con la compra de la Sonda recta Ferrosa de Rango Extendido.</div>
                        </div>";
    }

    if ($s_mr >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_mr . " </div>
                            <div style='margin: 0;'>x Mini-Sonda Ferrosa recta. Rango: 0 a 750μm</div>
                        </div>";
    }

    if ($s_m90 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_m90 . " </div>
                            <div style='margin: 0;'>x Mini-Sonda Ferrosa a 90°. Rango: 0 a 750μm</div>
                        </div>";
    }

    if ($s_m45 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_m45 . " </div>
                            <div style='margin: 0;'>x Mini-Sonda Ferrosa a 45°. Rango: 0 a 750μm</div>
                        </div>";
    }

    if ($b_fc >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_fc . " </div>
                            <div style='margin: 0;'>x Base Ferrosa para calibración</div>
                        </div>";
    }

    if ($b_nfc >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_nfc . " </div>
                            <div style='margin: 0;'>x Base No-Ferrosa para calibración</div>
                        </div>";
    }

    if ($g_cal >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_cal . " </div>
                            <div style='margin: 0;'>x Galga para calibración</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Consulta de espesores disponibles en el apartado Observaciones</div>
                        </div>";
    }

    if ($g_cal3 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_cal3 . " </div>
                            <div style='margin: 0;'>x Juego de 3 galgas para calibración de espesores bajo, medio, alto</div>
                        </div>";
    }

    if ($g_cal3ex >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_cal3ex . " </div>
                            <div style='margin: 0;'>x Juego de 3 galgas para calibrar la sonda de rango extendido que mide de 0 a 5000μm</div>
                        </div>";
    }

    if ($ooa_gcal >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0'>
                            <div style='margin: 0 3px 0 0;'> " . $ooa_gcal . " </div>
                            <div style='margin: 0;'>x Certificación OAA para galgas individuales</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye galga</div>
                        </div>";
    }

    if ($ccq >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $ccq . " </div>
                            <div style='margin: 0;'>x Certificado de conformidad de fábrica confeccionado a partir de patrones internos.</div>
                        </div>";
    }

    if ($f_gr >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $f_gr . " </div>
                            <div style='margin: 0;'>x Funda protectora de silicona color Gris</div>
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


