/**
 * jQuery Screen Resolutions Plugin
 * v 1.0
 * Gökhan ALKAN - gokhanalkan@gokhanalkan.com
 *
 */

(function ($) {

    'use strict';

    $.fn.screenResolution = function (options) {

        var $this = this;

        var settings = $.extend({
            wText: "W: ",
            hText: "H: ",
            color: "#34495e",
            bgColor: "#ecf0f1",
            family: "Trebuchet MS, Helvetica, sans-serif",
            weight: "700",
            fontSize : 13,
            radius: 3,
            bottom: 10,
            padding: "3px 10px",
            contentX: "right",
            contentY: "bottom",
            contentXpx: 15,
            contentYpx: 15,
            contentRadius: 9,
            contentPadding: 10,
            contentBg: "#e74c3c",
            contentZ: 9999

        }, options)

        function run($dom) {
            var width = $(window).width(),
                height = $(window).height(),
                html = '' +
                    '<div style="position: fixed;'+settings.contentY+':'+settings.contentYpx+'px;'+settings.contentX+':'+settings.contentXpx+'px;background-color: '+settings.contentBg+';padding: '+settings.contentPadding+'px;border-radius: '+settings.contentRadius+'px;z-index: '+settings.contentZ+';">' +
                    '<span style="display: block;padding: '+settings.padding+';background-color: '+settings.bgColor+';color:'+settings.color+';font-family:'+settings.family+';font-weight: '+settings.weight+';font-size: '+settings.fontSize+'px;margin-bottom: '+settings.bottom+'px;border-radius: '+settings.radius+'px ">'+settings.wText+width+'px</span>' +
                    '<span style="display: block;padding: '+settings.padding+';background-color: '+settings.bgColor+';color:'+settings.color+';font-family:'+settings.family+';font-weight: '+settings.weight+';font-size: '+settings.fontSize+'px;border-radius: '+settings.radius+'px; ">'+settings.hText+height+'px</span>' +
                    '</div>';
            $dom.append(html);
        }

        run($this);

        $(window).resize(function () {
            run($this);
        })

    }

} (jQuery) );