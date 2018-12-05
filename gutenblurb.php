<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     KarenCodes\Gutenblurb
 * @author      Karen Neumann with lots of help from Zac Gordon (@zgordon)
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: Gutenberg - Gutenblurb
 * Plugin URI:  http://gutenblurb.com
 * Description: A plugin containing Gutenberg Blurb
 * Version:     1.0
 * Author:      Karen Neumann
 * Author URI:  https://twitter.com/karencodes
 * Text Domain: gutenblurb
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * update from github using https://github.com/afragen/github-updater
 * GitHub Plugin URI: https://github.com/KarenCodes/gutenblurb
 */

namespace KarenCodes\Gutenblurb;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Register meta boxes
include __DIR__ . '/lib/meta-boxes.php';

// Block Templates
include __DIR__ . '/lib/block-templates.php';

// Dynamic Blocks
//include __DIR__ . '/blocks/12-dynamic/index.php';
