<div class="mod mod_before_after">
    <ul id="bxslider" class="before_after_pic cs-clear" style="height:423px;overflow:hidden;" >
        <?php foreach($node->field_image['und'] as $image): ?>
            <img src="<?php print image_style_url('project',$image['uri']);?>" alt="<?php print $image['alt']?>" />
        <?php endforeach;?>
    </ul>
    <div class="bef_aft_info">
        <h2><?php print $node->title;?></h2>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Object</p><p><?php print $node->field_object['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Cilent</p><p><?php print $node->field_client['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Surface</p><p><?php print $node->field_surface['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Year</p><p><?php print $node->field_year['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Location</p><p><?php print $node->field_location['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Design</p><p><?php print $node->field_design['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Team</p><p><?php print $node->field_team['und'][0]['value'];?></p></div>
        <div class="bef_aft_fi cs-clear"><p class="bef_aft_label">Detail</p><p><?php print $node->body['und'][0]['value'];?></p></div>
    </div>
</div>