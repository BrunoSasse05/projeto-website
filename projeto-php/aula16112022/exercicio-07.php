<?php

$estados = array (
    "SC"=> array ("1" => "Rio do Sul", "2" => "Blumenau","3" => "Joinville"),
    "RS"=> array ("1" => "Porto Alegre", "2" => "Caxias do Sul", "3" => "Santa Rosa"),
    "PR"=> array ("1" => "Curitiba", "2" => "Pato Branco", "3" => "Londrina"));

    $html_tabela = '<table border="1">
    <thead>
        <th>Estado</th>
        <th>Cidades</th>
    </thead>
    <tbody>';
    foreach ($estados as $key => $value){
        // echo '<br> Chave:' . $key . json_encode($value);
        // implode separa pela virgula
        // echo '<br> Chave:' . $key . ' - ' . implode(",", $value);

        $sigla_estado = $key;
        $cidades = implode(",", $value);

        // Inicia a linha
        $html_linha_tabela = '<tr>';
        // Inicia as colunas
        $html_linha_tabela .= '<td>' . $sigla_estado . '</td>';
        $html_linha_tabela .= '<td>' . $cidades . '</td>';

        // finaliza a linha
        $html_linha_tabela .= '</tr>';

        // Adiciona a linha na tabela
        $html_tabela .= $html_linha_tabela;
    }

    $html_tabela .= '</tbody>';

    echo $html_tabela;