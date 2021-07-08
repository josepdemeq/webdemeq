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
        $model_7B = !empty($_POST["val_QB7B"]) ? trim($_POST["val_QB7B"]) : NULL;
        $model_7E = !empty($_POST["val_QB7E"]) ? trim($_POST["val_QB7E"]) : NULL;
        $s_eh = !empty($_POST["s_eh"]) ? trim($_POST["s_eh"]) : NULL;
        $s_pte = !empty($_POST["s_pte"]) ? trim($_POST["s_pte"]) : NULL;
        $s_pta = !empty($_POST["s_pta"]) ? trim($_POST["s_pta"]) : NULL;
        $s_ptc = !empty($_POST["s_ptc"]) ? trim($_POST["s_ptc"]) : NULL;
        $s_cre = !empty($_POST["s_cre"]) ? trim($_POST["s_cre"]) : NULL;
        $s_cra = !empty($_POST["s_cra"]) ? trim($_POST["s_cra"]) : NULL;
        $s_cas = !empty($_POST["s_cas"]) ? trim($_POST["s_cas"]) : NULL;
        $s_sop = !empty($_POST["s_sop"]) ? trim($_POST["s_sop"]) : NULL;
        $kcal_b = !empty($_POST["kcal_b"]) ? trim($_POST["kcal_b"]) : NULL;
        $kcal_e = !empty($_POST["kcal_e"]) ? trim($_POST["kcal_e"]) : NULL;
        $kcal_ms = !empty($_POST["kcal_ms"]) ? trim($_POST["kcal_ms"]) : NULL;
        $kcal_ba = !empty($_POST["kcal_ba"]) ? trim($_POST["kcal_ba"]) : NULL;
        $kcal_bm = !empty($_POST["kcal_bm"]) ? trim($_POST["kcal_bm"]) : NULL;
        $b_a159 = !empty($_POST["b_a159"]) ? trim($_POST["b_a159"]) : NULL;
        $b_a318 = !empty($_POST["b_a318"]) ? trim($_POST["b_a318"]) : NULL; 
        $b_a476 = !empty($_POST["b_a476"]) ? trim($_POST["b_a476"]) : NULL;
        $b_a635 = !empty($_POST["b_a635"]) ? trim($_POST["b_a635"]) : NULL;
        $b_476 = !empty($_POST["b_476"]) ? trim($_POST["b_476"]) : NULL;
        $b_635 = !empty($_POST["b_635"]) ? trim($_POST["b_635"]) : NULL;
        $ca_0159 = !empty($_POST["ca_0159"]) ? trim($_POST["ca_0159"]) : NULL;
        $ca_0318 = !empty($_POST["ca_0318"]) ? trim($_POST["ca_0318"]) : NULL;
        $ca_0476 = !empty($_POST["ca_0476"]) ? trim($_POST["ca_0476"]) : NULL;
        $ca_g5 = !empty($_POST["ca_g5"]) ? trim($_POST["ca_g5"]) : NULL;
        $ca_b1 = !empty($_POST["ca_b1"]) ? trim($_POST["ca_b1"]) : NULL;
        $ca_b2 = !empty($_POST["ca_b2"]) ? trim($_POST["ca_b2"]) : NULL;
        $ca_b4 = !empty($_POST["ca_b4"]) ? trim($_POST["ca_b4"]) : NULL;
        $ca_b6 = !empty($_POST["ca_b6"]) ? trim($_POST["ca_b6"]) : NULL;
        $ca_b8 = !empty($_POST["ca_b8"]) ? trim($_POST["ca_b8"]) : NULL;
        $ca_b10 = !empty($_POST["ca_b10"]) ? trim($_POST["ca_b10"]) : NULL;
        $ca_b14 = !empty($_POST["ca_b14"]) ? trim($_POST["ca_b14"]) : NULL;
        $ca_b18 = !empty($_POST["ca_b18"]) ? trim($_POST["ca_b18"]) : NULL;
        $ca_b22 = !empty($_POST["ca_b22"]) ? trim($_POST["ca_b22"]) : NULL;
        $pd = !empty($_POST["pd"]) ? trim($_POST["pd"]) : NULL;
        $c_pd = !empty($_POST["c_pd"]) ? trim($_POST["c_pd"]) : NULL;
        $c_rs232 = !empty($_POST["c_rs232"]) ? trim($_POST["c_rs232"]) : NULL;
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

                        if ($model_7B >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                              <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_7B . " </div>
                                              <div style='margin: 0;font-weight:600;'>x QB7 B</div>
                                           </div>";
                        }

                        if ($model_7E >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $model_7E . " </div>
                                            <div style='margin: 0;font-weight:600;'>x QB7 E</div>
                                            </div>";
                        }
        
             $content.="<div style='width:100%;background: rgba(0,0,0,0.1);color: #000;width:100%;padding:10px;border-top:2px solid #000;border-bottom:1px solid #000000;font-weight: 600;'>
                            <div style='width: 100%;display: inline-block;margin: 0;'>Accesorios</div>
                        </div>";

                        if ($s_eh >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_eh . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBS301:</span> Sonda Efecto Hall con punta de titanio estándar</div>
                                            </div>";
                        }

                        if ($s_pte >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_pte . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA201:</span> Punta de titanio estándar para sonda efecto hall</div>
                                            </div>";
                        }

                        if ($s_pta >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_pta . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA202:</span> Punta de titanio angosta para sonda efecto hall</div>
                                            </div>";
                        }

                        if ($s_ptc >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_ptc . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA203:</span> Punta de titanio con punta &#34;cortafierro&#34; para sonda efecto hall</div>
                                            </div>";
                        }

                        if ($s_cre >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_cre . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA101:</span> Capuchón roscado que sostiene la punta de titanio estándar</div>
                                            </div>";
                        }

                        if ($s_cra >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_cra . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA102:</span> Capuchón roscado que sostiene la punta de titanio angosta</div>
                                            </div>";
                        }

                        if ($s_cas >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_cas . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBC102:</span> Cable de conexión con conectores Lemo para sonda efecto hall</div>
                                            </div>";
                        }

                        if ($s_sop >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $s_sop . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA300:</span> Soporte de 2 piezas para sonda efecto hall</div>
                                            </div>";
                        }

                        if ($kcal_b >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $kcal_b . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBK101:</span> Kit para QB7 B</div>
                                            </div>";
                        }

                        if ($kcal_e >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $kcal_e . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBK102:</span> Kit para QB7 E</div>
                                            </div>";
                        }

                        if ($kcal_ms >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $kcal_ms . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBK103:</span> Kit de calibración para cambio a modelo E. Agregar licencia QBL701</div>
                                            </div>";
                        }

                        if ($kcal_ba >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $kcal_ba . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBK201:</span> Kit de bolillas de Acero</div>
                                            </div>";
                        }

                        if ($kcal_bm >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $kcal_bm . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBK203:</span> Kit de bolillas Magnéticas</div>
                                            </div>";
                        }

                        if ($b_a159 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_a159 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR301:</span> Bolillas de acero de 1.59mm o 1/16&#34; (100 pz)</div>
                                            </div>";
                        }

                        if ($b_a318 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_a318 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR302:</span> Bolilla de acero de 3.18mm or 1/8&#34; (100 pz)</div>
                                            </div>";
                        }

                        if ($b_a476 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_a476 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR303:</span> Bolilla de acero de 4.76mm o 3/16&#34; (40 pz)</div>
                                            </div>";
                        }

                        if ($b_a635 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_a635 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR304:</span> Bolilla de acero de 6.35mm o 1/4&#34; (20 pz)</div>
                                            </div>";
                        }

                        if ($b_476 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_476 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR403:</span> Bolilla magnética de 4.76mm o 3/16&#34; (40 pz)</div>
                                            </div>";
                        }

                        if ($b_635 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $b_635 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR404:</span> Bolilla magnética de 6.35mm o 1/4&#34; (20 pz)</div>
                                            </div>";
                        }

                        if ($ca_0159 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_0159 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR201:</span> Calibrador &#34;cero&#34; para bolilla de 1.59mm o 1/16&#34;</div>
                                            </div>";
                        }

                        if ($ca_0318 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_0159 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR202:</span> Calibrador &#34;cero&#34; para bolilla de 3.18mm o 1/8&#34;</div>
                                            </div>";
                        }

                        if ($ca_0476 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_0476 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR203:</span> Calibrador &#34;cero&#34; para bolilla de 4.76mm o 3/16&#34;</div>
                                            </div>";
                        }

                        if ($ca_g25 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_g25 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR101:</span> Calibrador con galga patrón de 0.25mm o 0.009&#34;</div>
                                            </div>";
                        }

                        if ($ca_g5 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_g5 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR102:</span> Calibrador con galga patrón de 0.5mm o 0.019&#34;</div>
                                            </div>";
                        }

                        if ($ca_b1 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b1 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR103:</span> Calibrador con bloque patrón cerámico de 1mm o 0.039&#34;</div>
                                            </div>";
                        }

                        if ($ca_b2 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b2 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR104:</span> Calibrador con bloque patrón cerámico de 2mm o 0.078&#34;</div>
                                            </div>";
                        }

                        if ($ca_b4 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b4 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR105:</span> Calibrador con bloque patrón cerámico de 4mm o 0.157&#34;</div>
                                            </div>";
                        }

                        if ($ca_b6 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b6 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR106:</span> Calibrador con bloque patrón cerámico de 6mm o 0.236&#34;</div>
                                            </div>";
                        }

                        if ($ca_b8 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b8 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR107:</span> Calibrador con bloque patrón cerámico de 8mm o 0.314&#34;</div>
                                            </div>";
                        }

                        if ($ca_b10 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b10 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR108:</span> Calibrador con bloque patrón cerámico de 10mm o 0.393&#34;</div>
                                            </div>";
                        }

                        if ($ca_b14 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b14 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR109:</span> Calibrador con bloque patrón cerámico de 14mm o 0.551&#34;</div>
                                            </div>";
                        }

                        if ($ca_b18 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b18 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR110:</span> Calibrador con bloque patrón cerámico de 18mm o 0.708&#34;</div>
                                            </div>";
                        }

                        if ($ca_b22 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ca_b22 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBR111:</span> Calibrador con bloque patrón cerámico de 22mm o 0.866&#34;</div>
                                            </div>";
                        }

                        if ($pd >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $pd . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA400:</span> Pedal con cable y conector Lemo</div>
                                            </div>";
                        }

                        if ($c_pd >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_pd . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBA410:</span> Cable para pedal con conector Lemo</div>
                                            </div>";
                        }

                        if ($c_rs232 >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $c_rs232 . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x QBC303:</span> Cable RS232 de 1,5m</div>
                                            </div>";
                        }


                        if ($ccq >= 1) {
                            $content.="<div class='dato'style='background:#ffffff;;width:100%;padding:10px;display:flex;'>
                                            <div style='margin: 0 3px 0 0;font-weight:600;'> " . $ccq . " </div>
                                            <div style='margin: 0;'>
                                            <span style='font-weight:600;'>x ------:</span> Certificado de conformidad de fábrica</div>
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

    if ($model_7B >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_7B . " </div>
                            <div style='margin: 0;'>x QB7 B</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QB7 B</li>
                                <li>Sensor por efecto Hall</li>
                                <li>Cable para sensor</li>
                                <li>Set de calibración</li>
                                <li>Soporte para sensor</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }

    if ($model_7E >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $model_7E . " </div>
                            <div style='margin: 0;'>x QB7 E</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye:</div>
                            <ul style='margin: 0 10px 0 0;'>
                                <li>Unidad electrónica QB7 E</li>
                                <li>Sensor por efecto Hall</li>
                                <li>Cable para sensor</li>
                                <li>Set de calibración</li>
                                <li>Soporte para sensor</li>
                                <li>Cable USB para conexión a PC</li>
                                <li>Pendrive con software DataCenter</li>
                                <li>Manual de usuario</li>
                                <li>Maletín de alto impacto</li>
                            </ul>
                        </div>";
    }
            
        $content_conf.="<div style='color: #000;font-weight: 600;font-size: 18px;margin-top: 40px;padding-top: 40px; border-top: 1px solid #999;'>
                            <div style='width: 560px;display: inline-block;margin: 0 0 5px 0;'>Accesorios Opcionales</div>
                        </div>";

                            
    if ($s_eh >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_eh . " </div>
                            <div style='margin: 0;'>x Sonda Efecto Hall con punta de titanio estándar*</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*No incluye el cable</div>
                        </div>";
    }

    if ($s_pte >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_pte . " </div>
                            <div style='margin: 0;'>x Punta de titanio estándar para sonda efecto hall</div>
                        </div>";
    }

    if ($s_pta >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_pta . " </div>
                            <div style='margin: 0;'>x Punta de titanio angosta para sonda efecto hall</div>
                        </div>";
    }

    if ($s_ptc >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_ptc . " </div>
                            <div style='margin: 0;'>x Punta de titanio con punta &#34;cortafierro&#34; para sonda efecto</div>
                        </div>";
    }

    if ($s_cre >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_cre . " </div>
                            <div style='margin: 0;'>x Capuchón roscado que sostiene la punta de titanio estándar</div>
                        </div>";
    }

    if ($s_cra >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_cra . " </div>
                            <div style='margin: 0;'>x Capuchón roscado que sostiene la punta de titanio angosta</div>
                        </div>";
    }

    if ($s_cas >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_cas . " </div>
                            <div style='margin: 0;'>x Cable de conexión con conectores Lemo para sonda efecto hall</div>
                        </div>";
    }

    if ($s_sop >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $s_sop . " </div>
                            <div style='margin: 0;'>x Soporte de 2 piezas para sonda efecto hall</div>
                        </div>";
    }

    if ($kcal_b >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $kcal_b . " </div>
                            <div style='margin: 0;'>x Kit para QB7 B</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye maletín alto impacto con:</div>
                            <ul style='margin: 0 10px 0 0;'>
                            <li>Bolillas de 1/16&#34; (100 pz),  1/8&#34; (100 pz), 3/16&#34; (40 pz), 1/4&#34; (20 pz)</li>
                            <li>3 calibradores &#34;cero&#34; para bolillas de 1/16&#34; (100 pz), 1/8&#34; (100 pz), 3/16&#34; (40 pz)</li>
                            <li>Calibradores con patrones de 0.25mm (0.009&#34;), 0.5mm (0.019&#34;), 1mm (0.039&#34;), 2mm (0.078&#34;), 4mm (0.157&#34;), 6mm (0.236&#34;), 8mm (0.314&#34;)</li>
                            </ul>
                        </div>";
    }

    if ($kcal_e >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $kcal_e . " </div>
                            <div style='margin: 0;'>x Kit para QB7 E</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye maletín alto impacto con:</div>
                            <ul style='margin: 0 10px 0 0;'>
                            <li>Bolillas de 1/16&#34; (100 pz),  1/8&#34; (100 pz), 3/16&#34; (40 pz), 3/16&#34; magnetica (40 pz), 1/4&#34; (20 pz), 1/4&#34; magnética (20 pz)</li>
                            <li>3 calibradores &#34;cero&#34; para bolillas de 1/16&#34; (100 pz), 1/8&#34; (100 pz), 3/16&#34; (40 pz)</li>
                            <li>Calibradores con patrones de 0.25mm (0.009&#34;), 0.5mm (0.019&#34;), 1mm (0.039&#34;), 2mm (0.078&#34;), 4mm (0.157&#34;), 6mm (0.236&#34;), 8mm (0.314&#34;), 10mm (0.393&#34;), 14mm (0.551&#34;), 18mm (0.708&#34;), 22mm (0.866&#34;)</li>
                            </ul>
                        </div>";
    }

    if ($kcal_ms >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $kcal_ms . " </div>
                            <div style='margin: 0;'>x Kit de calibración para cambio a modelo E</div>
                        </div>
                        <div style='color: #000;display:block;margin: 5px 0 20px 22px;'>
                            <div style='margin: 5px 10px 0 0;'>Incluye maletín alto impacto con:</div>
                            <ul style='margin: 0 10px 0 0;'>
                            <li>Calibradores con patrones cerámicos de 10mm, 14mm, 18mm, 22mm</li>
                            <li>Bolillas magnéticas de 3/16&#34; (40 pz), 1/4'&#34; (20 pz).</li>
                            </ul>
                            <div style='margin: 0;font-style: italic;color: #989898;font-size: 14px;'>*Este kit se vende acompañado de la licencia que convierte su equipo en modelo QB7 E (Más información en la sección Licencias de nuestra web)</div>
                        </div>";
    }

    if ($kcal_ba >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0'>
                            <div style='margin: 0 3px 0 0;'> " . $kcal_ba . " </div>
                            <div style='margin: 0;'>x Kit de bolillas de Acero</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;'>Incluye bolillas de 1.59mm o 1/16&#34; (100 pz), 3.18mm o 1/8&#34; (100 pz), 4.76mm o 3/16&#34; (40 pz) y 6.35mm o 1/4&#34; (20 pz)</div>
                        </div>";
    }

    if ($kcal_bm >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 0 0'>
                            <div style='margin: 0 3px 0 0;'> " . $kcal_bm . " </div>
                            <div style='margin: 0;'>x Kit de bolillas Magnéticas</div>
                        </div>
                        <div style='color: #000;display:block;margin: 0 0 15px 22px;'>
                            <div style='margin: 0;'>Incluye bolillas de 4.76mm o 3/16&#34; (40 pz), 6.35mm o 1/4&#34; (20 pz)</div>
                        </div>";
    }

    if ($b_a159 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_a159 . " </div>
                            <div style='margin: 0;'>x Bolillas de acero de 1.59mm o 1/16&#34; (100 pz)</div>
                        </div>";
    }

    if ($b_a318 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_a318 . " </div>
                            <div style='margin: 0;'>x Bolilla de acero de 3.18mm or 1/8&#34; (100 pz)</div>
                        </div>";
    }

    if ($b_a476 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_a476 . " </div>
                            <div style='margin: 0;'>x Bolilla de acero de 4.76mm o 3/16&#34; (40 pz)</div>
                        </div>";
    }

    if ($b_a635 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_a635 . " </div>
                            <div style='margin: 0;'>x Bolilla de acero de 6.35mm o 1/4&#34; (20 pz)</div>
                        </div>";
    }

    if ($b_476 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_476 . " </div>
                            <div style='margin: 0;'>x Bolilla magnética de 4.76mm o 3/16&#34; (40 pz)</div>
                        </div>";
    }

    if ($b_635 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $b_635 . " </div>
                            <div style='margin: 0;'>x Bolilla magnética de 6.35mm o 1/4&#34; (20 pz)</div>
                        </div>";
    }

    if ($ca_0159 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_0159 . " </div>
                            <div style='margin: 0;'>x Calibrador &#34;cero&#34; para bolilla de 1.59mm o 1/16&#34;</div>
                        </div>";
    }

    if ($ca_0318 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_0318 . " </div>
                            <div style='margin: 0;'>x Calibrador &#34;cero&#34; para bolilla de 3.18mm o 1/8&#34;</div>
                        </div>";
    }

    if ($ca_0476 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_0476 . " </div>
                            <div style='margin: 0;'>x Calibrador &#34;cero&#34; para bolilla de 4.76mm o 3/16&#34;</div>
                        </div>";
    }

    if ($ca_g25 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_g25 . " </div>
                            <div style='margin: 0;'>x Calibrador con galga patrón de 0.25mm o 0.009&#34;</div>
                        </div>";
    }

    if ($ca_g5 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_g5 . " </div>
                            <div style='margin: 0;'>x Calibrador con galga patrón de 0.5mm o 0.019&#34;</div>
                        </div>";
    }

    if ($ca_b1 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b1 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 1mm o 0.039&#34;</div>
                        </div>";
    }

    if ($ca_b2 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b2 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 2mm o 0.078&#34;</div>
                        </div>";
    }

    if ($ca_b4 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b4 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 4mm o 0.157&#34;</div>
                        </div>";
    }

    if ($ca_b6 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b6 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 6mm o 0.236&#34;</div>
                        </div>";
    }

    if ($ca_b8 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b8 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 8mm o 0.314&#34;</div>
                        </div>";
    }

    if ($ca_b10 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b10 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 10mm o 0.393&#34;</div>
                        </div>";
    }

    if ($ca_b14 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b14 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 14mm o 0.551&#34;</div>
                        </div>";
    }

    if ($ca_b18 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b18 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 18mm o 0.708&#34;</div>
                        </div>";
    }

    if ($ca_b22 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ca_b22 . " </div>
                            <div style='margin: 0;'>x Calibrador con bloque patrón cerámico de 22mm o 0.866&#34;</div>
                        </div>";
    }

    if ($pd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $pd . " </div>
                            <div style='margin: 0;'>x Pedal con cable y conector Lemo</div>
                        </div>";
    }

    if ($c_pd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_pd . " </div>
                            <div style='margin: 0;'>x Cable para pedal con conector Lemo</div>
                        </div>";
    }

    if ($c_pd >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_pd . " </div>
                            <div style='margin: 0;'>x Cable para pedal con conector Lemo</div>
                        </div>";
    }

    if ($c_rs232 >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0 15px;'>
                            <div style='margin: 0 3px 0 0;'> " . $c_rs232 . " </div>
                            <div style='margin: 0;'>x Cable RS232 de 1,5m</div>
                        </div>";
    }

    if ($ccq >= 1) {
        $content_conf.="<div style='color: #000;display:flex;margin: 5px 0;'>
                            <div style='margin: 0 3px 0 0;'> " . $ccq . " </div>
                            <div style='margin: 0;'>x Certificado de conformidad de fábrica confeccionado a partir de patrones internos.</div>
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


