<?php

$kandidatenDAO = new kandidatenDAO();


$app->get('/kandidaten/?',function() use ($kandidatenDAO){
    header("Content-Type: application/json");
    echo json_encode($kandidatenDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});


$app->post('/kandidaten/?', function() use ($app, $kandidatenDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($kandidatenDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});




