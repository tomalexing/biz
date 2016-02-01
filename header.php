<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <![endif]-->
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> -->
        <title>	<?php  wp_title(); ?></title> 
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link href="<?php bloginfo('template_directory'); ?>/images/favicon.png" rel="shortcut icon" type="image/x-icon" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700%7Csubset=latin,cyrillic' rel='stylesheet' type='text/css'>
        <link href="<?php bloginfo('template_directory'); ?>/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="<?php bloginfo('template_directory'); ?>/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="<?php bloginfo('template_directory'); ?>/css/blueimp-gallery.min.css" rel="stylesheet" type="text/css" />
        <link href="<?php bloginfo('template_directory'); ?>/style.css" rel="stylesheet" type="text/css" />
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body id="home" class="index">
        <!-- preloader -->
        <!-- <div id="page-preloader" class="pageload-overlay pageload-loading"></div> -->
        <!-- preloader end -->

        <header class="home-page">
            <!-- main menu -->
            <nav class="navbar main-menu">
                <div class="container">
                    <a class="main-logo" href="<?php bloginfo('template_directory'); ?>/index.php">
                        <img src="<?php bloginfo('template_directory'); ?>/images/logo.svg" alt="">        
                    </a>
                    <ul class="nav navbar-nav">
                        <li class="dropdown">
                            <a href="#about">ABOUT COMPANY</a>
                        </li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#customers">CLIENTS</a></li>
                        <li><a href="#contacts">CONTACTS</a></li>
                    </ul>
                </div>
            </nav>
            <!-- main menu -->
        </header>