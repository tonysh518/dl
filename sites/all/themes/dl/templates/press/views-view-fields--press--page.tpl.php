<?php
    global $base_path;
    $gallery = explode(',',$fields['field_image_1']->content);
?>
<a rel="press-<?php print $fields['nid']->content;?>" href="<?php print $fields['field_image']->content;?>" class="project_item press_item">
    <?php print $fields['field_cover']->content;?>
    <div class="pro_hover">
        <p class="pro_info"><?php print str_replace(' ', '<br />',$fields['title']->content);?></p>
        <p class="pro_shade"></p>
    </div>
</a>
<?php foreach($gallery as $image):?>
    <a class="press_item" rel="press-<?php print $fields['nid']->content;?>" href="<?php print $image;?>"></a>
<?php endforeach;?>