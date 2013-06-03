<div class="page">
    <div class="phd phd_clients">
        <?php print render($page['header']); ?>
    </div>
    <div class="pbd">
        <div class="mod mod_pro cs-clear">
            <div class="projectlist cs-clear">
            <ul id="project_filters">
                <li><a href="#" class="all">All</a></li>
                <li><a href="#commercial" class="commercial">Commercial</a></li>
                <li><a href="#office" class="office">Office</a></li>
                <li><a href="#residential" class="residential">Residential</a></li>
                <li><a href="#hospitality" class="hospitality">Hospitality</a></li>
                <li><a href="#architecture" class="architecture">Architecture</a></li>
            </ul>
            <?php print render($page['content']);?>
            </div>
        </div>
    </div>
    <div class="pft">
        <?php print render($page['footer']); ?>
    </div>
</div>



<script>
    var page_path = 'project';
</script>