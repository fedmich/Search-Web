<?php
// Get and sanitize the 'uri' parameter in one step
$uri = isset($_GET['uri']) ? htmlspecialchars(trim($_GET['uri']), ENT_QUOTES, 'UTF-8') : '';

// Check if the URI is empty and echo the appropriate response
if ($uri === '') {
    echo '.';
} else {
    echo $uri;
}
