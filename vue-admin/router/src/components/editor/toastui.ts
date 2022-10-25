import { uploadImage } from "@/api/uploadApi";
import Editor, { EditorType } from '@toast-ui/editor'
export default class{
    editor
    constructor(el:string,height:string,initialValue:string,initialType='markdown'){
        this. editor = new Editor({
            //Editor的默认参数
            el: document.querySelector(el)!,
            previewStyle: 'vertical',
            initialEditType:initialType as EditorType | undefined,
            height:height,
            initialValue: initialValue,
            toolbarItems:this.toolbarItems() as []//自定义工具类
          });
       this.ImageHook()//上传图片接口
        
    }
    private ImageHook(){
        this.editor.removeHook('addImageBlobHook')//调用图片接口前先把图片钩子函数remove掉
        this.editor.addHook('addImageBlobHook',async (blob:any,callback: any)=>{
            const form=new FormData()//新建表单获取数据
            form.append('file',blob,blob.name)
            const response =await uploadImage(form)//利用mock数据返回图片地址
            console.log(response.result.url)
            callback(response.result.url,blob.name)//执行回调函数上传图片
        })
    }
    private toolbarItems(){//自定义工具类
       return  [
        //每一个数组代表一栏工具按钮
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
            // Using Option: Customize the last button
            //可以自动工具类和按钮
            [{
              el: this.createButton(),
              command: 'fullscreen',//按钮的操作
              tooltip: 'fullscreen'//按钮的提示
            }
        ,{
            el:this.createSmallScreenButton(),
            command:'smallscreen',
            tootip:'smallscreen'
        }
    ]
          ]
    }
    //自定义全屏按钮工具函数
    private createButton(){
        const button =document.createElement('button') as HTMLElement
        button.innerHTML='<i class="iconfont icon-quanping1 text-xl"></i>'
        button.style.margin='0'
        button.addEventListener('click',()=>{
       this.editor.setHeight('100vh')
       const ui=document.querySelector('.toastui-editor-defaultUI') as HTMLDivElement
       ui.classList.toggle('fullscreen')
        })
        return button 
    }
    
    //自定义缩小屏幕工具函数
    private createSmallScreenButton(){
        const button =document.createElement('button') as HTMLElement
        button.innerHTML='<i class="iconfont icon-zoommode text-xl"></i>'
        button.style.margin='0'
        button.addEventListener('click',()=>{
       this.editor.setHeight('500px')
        })
        return button 
    }
}