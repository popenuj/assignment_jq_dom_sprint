
document.addEventListener("DOMContentLoaded", function(event) {

  $('h1').html('something cheeky');

  var $ol = $('<ol>');

  $('.info-box').append($ol);

  $ol.append('<li>Change the h1...</li>')
  $ol.append('<li>Inside the...</li>')
  $ol.append('<li>Make all sad...</li>')
  $ol.append('<li>Make the annoying...</li>')
  $ol.append('<li>Change the positioning...</li>')
  $ol.append('<li>Replace the ellipsis...</li>')
  $ol.append('<li>Replace the form...</li>')

  var $sadElements = $('.sad');

  $sadElements.addClass('happy').removeClass('sad');

  $popup = $('#annoying-popup');

  $popup.find('a').attr('href', 'http://www.cashcats.biz')

  $popup.css({ top: '+=30px',
               right: '50px',
               'background-color': 'silver'})

  $popup.removeClass('blink');

  var $suggestedTopics = $('.suggested-topics');

  var ellipsisLi = $suggestedTopics.find('li:contains(\'...\')');

  ellipsisLi.html('<span style=\'color:green;font-weight:bold;font-size:21px\'>biz cats</span>');

  var $formText = $('[placeholder=\'Tell me a story!\']');

  var placeholder = $formText.attr('placeholder');

  $formText.replaceWith($('<textarea>'));
  // reference points to replaced element

  $textArea = $('textarea');

  $textArea.attr('placeholder', placeholder);

});
