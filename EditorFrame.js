
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
  make=()=>{
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
