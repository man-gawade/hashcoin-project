(function ($) {
  
  Drupal.behaviors.awesome = {
    attach: function(context, settings) {
      var pager_data = $('.block-views-blocknews-events-block-1 .view-content').siblings('nav').get(0).outerHTML;
      $('.block-views-blocknews-events-block-1 .view-content', context).once('awesome').before(pager_data);
      $('.block-views-blocknews-events-block-1 .view-content').next('nav').remove();
    }
  };
  
  
  $(document).ready(function () {
    //Js code for add review stars according to the enter numbers out of five.
    var stars = '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
    $(stars).insertAfter(".views-field-field-review-numbers > div");

    $('.views-field-field-review-numbers').each(function () {
      var review_number = $(this).children('.field-content').text();

      if (review_number == 1) {
        $(this).children('.fa:lt(1)').addClass('checked');
      }
      else if (review_number == 2) {
        $(this).children('.fa:lt(2)').addClass('checked');
      }
      else if (review_number == 3) {
        $(this).children('.fa:lt(3)').addClass('checked');
      }
      else if (review_number == 4) {
        $(this).children('.fa:lt(4)').addClass('checked');
      }
      else if (review_number == 5) {
        $(this).children('.fa:lt(5)').addClass('checked');
      }
    });
  });
  
})(jQuery);





