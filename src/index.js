import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";

let editorDiv = document.querySelector("#editor");

let initial_doc =`

12345678901
`

const styleHackToMakeSelectionWork = EditorView.theme(
  {
    ".cm-gutters": {
      display: "unset", // instead of flex... 
    },
  })
  

let editor = new EditorView({
  state: EditorState.create({
    doc: initial_doc,
    extensions: [ 
      basicSetup, 
      javascript(),
      //styleHackToMakeSelectionWork
    ]
  }),
  parent: editorDiv
});

/*


*/

