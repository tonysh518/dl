<div class="page">
    <div class="phd phd_clients">
        <?php print render($page['header']); ?>
    </div>
    <div class="pbd cs-clear">
        <div style="height:364px;overflow:hidden;float: left;width:556px;">
            <ul class="mod mod_aboutslide" >
                <li><img src="demo/demo1.jpg" width="556" height="364" /></li>
                <li><img src="demo/demo1.jpg" width="556" height="364" /></li>
                <li><img src="demo/demo1.jpg" width="556" height="364" /></li>
                <li><img src="demo/demo1.jpg" width="556" height="364" /></li>
            </ul>
        </div>
        <div class="mod mod_aboutcon">
            <h2><?php print $node->title?></h2>
            <?php print $node->body[und][0][value]?>
        </div>
    </div>
    <div class="pft">
        <?php print render($page['footer']); ?>
    </div>
</div>

<script>
    var page_path = 'studio';
</script>