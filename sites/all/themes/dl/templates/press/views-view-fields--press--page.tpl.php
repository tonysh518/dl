<?php global $base_path;?>
<a href="<?php print $fields['field_image']->content;?>" class="project_item press_item">
    <?php print $fields['field_cover']->content;?>
    <div class="pro_hover">
        <p class="pro_info"><?php print str_replace(' ', '<br />',$fields['title']->content);?></p>
        <p class="pro_shade"></p>
    </div>
</a>
