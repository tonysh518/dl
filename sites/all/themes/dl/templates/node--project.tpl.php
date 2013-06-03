<?php
$prev_nid = prev_next_nid($node->nid, 'prev');
$prev_path = drupal_get_path_alias('node/'.$prev_nid);
$prev_title = node_load($prev_nid)->title;
$next_nid = prev_next_nid($node->nid, 'next');
$next_path = drupal_get_path_alias('node/'.$next_nid);
$next_title = node_load($next_nid)->title;
?>
<div class="mod mod_before_after">
    <div class="project_gallery_wrap">
        <ul data-prev-title="<?php print $prev_title;?>" data-next-title="<?php print $next_title;?>" data-next-path="<?php print $next_path;?>" data-prev-path="<?php print $prev_path;?>" id="bxslider" class="before_after_pic cs-clear" style="height:423px;overflow:hidden;" >
            <?php foreach($node->field_image['und'] as $image): ?>
                <img src="<?php print image_style_url('project',$image['uri']);?>" alt="<?php print $image['alt']?>" />
            <?php endforeach;?>
        </ul>
    </div>
    <div class="bef_aft_info">
        <h2><?php print $node->title;?></h2>
        <?php if(!empty($node->field_object['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Object</p><p><?php print $node->field_object['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->field_client['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Cilent</p><p><?php print $node->field_client['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->field_surface['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Surface</p><p><?php print $node->field_surface['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->field_year['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Year</p><p><?php print $node->field_year['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->field_location['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Location</p><p><?php print $node->field_location['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->field_design['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Design</p><p><?php print $node->field_design['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->field_team['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Team</p><p><?php print $node->field_team['und'][0]['value'];?></p></div>
        <?php endif;?>
        <?php if(!empty($node->body['und'][0]['value'])):?>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Detail</p><p><?php print $node->body['und'][0]['value'];?></p></div>
        <?php endif;?>
    </div>
</div>

