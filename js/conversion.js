jQuery(document).ready(function($) {
    // Real-time conversion when user types in the WLD amount field
    $('#amount_in_wld').on('input', function() {
        var wldAmount = parseFloat($(this).val());
        var kshAmount = isNaN(wldAmount) ? '' : (wldAmount * 210).toFixed(2);
        $('#amount_in_ksh').val(kshAmount);
    });
});
