<?php
/**
 * Override of theme('breadcrumb').
 */
function full_rubik_breadcrumb($vars) {
  $output = '';

  // // Add current page onto the end.
  // if (!drupal_is_front_page()) {
  //   $item = menu_get_item();
  //   $end = end($vars['breadcrumb']);
  //   if ($end && strip_tags($end) !== $item['title']) {
  //     $vars['breadcrumb'][] = (isset($item['localized_options']['html']) && $item['localized_options']['html']) ? $item['title'] : check_plain($item['title']);
  //   }
  // }

  if (isset($vars['breadcrumb'][3])) {  // If we are 4 levels deep in the breadcrumb
    $pages = array("News", "Articles", "Press Releases");
    preg_match('/(?<=\>).*?(?=\<)/', $vars['breadcrumb'][1], $lists);

    if (in_array($lists[0], $pages)) {  // check if we are on the "News", "Articles", or "Press Releases" pages
      preg_match('/(?<=\>).*?(?=\<)/', $vars['breadcrumb'][3], $match);
      switch ($match[0]) {
        case '01':
          $month = "January";
          break;
        case '02':
          $month = "February";
          break;
        case '03':
          $month = "March";
          break;
        case '04':
          $month = "April";
          break;
        case '05':
          $month = "May";
          break;
        case '06':
          $month = "June";
          break;
        case '07':
          $month = "July";
          break;
        case '08':
          $month = "August";
          break;
        case '09':
          $month = "September";
          break;
        case '10':
          $month = "October";
          break;
        case '11':
          $month = "November";
          break;
        case '12':
          $month = "December";
          break;
        
        default:
          $month = $match[0];
          break;
      }
      $vars['breadcrumb'][3] = preg_replace('/(?<=\>).*?(?=\<)/', $month, $vars['breadcrumb'][3]);  // then replace the breadcrumb item for "month" with the month's full name
    }
  }

  // Optional: Add the site name to the front of the stack.
  if (!empty($vars['prepend'])) {
    $site_name = empty($vars['breadcrumb']) ? "<strong>". check_plain(variable_get('site_name', '')) ."</strong>" : l(variable_get('site_name', ''), '<front>', array('purl' => array('disabled' => TRUE)));
    array_unshift($vars['breadcrumb'], $site_name);
  }

  $depth = 0;
  foreach ($vars['breadcrumb'] as $link) {

    // If the item isn't a link, surround it with a strong tag to format it like
    // one.
    if (!preg_match('/^<a/', $link) && !preg_match('/^<strong/', $link)) {
      $link = '<strong>' . $link . '</strong>';
    }

    $output .= "<span class='breadcrumb-link breadcrumb-depth-{$depth}'>{$link}</span>";
    $depth++;
  }
  return $output;
}

/**
 * Override of date_all_day_label.
 */
function full_rubik_date_all_day_label() {
  return '';
}

function full_rubik_link_field_process($element, $form_state, $complete_form) {
  variable_set('title_description', $element['title']['#description']);
  $instance = field_widget_instance($element, $form_state);
  $settings = $instance['settings'];
  $element['url'] = array(
    '#type' => 'textfield',
    '#maxlength' => LINK_URL_MAX_LENGTH,
    '#title' => t('URL'),
    '#required' => ($element['#delta'] == 0 && $settings['url'] !== 'optional') ? $element['#required'] : FALSE,
    '#default_value' => isset($element['#value']['url']) ? $element['#value']['url'] : NULL,
  );
  if ($settings['title'] !== 'none' && $settings['title'] !== 'value') {
    // Figure out the label of the title field.
    if (!empty($settings['title_label_use_field_label'])) {
      // Use the element label as the title field label.
      $title_label = $element['#title'];
      // Hide the field label because there is no need for the duplicate labels.
      $element['#title_display'] = 'invisible';
    }
    else {
      $title_label = t('Title');
    }

    $element['title'] = array(
      '#type' => 'textfield',
      '#maxlength' => $settings['title_maxlength'],
      '#title' => $title_label,
      '#description' => t(''),
      '#required' => ($settings['title'] == 'required' && (($element['#delta'] == 0 && $element['#required']) || !empty($element['#value']['url']))) ? TRUE : FALSE,
      '#default_value' => isset($element['#value']['title']) ? $element['#value']['title'] : NULL,
    );
  }

  // Initialize field attributes as an array if it is not an array yet.
  if (!is_array($settings['attributes'])) {
    $settings['attributes'] = array();
  }
  // Add default attributes.
  $settings['attributes'] += _link_default_attributes();
  $attributes = isset($element['#value']['attributes']) ? $element['#value']['attributes'] : $settings['attributes'];
  if (!empty($settings['attributes']['target']) && $settings['attributes']['target'] == LINK_TARGET_USER) {
    $element['attributes']['target'] = array(
      '#type' => 'checkbox',
      '#title' => t('Open URL in a New Window'),
      '#return_value' => LINK_TARGET_NEW_WINDOW,
      '#default_value' => isset($attributes['target']) ? $attributes['target'] : FALSE,
    );
  }
  if (!empty($settings['attributes']['configurable_title']) && $settings['attributes']['configurable_title'] == 1) {
    $element['attributes']['title'] = array(
      '#type' => 'textfield',
      '#title' => t('Link "title" attribute'),
      '#default_value' => isset($attributes['title']) ? $attributes['title'] : '',
      '#field_prefix' => 'title = "',
      '#field_suffix' => '"',
    );
  }
  if (!empty($settings['attributes']['configurable_class']) && $settings['attributes']['configurable_class'] == 1) {
    $element['attributes']['class'] = array(
      '#type' => 'textfield',
      '#title' => t('Custom link class'),
      '#default_value' => isset($attributes['class']) ? $attributes['class'] : '',
      '#field_prefix' => 'class = "',
      '#field_suffix' => '"',
    );
  }

  // If the title field is avaliable or there are field accepts multiple values
  // then allow the individual field items display the required asterisk if needed.
  if (isset($element['title']) || isset($element['_weight'])) {
    // To prevent an extra required indicator, disable the required flag on the
    // base element since all the sub-fields are already required if desired.
    $element['#required'] = FALSE;
  }

  return $element;
}

/**
 * Override of theme_field_multiple_value_form.
 */
function full_rubik_field_multiple_value_form($variables) {
  $element = $variables['element'];
  $output = '';

  if ($element['#cardinality'] > 1 || $element['#cardinality'] == FIELD_CARDINALITY_UNLIMITED) {
    $table_id = drupal_html_id($element['#field_name'] . '_values');
    $order_class = $element['#field_name'] . '-delta-order';
    $required = !empty($element['#required']) ? theme('form_required_marker', $variables) : '';

    $header = array(
      array(
        'data' => '<label>' . t('!title !required', array('!title' => $element['#title'], '!required' => $required)) . "</label>" . '<div class="description">' . $element['#description'] . '</div>',
        'colspan' => 2,
        'class' => array('field-label'),
      ),
      t('Order'),
    );
    $rows = array();

    // Sort items according to '_weight' (needed when the form comes back after
    // preview or failed validation)
    $items = array();
    foreach (element_children($element) as $key) {
      if ($key === 'add_more') {
        $add_more_button = &$element[$key];
      }
      else {
        $items[] = &$element[$key];
      }
    }
    usort($items, '_field_sort_items_value_helper');

    // Add the items as table rows.
    foreach ($items as $key => $item) {
      $item['_weight']['#attributes']['class'] = array($order_class);
      $delta_element = drupal_render($item['_weight']);
      $cells = array(
        array('data' => '', 'class' => array('field-multiple-drag')),
        drupal_render($item),
        array('data' => $delta_element, 'class' => array('delta-order')),
      );
      $rows[] = array(
        'data' => $cells,
        'class' => array('draggable'),
      );
    }

    $output = '<div class="form-item">';
    $output .= theme('table', array('header' => $header, 'rows' => $rows, 'attributes' => array('id' => $table_id, 'class' => array('field-multiple-table'))));
    $output .= '<div class="clearfix">' . drupal_render($add_more_button) . '</div>';
    $output .= '</div>';

    drupal_add_tabledrag($table_id, 'order', 'sibling', $order_class);
  }
  else {
    foreach (element_children($element) as $key) {
      $output .= drupal_render($element[$key]);
    }
  }

  return $output;
}

/**
 * Implements hook_form_alter().
 */
function full_rubik_form_alter(&$form, $form_state, $form_id) {
  if($form_id == 'user_profile_form'){
    $form['field_additional_email_addresses']['und']['add_more']['#value'] = 'Add another email address';
    $form['field_name_notes']['und']['add_more']['#value'] = 'Add another note';
    $form['field_phone']['und']['add_more']['#value'] = 'Add another phone number';
    $form['field_website']['und']['add_more']['#value'] = 'Add another website';
    $form['field_collection_mailing_address']['und']['add_more']['#value'] = 'Add another address';
    $form['field_website']['und']['#description'] = $form['field_website']['und']['#description'] . ' ' . variable_get('title_description');
  }
  if($form_id == 'profile2_edit_bwma_client_form'){
    $form['profile_bwma_client']['field_loans']['und']['actions']['ief_add']['#value'] = 'Add New Loan';
    $form['profile_bwma_client']['field_notes']['und']['add_more']['#value'] = 'Add Another Note';
  }
  if($form_id == 'loan_node_form'){
    $form['element']['group_deferred_enrolment_fees']['field_deferred_enrollment_fees']['und']['add_more']['#value'] = 'Add Another Note';
  }
  dpm($form);
}

//Disable sticky headers
function full_rubik_js_alter(&$js) {
  unset($js['misc/tableheader.js']);
}
