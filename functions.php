<?php

function myScripts(){
    // wp_enqueue_style( 'main-stylesheet', get_stylesheet_uri());
    wp_enqueue_style( 'main-stylesheet', get_template_directory_uri() . '/dist/main.css');

    wp_enqueue_script( 'main-js', get_template_directory_uri() .'/dist/bundle.js',array(), '1.0', true);
    // important to put an empty array of dependencies, version and true for loading i footer
}

add_action('wp_enqueue_scripts', 'myScripts');

?>