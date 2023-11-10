# EditorFrame
good Editor Frame

```
@import url('//hashsan.github.io/EditorFrame/EditorFrame.css?v2');
```

```js
import {EditorFrame,Press} from "//hashsan.github.io/EditorFrame/EditorFrame.js";

var ed = new EditorFrame()
document.body.append(ed.frame)

var press = new Press(ed.editor)
press.press('ctrl+s',(e)=>{
  e.preventDefault()
  ed.setMessage('ctrl+s')
}).press('*',(e)=>{
  ed.setMessage(e.key)  
},200)
```

## Press.press(key,cb,debouncetime)
