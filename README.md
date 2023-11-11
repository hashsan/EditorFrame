# EditorFrame and Press
good Editor Frame

```
@import url('//hashsan.github.io/EditorFrame/EditorFrame.css?v2');
```

## full sample
```js
var ed = new EditorFrame()
ed.setTitle('xyz')
ed.setData('hoo')
var da = ed.getData('ddd')
ed.setMessage('ddd')
document.body.append(ed.frame)

//ed.remove()
//

var press = new Press(ed.editor)
press.press('ctrl+s',(e)=>{
  e.preventDefault()
  ed.setMessage('ctrl+s')
}).press('*',(e)=>{
  ed.setMessage(e.key)  
},200)

```

## parts sample
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
```js
var ps = new Press(ed.editor)
ps.press('*',(e)=>{
  console.log(e.key);
  
},200)  //<----------

```
