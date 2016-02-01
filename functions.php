<?php
/**
 * @package WordPress
 * @subpackage Podol
 */
function is_wp_version( $is_ver ) {
    $wp_ver = explode( '.', get_bloginfo( 'version' ) );
    $is_ver = explode( '.', $is_ver );
    for( $i=0; $i<=count( $is_ver ); $i++ )
        if( !isset( $wp_ver[$i] ) ) array_push( $wp_ver, 0 );

    foreach( $is_ver as $i => $is_val )
        if( $wp_ver[$i] < $is_val ) return false;
    return true;
}

$themecolors = array(
	'bg' => 'ffffff',
	'text' => '555555',
	'link' => '557799',
	'border' => 'dddddd',
	'url' => 'b4c24b',
);

$content_width = 480;



// Custom background


add_theme_support( 'print-style' );

function change_custom_background_cb() {
    $background = get_background_image();
    $color = get_background_color();
    
    echo '<script language="javascript">';
	echo 'alert("change_custom_background_cb")';
	echo '</script>';
    
    if ( ! $background && ! $color )
        return;
 
    $style = $color ? "background-color: #$color;" : '';
 
    if ( $background ) {
        $image = " background-image: url('$background');";
 
        $repeat = get_theme_mod( 'background_repeat', 'repeat' );
 
        if ( ! in_array( $repeat, array( 'no-repeat', 'repeat-x', 'repeat-y', 'repeat' ) ) )
            $repeat = 'repeat';
 
        $repeat = " background-repeat: $repeat;";
 
        $position = get_theme_mod( 'background_position_x', 'left' );
 
        if ( ! in_array( $position, array( 'center', 'right', 'left' ) ) )
            $position = 'left';
 
        $position = " background-position: top $position;";
 
        $attachment = get_theme_mod( 'background_attachment', 'scroll' );
 
        if ( ! in_array( $attachment, array( 'fixed', 'scroll' ) ) )
            $attachment = 'scroll';
 
        $attachment = " background-attachment: $attachment;";
 
        $style .= $image . $repeat . $position . $attachment;
    }
?>
<style type="text/css">
body.custom-background { <?php echo trim( $style ); ?> }
</style>
<?php
}

    //add_theme_support( 'custom-background', array( 'wp-head-callback', 'change_custom_background_cb' ) );

    add_custom_background('change_custom_background_cb');


/**
 * Adds support for Custom Header Image.
 */

define( 'NO_HEADER_TEXT', true );

// The default header text color
define( 'HEADER_TEXTCOLOR', '' );

// By leaving empty, we default to random image rotation
define( 'HEADER_IMAGE', '' );

// The height and width of your custom header.
define( 'HEADER_IMAGE_WIDTH', 750 );
define( 'HEADER_IMAGE_HEIGHT', 120 );

// Add support for Manifest header image.
add_custom_image_header( '', 'podol_admin_header_style' );

add_theme_support( 'custom-header', array( 'random-default' => true ) );

/**
 * Styles the header image displayed on the Appearance > Header admin panel.
 */
function podol_admin_header_style() {
?>
	<style type="text/css">
	#headimg {
		width: <?php echo HEADER_IMAGE_WIDTH; ?>px;
		height: <?php echo HEADER_IMAGE_HEIGHT; ?>px;
	}
	#heading {
		display: none;
	}
	</style>
<?php
}




/**
 * Filters wp_title to print a neat <title> tag based on what is being viewed.
 *
 * @since Simpla 1.01
 */
function podol_wp_title( $title, $sep ) {

	// Add the blog name
	$title .= get_bloginfo( 'name' );

	return $title;
}
add_filter( 'wp_title', 'podol_wp_title', 10, 2 );

//
//
//
//
//
//
//

