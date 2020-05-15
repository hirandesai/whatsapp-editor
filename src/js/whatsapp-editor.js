(function ($) {

    $.fn.whatsappEditor = function (options) {
        var settings = $.extend({
            bold: true,
            italic: true,
            strikethrough: true,
            monospace: true,
            content:''
        }, options);


        function initToolbar($parentElement) {
            var $toolbar = $("<div/>").addClass("whatsapp-toolbar");
            if (settings.bold) {
                $("<a/>")
                    .attr("href", "javascript:void(0)")
                    .append("<span class='fa fa-bold fa-fw'></span>")
                    .on("click", function (e) {
                        format("bold");
                    })
                    .appendTo($toolbar);
            }
            if (settings.italic) {
                $("<a/>")
                    .attr("href", "javascript:void(0)")
                    .append("<span class='fa fa-italic fa-fw'></span>")
                    .on("click", function (e) {
                        format("italic");
                    })
                    .appendTo($toolbar);
            }
            if (settings.strikethrough) {
                $("<a/>")
                    .attr("href", "javascript:void(0)")
                    .append("<span class='fa fa-strikethrough fa-fw'></span>")
                    .on("click", function (e) {
                        format("strikethrough");
                    })
                    .appendTo($toolbar);
            }
            if (settings.monospace) {
                $("<a/>")
                    .attr("href", "javascript:void(0)")
                    .append("<span class='fa fa-text-width fa-fw'></span>")
                    .on("click", function (e) {
                        format("monospace");
                    })
                    .appendTo($toolbar);
            }

            $toolbar.appendTo($parentElement);
        }
        function format(command) {
            if (command === "bold" || command === "italic" || command === "strikethrough") {
                document.execCommand(command, false);
            }
            else if (command === "monospace") {
                document.execCommand("fontName", false, "monospace");
            }
        }

        function initEditor($parentElement) {
            var $editor = $("<div/>")
                .addClass("whatsapp-editor")
                .attr("contenteditable", true)
                .on("keypress", function (e) {
                    if (e.charCode === 96 || e.charCode === 95 || e.charCode === 126 || e.charCode === 42) {
                        return false;
                    }
                });
            if (settings.content)
            {
                $editor.html(settings.content);
            }

            $editor.appendTo($parentElement);
        }

        this.getFormattedContent = function () {
            if (this.length && this.length === 1) {
                return prepareFormattedContent(this.find(".whatsapp-editor").html());
            }
            else {
                var contents = [];
                this.find(".whatsapp-editor").each(function (e, res) {
                    contents.push(prepareFormattedContent($(res).html()));
                });
                return contents;
            }
        };

        function prepareFormattedContent(htmlContent) {
            htmlContent = htmlContent
                .replace(/<b>|<\/b>/g, '*') // BOLD
                .replace(/<div>/g, '\n')    // LINE BREAK
                .replace(/<\/div>/g, '')
                .replace(/<i>|<\/i>/g, '_') // Italic
                .replace(/<strike>|<\/strike>/g, '~')
                .replace(/<font face="monospace" style="">|<font face="monospace">|<\/font>/g, '```');    // Strike Through
            return htmlContent;
        }

        return this.each(function (e, res) {
            initToolbar(res);
            initEditor(res);
        });
    };

}(jQuery));