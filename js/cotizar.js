$('.checkbox').change(function() {
    $(this).parent().next().find('.field').prop('disabled', !$(this).is(':checked'))
  });