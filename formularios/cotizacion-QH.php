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
        $model_7L = !empty($_POST["val_QH7L"]) ? trim($_POST["val_QH7L"]) : NULL;
        $model_7U = !empty($_POST["val_QH7U"]) ? trim($_POST["val_QH7U"]) : NULL;
        $model_7C = !empty($_POST["val_QH7C"]) ? trim($_POST["val_QH7C"]) : NULL;
        $model_5D = !empty($_POST["val_QH5D"]) ? trim($_POST["val_QH5D"]) : NULL;
        $model_5G = !empty($_POST["val_QH5G"]) ? trim($_POST["val_QH5G"]) : NULL;
        $model_5M = !empty($_POST["val_QH5M"]) ? trim($_POST["val_QH5M"]) : NULL;
        $model_5U = !empty($_POST["val_QH5U"]) ? trim($_POST["val_QH5U"]) : NULL;
        $model_2S = !empty($_POST["val_QH2S"]) ? trim($_POST["val_QH2S"]) : NULL;
        $model_2DLS = !empty($_POST["val_QH2DLS"]) ? trim($_POST["val_QH2DLS"]) : NULL;
        $model_2P = !empty($_POST["val_QH2P"]) ? trim($_POST["val_QH2P"]) : NULL;
        $model_2DLP = !empty($_POST["val_QH2DLP"]) ? trim($_POST["val_QH2DLP"]) : NULL;
        $di_dh2 = !empty($_POST["di_dh2"]) ? trim($_POST["di_dh2"]) : NULL;
        $di_dh5 = !empty($_POST["di_dh5"]) ? trim($_POST["di_dh5"]) : NULL;
        $di_dh7 = !empty($_POST["di_dh7"]) ? trim($_POST["di_dh7"]) : NULL;
        $di_dc = !empty($_POST["di_dc"]) ? trim($_POST["di_dc"]) : NULL;
        $di_dl = !empty($_POST["di_dl"]) ? trim($_POST["di_dl"]) : NULL; 
        $di_c = !empty($_POST["di_c"]) ? trim($_POST["di_c"]) : NULL;
        $di_g = !empty($_POST["di_g"]) ? trim($_POST["di_g"]) : NULL;
        $di_e = !empty($_POST["di_e"]) ? trim($_POST["di_e"]) : NULL;
        $s_10n = !empty($_POST["s_10n"]) ? trim($_POST["s_10n"]) : NULL;
        $s_50n = !empty($_POST["s_50n"]) ? trim($_POST["s_50n"]) : NULL;
        $s_98n = !empty($_POST["s_98n"]) ? trim($_POST["s_98n"]) : NULL;
        $aa_12 = !empty($_POST["aa_12"]) ? trim($_POST["aa_12"]) : NULL;
        $pa_50 = !empty($_POST["pa_50"]) ? trim($_POST["pa_50"]) : NULL;
        $pr_hld = !empty($_POST["pr_hld"]) ? trim($_POST["pr_hld"]) : NULL;
        $pr_hldl = !empty($_POST["pr_hldl"]) ? trim($_POST["pr_hldl"]) : NULL;
        $pr_hlg = !empty($_POST["pr_hlg"]) ? trim($_POST["pr_hlg"]) : NULL;
        $pr_vcd = !empty($_POST["pr_vcd"]) ? trim($_POST["pr_vcd"]) : NULL;
        $pr_vy10 = !empty($_POST["pr_vy10"]) ? trim($_POST["pr_vy10"]) : NULL;
        $pr_rccd = !empty($_POST["pr_rccd"]) ? trim($_POST["pr_rccd"]) : NULL; 
        $pr_rcy = !empty($_POST["pr_rcy"]) ? trim($_POST["pr_rcy"]) : NULL; 
        $pr_rbcd = !empty($_POST["pr_rbcd"]) ? trim($_POST["pr_rbcd"]) : NULL;
        $pr_rby = !empty($_POST["pr_rby"]) ? trim($_POST["pr_rby"]) : NULL;
        $pr_brcd = !empty($_POST["pr_brcd"]) ? trim($_POST["pr_brcd"]) : NULL;
        $pr_bry = !empty($_POST["pr_bry"]) ? trim($_POST["pr_bry"]) : NULL;
        $pr_clhld = !empty($_POST["pr_clhld"]) ? trim($_POST["pr_clhld"]) : NULL;
        $pr_chv10 = !empty($_POST["pr_chv10"]) ? trim($_POST["pr_chv10"]) : NULL;
        $f_ro = !empty($_POST["f_ro"]) ? trim($_POST["f_ro"]) : NULL;
        $c_di = !empty($_POST["c_di"]) ? trim($_POST["c_di"]) : NULL;
        $c_di = !empty($_POST["c_diuci"]) ? trim($_POST["c_diuci"]) : NULL;
        $c_imp = !empty($_POST["c_imp"]) ? trim($_POST["c_imp"]) : NULL;
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
                    <h1 style='color:#000000;font-weight:bold;font-size:22px;'> " . $name . " " . $surname . " de la empresa  " . $company . " nos env&iacute;a una solicitud de cotizaci&oacute;n.</h1>
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

                        

                        if ($tr_2_12 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_2_12 . " </div>
                                            <div style='margin: 0;'>x QSS201: Transductor de 2MHz Ø12mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_2_22 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_2_22 . " </div>
                                            <div style='margin: 0;'>x QSS202: Transductor de 2MHz Ø22mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_5_90 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5_90 . " </div>
                                            <div style='margin: 0;'>x QSS501: Transductor de 5MHz Ø10mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_5m_r >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5m_r . " </div>
                                            <div style='margin: 0;'>x QSS511: Transductor de 5MHz Ø10mm. Recto</div>
                                            </div>";
                        }

                        if ($tr_7_90 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_7_90 . " </div>
                                            <div style='margin: 0;'>x QSS701: Transductor de 7MHz Ø6mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_at_150 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_at_150 . " </div>
                                            <div style='margin: 0;'>x QSS518: Transductor de 5MHz alta temp -10 a 150°C. Recto</div>
                                            </div>";
                        }

                        if ($tr_at_350 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_at_350 . " </div>
                                            <div style='margin: 0;'>x QSS519: Transductor de 5MHz alta temp -10 a 350°C. Recto</div>
                                            </div>";
                        }

                        if ($tr_5_eco2 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5_eco2 . " </div>
                                            <div style='margin: 0;'>x QSS502: Transductor de 5MHz hi-damp para medir SOBRE PINTURA Ø10mm. 90°</div>
                                            </div>";
                        }

                        if ($tr_5_sk >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5_sk . " </div>
                                            <div style='margin: 0;'>x QSS531: Transductor de 5MHz hi-damp para medir SOBRE PINTURA similar Krautkramer. Ø10mm. Recto</div>
                                            </div>";
                        }

                        if ($tr_5_csk >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $tr_5_csk . " </div>
                                            <div style='margin: 0;'>x QSC531: Cable con 2 conectores tipo LEMO en ambas puntas (para transductor QSS531)</div>
                                            </div>";
                        }

                        if ($g_50 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_50  . " </div>
                                            <div style='margin: 0;'>x QSG005: Botella plástica con pico vertedor de 50cc</div>
                                            </div>";
                        }

                        if ($g_100 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $g_100  . " </div>
                                            <div style='margin: 0;'>x QSG010: Botella plástica con pico vertedor de 100cc</div>
                                            </div>";
                        }

                        if ($oaa_1 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $oaa_1  . " </div>
                                            <div style='margin: 0;'>x QSD001: Certificado de calibración QS2, QS3, QS5 B, QS5 DL</div>
                                            </div>";
                        }

                        if ($oaa_2 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $oaa_2  . " </div>
                                            <div style='margin: 0;'>x QSD002: Certificado de calibración QS5 E, QS5 DLE</div>
                                            </div>";
                        }

                        if ($pa_5 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_5 . " </div>
                                            <div style='margin: 0;'>x QSR005: Patrón escalonado de 5 pasos en acero al carbono</div>
                                            </div>";
                        }

                        if ($pa_10 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_10 . " </div>
                                            <div style='margin: 0;'>x QSR010: Patrón escalonado de 10 pasos en acero al carbono</div>
                                            </div>";
                        }

                        if ($pa_5_oaa >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_5_oaa . " </div>
                                            <div style='margin: 0;'>x QSD005: Certificacion OAA para patrón escalonado de 5 pasos</div>
                                            </div>";
                        }

                        if ($pa_10_oaa >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_10_oaa . " </div>
                                            <div style='margin: 0;'>x QSD010: Certificacion OAA para patrón escalonado de 10 pasos</div>
                                            </div>";
                        }

                        if ($f_am >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_am  . " </div>
                                            <div style='margin: 0;'>x QSP001: Funda Protectora Amarilla</div>
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
                            <div style='width: 49%;display: inline-block;margin: 0;'>Nombre y Apellido</div>
                            <div style='width: 49%;display: inline-block;margin: 0;'>Empresa</div>
                        </div>
                        <div style='margin-bottom: 20px;'>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $name . " </div>
                            <div style='width: 49%;display: inline-block;margin: 0;'> " . $company . " </div>
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

                            

    if ($tr_2_12 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_2_12 . " </div>
                            <div style='margin: 0;'>x Transductor de 2MHz Ø12mm. 90°</div>
                        </div>";
    }

    if ($tr_2_22 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_2_22 . " </div>
                            <div style='margin: 0;'>x Transductor de 2MHz Ø22mm. 90°</div>
                        </div>";
    }

    if ($tr_5_90 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_5_90 . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz Ø10mm. 90°</div>
                        </div>";
    }

    if ($tr_5m_r >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_5m_r . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz Ø10mm. Recto</div>
                        </div>";
    }

    if ($tr_7_90 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_7_90 . " </div>
                            <div style='margin: 0;'>x Transductor de 7MHz Ø6mm. 90°</div>
                        </div>";
    }

    if ($tr_at_150 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_at_150 . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz alta temp -10 a 150°C. Recto</div>
                        </div>";
    }

    if ($tr_at_350 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_at_350 . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz alta temp -10 a 350°C. Recto</div>
                        </div>";
    }

    if ($tr_5_eco2 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_5_eco2 . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz hi-damp para medir SOBRE PINTURA Ø10mm. 90°</div>
                        </div>";
    }

    if ($tr_5_sk >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_5_sk . " </div>
                            <div style='margin: 0;'>x Transductor de 5MHz hi-damp para medir SOBRE PINTURA similar Krautkramer. Ø10mm. Recto</div>
                        </div>";
    }

    if ($tr_5_csk >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $tr_5_csk . " </div>
                            <div style='margin: 0;'>x Cable con 2 conectores tipo LEMO en ambas puntas (compatible con transductor similar Krautkramer</div>
                        </div>";
    }

    if ($g_50 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_50 . " </div>
                            <div style='margin: 0;'>x Botella plástica con pico vertedor de 50cc</div>
                        </div>";
    }

    if ($g_100 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $g_100 . " </div>
                            <div style='margin: 0;'>x Gel Botella plástica con pico vertedor de 100cc</div>
                        </div>";
    }

    if ($oaa_1 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $oaa_1 . " </div>
                            <div style='margin: 0;'>x Certificado de calibración QS2, QS3, QS5 B, QS5 DL</div>
                        </div>";
    }

    if ($oaa_2 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $oaa_2 . " </div>
                            <div style='margin: 0;'>x Certificado de calibración QS5 E, QS5 DLE</div>
                        </div>";
    }

    if ($pa_5 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_5 . " </div>
                            <div style='margin: 0;'>x Patrón escalonado de 5 pasos en acero al carbono</div>
                        </div>";
    }

    if ($pa_10 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_10 . " </div>
                            <div style='margin: 0;'>x Patrón escalonado de 10 pasos en acero al carbono</div>
                        </div>";
    }

    if ($pa_5_oaa >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_5_oaa . " </div>
                            <div style='margin: 0;'>x Certificacion OAA para patrón escalonado de 5 pasos</div>
                        </div>";
    }

    if ($pa_10_oaa >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_10_oaa . " </div>
                            <div style='margin: 0;'>x Certificacion OAA para patrón escalonado de 10 pasos</div>
                        </div>";
    }

    if ($f_am >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $f_am . " </div>
                            <div style='margin: 0;'>x Funda Protectora Amarilla</div>
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


