/*
Copyright 2012 OCAD University

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt
*/

/*global jQuery, window, fluid*/

// JSLint options 
/*jslint white: true, funcinvoke: true, undef: true, newcap: true, nomen: true, regexp: true, bitwise: true, browser: true, forin: true, maxerr: 100, indent: 4 */


(function ($) {

    /********************************************************************************
     * Native Controls                           .                                  *
     *                                                                              *
     * Attach the browser built-in native controls bar onto the html5 media element.* 
     *******************************************************************************/

    fluid.defaults("fluid.videoPlayer.nativeControls", { 
        gradeNames: ["fluid.viewComponent", "autoInit"],
        container: null,    // Must be supplied. Needs to be a html5 media element
        finalInitFunction: "fluid.videoPlayer.nativeControls.finalInit",
        events: {
            onNonMediaElementDetected: null,
            onReady: null
        }
    });

    fluid.videoPlayer.nativeControls.finalInit = function (that) {
        var containerTagName = that.container[0].tagName.toUpperCase();
        
        if (containerTagName !== "VIDEO" && containerTagName !== "AUDIO") {
            fluid.log("Non html5 medi(NOT <video> or <audio>) is supplied as a container in " + that.typeName);
            that.events.onNonMediaElementDetected.fire();
        } else {
            that.container.attr("controls", "true");
        }
        
        that.events.onReady.fire();
    };

})(jQuery);
