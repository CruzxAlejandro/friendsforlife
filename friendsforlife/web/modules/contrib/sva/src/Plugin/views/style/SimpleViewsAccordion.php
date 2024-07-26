<?php

namespace Drupal\simple_views_accordion\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\style\StylePluginBase;

/**
 * Simple Views Accordion style plugin.
 *
 * @ViewsStyle(
 *   id = "simple_views_accordion_simple_views_accordion",
 *   title = @Translation("Simple Views Accordion"),
 *   help = @Translation("Simple Views Accordion."),
 *   theme = "views_style_simple_views_accordion",
 *   display_types = {"normal"}
 * )
 */
class SimpleViewsAccordion extends StylePluginBase {

  /**
   * {@inheritdoc}
   */
  protected $usesRowPlugin = TRUE;

  /**
   * {@inheritdoc}
   */
  protected $usesRowClass = TRUE;

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['wrapper_class'] = ['default' => 'item-list'];
    $options['open_first'] = ['default' => TRUE];
    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
    $form['wrapper_class'] = [
      '#title' => $this->t('Wrapper class'),
      '#description' => $this->t('The class to provide on the wrapper, outside rows.'),
      '#type' => 'textfield',
      '#default_value' => $this->options['wrapper_class'],
    ];

    $form['open_first'] = [
      '#title' => $this->t('Open first'),
      '#description' => $this->t('Will display first item open.'),
      '#type' => 'checkbox',
      '#default_value' => $this->options['open_first'],
    ];
  }

}
