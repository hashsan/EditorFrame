export class EditorFrame{

  cls
  frame
  title
  body
  editor
  message

  constructor(cls){
    this.cls = cls || 'EditorFrame'
    this.frame = this.make()
  }
  /////
  make(){
    const temp =`
<div class="${this.cls} frame">
  <div class="title"></div>
  <div class="body">
    <div class="editor"
    contenteditable="plaintext-only"
    ></div>
  </div>
  <div class="message"></div>  
</div>    
    `    
    var el = document.createElement('div')
    el.innerHTML=temp
    el = el.children[0];
    this.title = el.children[0];
    this.body = el.children[1];
    this.editor = this.body.children[0];
    this.message = el.children[2];
    return el;
  }  
  remove=()=>{
    this.frame.remove()
  }  

  ////
  getTitle=(data)=>{
    return this.title.innerHTML
  }
  setTitle=(data)=>{
    this.title.innerHTML = data
  }

  getMessage=(data)=>{
    return this.message.innerHTML
  }  
  setMessage=(data)=>{
    this.message.innerHTML = data
  }

  getData=()=>{
    return this.editor.innerText
  }  
  setData=(data)=>{
    this.editor.innerText = data
  }

}




/*
var ed = new EditorFrame()

ed.setTitle('xxx')
ed.setMessage('yyyyy')
document.body.append(ed.frame)

*/







//Debounce 関数の例
const debounce = (func, timeout) => {
  let timer;
  // 引数に受け取った関数 func を拡張して返す
  return function (...args) {
    clearTimeout(timer);
    // timeout で指定された時間後に呼び出しをスケジュール
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }
}

export class Press{
  //el_press;
  //ary = []
  constructor(el){
    if(!el){
      throw new Error('element need it!')
    }
    this.ary=[];
    this.el_press = el
    this.el_press.addEventListener('keydown',this.onkeydown.bind(this))
  }
  press=(key,cb,time)=>{
    key = key.replaceAll(' ','')
    if(time){
      this.ary.push({ key, cb:debounce(cb,time) })
      return this
    }
    this.ary.push({ key, cb })
    return this
  }
  
  //closure
  onkeydown(e){
    var ch =''
    if(e.ctrlKey){
      ch +='ctrl+'
    }
    if(e.shiftKey){
      ch +='shift+'
    }
    if(e.altKey){
      ch +='alt+'
    }
    ch+=e.key
    const caller = this.getat(ch)
    if(!caller){
      return
    }
    caller.cb(e)    
  }
  
  getat(ch){    
    let caller = this.ary.filter(d=>d.key===ch).at(0)
    if(caller){
      return caller
    }
    if(!/\+/.test(ch)){
      return this.ary.filter(d=>d.key==='*').at(0)
    }
  }  
  
  
}



/*
var press = new Press(ed.editor)
press.press('ctrl+s',(e)=>{
  e.preventDefault()
  ed.setMessage('ctrl+s')
}).press('*',(e)=>{
  ed.setMessage(e.key)  
},200)
*/      





/*
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
*/
