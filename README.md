# Whatsapp Editor
The plugin allows user to format text online. The result text can be directly sent to whatsapp API which will be consistent against format, or show in the browser to be sent, in text format, to the WhatsApp web.

## Usage
1. Include jQuery

`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

2. Include plugin's code:

`<script src="src/js/whatsapp-editor.js"></script>`

3. Use the plugin

`$("#element").whatsappEditor();` OR `$("#element").whatsappEditor(OPTIONS);`

Use 

```
var editor=$("#element").whatsappEditor(); // Initialize editor

var content=editor.getFormattedContent(); // Formatted WhatsApp content
```


### Supported Options

* bold: Allows user to select text and mark them as **Bold**
* italic: Allows user to select text and mark them as *Italic*
* Strikethrough: Allows user to select text and mark them as ~Strikethrough~
* Monospace: Allows user to select text and mark them as `Monospace`
* html_contet: Allows user to return text in html format. Default is **false**
* Content: Allows developer to specify default text for converting to whatsapp type text.

For more information see index.html file.
