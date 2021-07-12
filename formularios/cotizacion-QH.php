<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        #Reemplazar este correo por el correo electrónico del destinatario
        $mail_to = "josep@demeq.com, david@demeq.com";
        $email_subject = "Cotización - WEB";
        
        # Envío de datos
        $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $company = trim($_POST["company"]);
        $cuit = trim($_POST["cuit"]);
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
        $pr_hlc = !empty($_POST["pr_hlc"]) ? trim($_POST["pr_hlc"]) : NULL;
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
        $ccq = !empty($_POST["ccq"]) ? trim($_POST["ccq"]) : NULL;
        $f_ro = !empty($_POST["f_ro"]) ? trim($_POST["f_ro"]) : NULL;
        $c_di = !empty($_POST["c_di"]) ? trim($_POST["c_di"]) : NULL;
        $c_diuci = !empty($_POST["c_diuci"]) ? trim($_POST["c_diuci"]) : NULL;
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

                        if ($model_7L >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                              <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_7L . " </div>
                                              <div style='margin: 0;font-weight:600;'>x QH7 L</div>
                                           </div>";
                        }

                        if ($model_7U >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_7U . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH7 U</div>
                                            </div>";
                        }

                        if ($model_7C >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_7C . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH7 C</div>
                                            </div>";
                        }

                        if ($model_5D >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5D . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH5 D</div>
                                            </div>";
                        }

                        if ($model_5G >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5G . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH5 G</div>
                                            </div>";
                        }

                        if ($model_5M >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5M . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH5 M</div>
                                            </div>";
                        }

                        if ($model_5U >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_5U . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QS5 U</div>
                                            </div>";
                        }

                        if ($model_2S >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2S . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH2 S</div>
                                            </div>";
                        }

                        if ($model_2DLS >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2DLS . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH2 DLS</div>
                                            </div>";
                        }

                        if ($model_2P >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2P . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH2 P</div>
                                            </div>";
                        }

                        if ($model_2DLP >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_2DLP . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QH2 DLP</div>
                                            </div>";
                        }
        
             $content.="<div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Accesorios</div>
                        </div>";

                        if ($di_dh2 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_dh2 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS100:</span> Dispositivo de impacto tipo D con cable y conector</div>
                                            </div>";
                        }

                        if ($di_dh5 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_dh5 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS101:</span> Dispositivo de impacto tipo D con Cal-Tag, cable y conector</div>
                                            </div>";
                        }

                        if ($di_dh7 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_dh7 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS102:</span> Dispositivo de impacto tipo D con Cal-Tag, Gyro-Tag, cable y conector</div>
                                            </div>";
                        }

                        if ($di_dc >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_dc . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS201:</span> Dispositivo de impacto tipo DC con cable y conector</div>
                                            </div>";
                        }

                        if ($di_dl >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_dl . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS301:</span> Dispositivo de impacto tipo DL con cable y conector</div>
                                            </div>";
                        }

                        if ($di_c >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_c . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS501:</span> Dispositivo de impacto tipo C con cable y conector</div>
                                            </div>";
                        }

                        if ($di_g >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_g . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS601:</span> Dispositivo de impacto tipo G con cable y conector</div>
                                            </div>";
                        }

                        if ($di_e >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $di_e . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS701:</span> Dispositivo de impacto tipo E con diamante sintético para durezas altas, cable y conector</div>
                                            </div>";
                        }

                        if ($s_10n >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_10n . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS110:</span> Sonda UCI de 10N con cable y conector</div>
                                            </div>";
                        }

                        if ($s_50n >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_50n . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS150:</span> Sonda UCI de 50N con cable y conector</div>
                                            </div>";
                        }

                        if ($s_98n >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_98n . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHS198:</span> Sonda UCI de 98N con cable y conector</div>
                                            </div>";
                        }

                        if ($aa_12 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $aa_12 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHA012:</span> Juego de 12 anillos para medir superficies concavas y convexas</div>
                                            </div>";
                        }

                        if ($pa_50 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pa_50 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHG005:</span> Pasta de acople estándar 50cc</div>
                                            </div>";
                        }

                        if ($pr_hld >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_hld . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR101:</span> Patrón de referencia HLD</div>
                                            </div>";
                        }

                        if ($pr_hldl >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_hldl . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR102:</span> Patrón de referencia HLDL</div>
                                            </div>";
                        }

                        if ($pr_hlc >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_hlc . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR103:</span> Patrón de referencia HLC</div>
                                            </div>";
                        }

                        if ($pr_hlg >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_hlg . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR107:</span> Patrón de referencia HLG</div>
                                            </div>";
                        }

                        if ($pr_vcd >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_vcd . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR501:</span> Patrones Vickers (Aclaracón en apartado Observaciones)</div>
                                            </div>";
                        }

                        if ($pr_vy10 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_vy10 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x YHR501:</span> Patrones Vickers HV10 marca YAMAMOTO con certificado</div>
                                            </div>";
                        }

                        if ($pr_rccd >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_rccd . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR201:</span> Patrones Rockwell C (Aclaracón en apartado Observaciones)</div>
                                            </div>";
                        }

                        if ($pr_rcy >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_rcy . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x YHR201:</span> Patrones Rockwell C marca YAMAMOTO con certificado</div>
                                            </div>";
                        }

                        if ($pr_rbcd >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_rbcd . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR301:</span> Patrones Rockwell B (Aclaracón en apartado Observaciones)</div>
                                            </div>";
                        }

                        if ($pr_rby >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_rby . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x YHR301:</span> Patrones Rockwell B marca YAMAMOTO con certificado</div>
                                            </div>";
                        }

                        if ($pr_brcd >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_brcd . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHR401:</span> Patrones Brinell (Aclaracón en apartado Observaciones)</div>
                                            </div>";
                        }

                        if ($pr_bry >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_bry . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x YHR401:</span> Patrones Brinell marca YAMAMOTO con certificado</div>
                                            </div>";
                        }

                        if ($pr_clhld >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_clhld . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHD101:</span> Certificación patron Leeb HLD con trazabilidad INTI</div>
                                            </div>";
                        }

                        if ($pr_chv10 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pr_chv10 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHD501:</span> Certificacion patron Vickers HV10 con trazabilidad INTI</div>
                                            </div>";
                        }

                        if ($ccq >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ccq . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x ------:</span> Certificado de conformidad de fábrica</div>
                                            </div>";
                        }

                        if ($f_ro >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $f_ro . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHP001:</span> Funda protectora de silicona color Rojo</div>
                                            </div>";
                        }

                        if ($c_di >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_di . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHC101:</span> Cable con conector para dispositivos de impacto dmq</div>
                                            </div>";
                        }

                        if ($c_diuci >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_diuci . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QHC105:</span> Cable con conector para sondas UCI dmq</div>
                                            </div>";
                        }

                        if ($c_imp >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_diuci . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QAC001:</span> Cable para conexión de impresora térmica a equipos dmq</div>
                                            </div>";
                        }

                        if ($impr >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $impr . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QAI001:</span> Impresora térmica para equipos dmq</div>
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

    if ($model_7L >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_7L . " </div>
                            <div style='margin: 0;'>x QH7 L</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH7 L</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Patrón de referencia HLD</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_7U >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_7U . " </div>
                            <div style='margin: 0;'>x QH7 U</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH7 U</li>
                                <li>Sensor UCI</li>
                                <li>Patrón de referencia HV</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_7C >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_7C . " </div>
                            <div style='margin: 0;'>x QH7 C</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH7 C</li>
                                <li>Sensor UCI</li>
                                <li>Patrón de referencia HV</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Patrón de referencia HLD</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5D >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5D . " </div>
                            <div style='margin: 0;'>x QH5 D</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH5 D</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Patrón de referencia HLD</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5G >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5G . " </div>
                            <div style='margin: 0;'>x QH5 G</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH5 G</li>
                                <li>Dispositivo de impacto G</li>
                                <li>Patrón de referencia HLG</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5M >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5M . " </div>
                            <div style='margin: 0;'>x QH5 M</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH5 M</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Patrón de referencia HLD</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_5U >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_5U . " </div>
                            <div style='margin: 0;'>x QH5 U</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH5 U</li>
                                <li>Sensor UCI</li>
                                <li>Patrón de referencia HV</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_2S >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_2S . " </div>
                            <div style='margin: 0;'>x QH2 S</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH2 S</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Certificado de conformidad</li>
                                <li>Guía rápida impresa</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_2DLS >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_2DLS . " </div>
                            <div style='margin: 0;'>x QH2 DLS</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH2 DLS</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Certificado de conformidad</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Guía rápida impresa</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_2P >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_2P . " </div>
                            <div style='margin: 0;'>x QH2 P</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH2 P</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Patrón de referencia HLD</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Guía rápida impresa</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_2DLP >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_2DLP . " </div>
                            <div style='margin: 0;'>x QH2 DLP</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QH2 DLP</li>
                                <li>Dispositivo de impacto D</li>
                                <li>Patrón de referencia HLD</li>
                                <li>Certificado de conformidad</li>
                                <li>Pasta para acople</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Guía rápida impresa</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }
            
        $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;'>
                            <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Accesorios Opcionales</div>
                        </div>";

                            

    if ($di_dh2 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_dh2 . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo D con cable y conector. Compatible con Serie QH2</div>
                        </div>";
    }

    if ($di_dh5 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_dh5 . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo D con Cal-Tag, cable y conector. Compatible con Serie QH5</div>
                        </div>";
    }

    if ($di_dh7 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_dh7 . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo D con Cal-Tag, Gyro-Tag, cable y conector. Compatible con Serie QH7</div>
                        </div>";
    }

    if ($di_dc >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_dc . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo DC con cable y conector</div>
                        </div>";
    }

    if ($di_dl >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_dl . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo DL con cable y conector</div>
                        </div>";
    }

    if ($di_c >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_c . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo C con cable y conector</div>
                        </div>";
    }

    if ($di_g >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_g . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo G con cable y conector*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Debe adquirir un patron HLG para dispositivo de impacto G</div>
                        </div>";
    }

    if ($di_e >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $di_e . " </div>
                            <div style='margin: 0;'>x Dispositivo de impacto tipo E con diamante sintético para durezas altas, cable y conector</div>
                        </div>";
    }

    if ($s_10n >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_10n . " </div>
                            <div style='margin: 0;'>x Sonda UCI de 10N con cable y conector</div>
                        </div>";
    }

    if ($s_50n >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_50n . " </div>
                            <div style='margin: 0;'>x Sonda UCI de 50N con cable y conector</div>
                        </div>";
    }

    if ($s_98n >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_98n . " </div>
                            <div style='margin: 0;'>x Sonda UCI de 98N con cable y conector</div>
                        </div>";
    }

    if ($aa_12 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $aa_12 . " </div>
                            <div style='margin: 0;'>x Juego de 12 anillos para medir superficies concavas y convexas. Compatibles con los dispositivos de impacto D, DC, C. </div>
                        </div>";
    }

    if ($pa_50 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pa_50 . " </div>
                            <div style='margin: 0;'>x Pasta de acople estándar para utilización en piezas chicas. 50cc</div>
                        </div>";
    }

    if ($pr_hld >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_hld . " </div>
                            <div style='margin: 0;'>x Patrón de referencia HLD. Compatible con dispositivos de impacto D, DC.</div>
                        </div>";
    }

    if ($pr_hldl >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_hldl . " </div>
                            <div style='margin: 0;'>x Patrón de referencia HLDL. Compatible con dispositivos de impacto DL.</div>
                        </div>";
    }

    if ($pr_hlc >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_hlc . " </div>
                            <div style='margin: 0;'>x Patrón de referencia HLC. Compatible con dispositivos de impacto C.</div>
                        </div>";
    }

    if ($pr_hlg >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_hlg . " </div>
                            <div style='margin: 0;'>x Patrón de referencia HLG. Compatible con dispositivos de impacto G.</div>
                        </div>";
    }

    if ($pr_vcd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_vcd . " </div>
                            <div style='margin: 0;'>x Patrones Vickers*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Consulta de durezas disponibles en el apartado Observaciones</div>
                        </div>";
    }

    if ($pr_vy10 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_vy10 . " </div>
                            <div style='margin: 0;'>x Patrones Vickers HV10 marca YAMAMOTO con certificado.</div>
                        </div>";
    }

    if ($pr_rccd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_rccd . " </div>
                            <div style='margin: 0;'>x Patrones Rockwell C*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Consulta de durezas disponibles en el apartado Observaciones</div>
                        </div>";
    }

    if ($pr_rcy >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_rcy . " </div>
                            <div style='margin: 0;'>x Patrones Rockwell C marca YAMAMOTO con certificado.</div>
                        </div>";
    }

    if ($pr_rbcd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_rccd . " </div>
                            <div style='margin: 0;'>x Patrones Rockwell B*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Consulta de durezas disponibles en el apartado Observaciones</div>
                        </div>";
    }

    if ($pr_rby >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_rcy . " </div>
                            <div style='margin: 0;'>x Patrones Rockwell B marca YAMAMOTO con certificado.</div>
                        </div>";
    }

    if ($pr_brcd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_brcd . " </div>
                            <div style='margin: 0;'>x Patrones Brinell*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Consulta de durezas disponibles en el apartado Observaciones</div>
                        </div>";
    }

    if ($pr_bry >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_bry . " </div>
                            <div style='margin: 0;'>x Patrones Brinell marca YAMAMOTO con certificado.</div>
                        </div>";
    }

    if ($pr_clhld >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_clhld . " </div>
                            <div style='margin: 0;'>x Certificación patron Leeb HLD con trazabilidad INTI*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye patrón</div>
                        </div>";
    }

    if ($pr_chv10 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pr_chv10 . " </div>
                            <div style='margin: 0;'>x Certificación patron Vickers HV10 con trazabilidad INTI*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 222px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye patrón</div>
                        </div>";
    }

    if ($ccq >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ccq . " </div>
                            <div style='margin: 0;'>x Certificado de conformidad de fábrica confeccionado a partir de patrones internos.</div>
                        </div>";
    }

    if ($f_ro >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $f_ro . " </div>
                            <div style='margin: 0;'>x Funda protectora de silicona color rojo</div>
                        </div>";
    }
    if ($c_di >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_di . " </div>
                            <div style='margin: 0;'>x Cable con conector para dispositivos de impacto dmq</div>
                        </div>";
    }

    if ($c_diuci >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_diuci . " </div>
                            <div style='margin: 0;'>x Cable con conector para sondas UCI dmq</div>
                        </div>";
    }

    if ($c_imp >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 22px;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_imp . " </div>
                            <div style='margin: 0;'>x Cable para conexión de impresora térmica a equipos dmq</div>
                        </div>";
    }

    if ($impr >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $impr . " </div>
                            <div style='margin: 0;'>Impresora térmica para equipos dmq*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye cable de conexión</div>
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


