<?php global $base_path;?>
<a href="<?php print $base_path.drupal_get_path_alias('node/'.$fields['nid']->content);?>" class="project_item">
    <?php print $fields['field_image']->content;?>
    <div class="pro_hover">
        <p class="pro_info"><?php print str_replace(' ', '<br />',$fields['title']->content);?></p>
        <p class="pro_shade"></p>
    </div>
</a>
