(function ($) {
    $.fn.Detector = function (o) {

        if (this.length > 0 && this[0] == document) {
            if ($("#dtct_23478x_xhs_5544_333333333333__ed").length == 0) {
                if ($("body").length > 0) {
                    $("<input type='hidden' val='0' id='dtct_23478x_xhs_5544_333333333333__ed'/>").appendTo('body');
                }
                else {
                    $("<input type='hidden' val='0' id='dtct_23478x_xhs_5544_333333333333__ed'/>").appendTo($("*").eq(0));
                }
            }
            if ($("#dtct_23478x_xhs_5544_333333333333__im").length == 0) {
                if ($("body").length > 0) {
                    $("<input type='hidden' val='1' id='dtct_23478x_xhs_5544_333333333333__im'/>").appendTo('body');
                }
                else {
                    $("<input type='hidden' val='1' id='dtct_23478x_xhs_5544_333333333333__im'/>").appendTo($("*").eq(0));
                }
            }
            var hlP = '';
            setInterval(function () {

                if ($("#dtct_23478x_xhs_5544_333333333333__ed").length == 0) {
                    if ($("body").length > 0) {
                        $("<input type='hidden' val='1' id='dtct_23478x_xhs_5544_333333333333__ed'/>").appendTo('body');
                    }
                    else {
                        $("<input type='hidden' val='1' id='dtct_23478x_xhs_5544_333333333333__ed'/>").appendTo($("*").eq(0));
                    }
                }
                if ($("#dtct_23478x_xhs_5544_333333333333__im").length == 0) {
                    if ($("body").length > 0) {
                        $("<input type='hidden' val='1' id='dtct_23478x_xhs_5544_333333333333__im'/>").appendTo('body');
                    }
                    else {
                        $("<input type='hidden' val='1' id='dtct_23478x_xhs_5544_333333333333__im'/>").appendTo($("*").eq(0));
                    }
                }



                if ($("#dtct_23478x_xhs_5544_333333333333__ed").val() == "1") {
                    if ($("#dtct_23478x_xhs_5544_333333333333__im").val() == "1") {
                        $("#dtct_23478x_xhs_5544_333333333333__im").val("0");
                        hlP = document.documentElement.innerHTML;

                    }
                    else {
                        var hlC = document.documentElement.innerHTML;
                        if (hlC != hlP) {
                            if (typeof (o) == "function") {
                                o();
                            }
                            else {
                               // alert('HTML hack detected :D');
                            }
                        }
                    }

                }
            }, 1000);

        }
    }
})(jQuery);


var Detector = {
    TurnOff: function () { $("#dtct_23478x_xhs_5544_333333333333__im").val("1"); $("#dtct_23478x_xhs_5544_333333333333__ed").val("0"); },
    TurnOn: function () { $("#dtct_23478x_xhs_5544_333333333333__im").val("1"); $("#dtct_23478x_xhs_5544_333333333333__ed").val("1"); },
    IsEnabled: function () { return ($("#dtct_23478x_xhs_5544_333333333333__ed").val() == "1" ? true : false) }
};