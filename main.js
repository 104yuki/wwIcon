/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

/** wwIcon Extension
    description
*/
define(function (require, exports, module) {
    'use strict';

    console.log("INITIALIZING wwIcon EXTENSION");

    var ExtensionUtils     = brackets.getModule("utils/ExtensionUtils");
    var Editor             = brackets.getModule("editor/Editor");

    var setWWIconState = function () {};
    ExtensionUtils.loadStyleSheet(module, "styles/wwIcon.css");
    var toolbarWWButton = $(document.createElement("a"))
        .attr("id", "wwIcon-icon")
        .attr("href", "#")
        .attr("title", "Word Wrap State")
        .on("click", function () {
//            console.log(">>> Word Wrap State BTN <<<");
//            console.log(Editor.Editor.getWordWrap());
            if (Editor.Editor.getWordWrap()) {
                Editor.Editor.setWordWrap(false);
                toolbarWWButton.css("background-position", "0 -24px");
            } else {
                Editor.Editor.setWordWrap(true);
                toolbarWWButton.css("background-position", "0 0");
            }
        })
        .appendTo($("#main-toolbar .buttons"));
    if (Editor.Editor.getWordWrap()) {
        toolbarWWButton.css("background-position", "0 0");
    } else {
        toolbarWWButton.css("background-position", "0 -24px");
    }

    console.log("INITIALIZED  wwIcon EXTENSION");
});