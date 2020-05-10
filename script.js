tooltiplery.controller.tooltipController({
    type: "hover",
    element: $(".demo")[0],
    tooltip: tooltiplery.element.tooltip({
        position: "fixed",
        top: (String($(".demo").offset().top + $(".demo").height()) + "px"),
        left: (String($(".demo").offset().left + $(".demo").width()) + "px"),
        child: tooltiplery.element.imageCapView({
            header: tooltiplery.element.img({
                url: "demo.png",
                fit: "cover",
                height: "256px",
            }),
            content: tooltiplery.element.paragraphBlock({
                children: [
                    tooltiplery.element.textHeading[1]({
                        text: "Demo Text",
                    }),
                    tooltiplery.element.paragraph({
                        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    }),
                ],
            })
        }),
    }),
})

tooltiplery.controller.tooltipController({
    type: "hover",
    element: $(".demo2")[0],
    tooltip: tooltiplery.element.tooltip({
        position: "fixed",
        top: (String($(".demo2").offset().top + $(".demo2").height()) + "px"),
        left: (String($(".demo2").offset().left + $(".demo2").width()) + "px"),
        child: tooltiplery.element.imageCapView({
            header: tooltiplery.element.img({
                url: "demo.png",
                fit: "cover",
                height: "256px",
            }),
            content: tooltiplery.element.markdownBlock({
                markdown: "Marked - Markdown Parser\n========================\n\n[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.\n\nHow To Use The Demo\n-------------------\n\n1. Type in stuff on the left.\n2. See the live updates on the right.\n\nThat's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:\n\n- **Preview:**  A live display of the generated HTML as it would render in a browser.\n- **HTML Source:**  The generated HTML before your browser makes it pretty.\n- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.\n- **Quick Reference:**  A brief run-down of how to format things using markdown.\n\nWhy Markdown?\n-------------\n\nIt's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,\n\n> The overriding design goal for Markdown's\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n> Markdown-formatted document should be\n> publishable as-is, as plain text, without\n> looking like it's been marked up with tags\n> or formatting instructions.\n\nReady to start writing?  Either start changing stuff on the left or\n[clear everything](/demo/?text=) with a simple click.\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/",
            })
        }),
    }),
})
