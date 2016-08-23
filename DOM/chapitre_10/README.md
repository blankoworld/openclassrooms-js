Il faut un serveur Apache lancé sur le dossier chapitre_10 comme dossier root.

Et avec les options suivantes (Apache2) : 

```
<IfModule mod_headers.c>
# Accept cross-domain requests
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

Ou bien sous Nginx (avec php-fpm) : 

```
server { 
 server_name localhost;
 root /home/olivier/tests/js/DOM/chapitre_10;
 index index.php index.html index.htm;
 listen 80;
 add_header     Access-Control-Allow-Headers  Content-Type;
 add_header     Access-Control-Allow-Origin  *;
 autoindex on;

 location ~* \.php$ {
  fastcgi_index  index.php;
  fastcgi_pass  127.0.0.1:9000;
  include     fastcgi_params;
  fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
  fastcgi_param  SCRIPT_NAME    $fastcgi_script_name;
 }
}
```

Il s'agit également de faire fonctionner php sur le dossier courant.

ATTENTION : vérifier les permissions du dossier javascript-web-srv afin que l'utilisateur PHP-fpm puisse écrire dessus (par exemple changer le groupe en www-data)
