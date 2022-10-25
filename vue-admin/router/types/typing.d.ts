//自定义工具类型，来让编辑器中的属性和函数得到ts的类型支持
//这个类定义的是ToastUi的Editor类型支持
declare namespace toastui{
      class Editor{
     constructor(options:any)
     getMarkdown:()=>string
     getHTML:()=>string
     removeHook:(type:string)=>void
     addHook:(type:string,handler:Function)=>void
     setHeight:(type:string)=>void
     on:(event:string,callback:Function)=>void
      }
}