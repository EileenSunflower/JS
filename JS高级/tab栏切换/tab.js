var that
var num=4
var num1=4
class Tab{
    constructor(id){
        that=this
        this.main=document.querySelector(id)
        this.add=this.main.querySelector('.tabadd')
        this.ul=this.main.querySelector('.fisrstnav ul:first-child')
        this.fsec=this.main.querySelector('.tabscon')
        this.init()
    }
    init(){
        this.huoquyuansu()
        this.add.onclick=this.addTab
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].index=i
            this.lis[i].onclick=this.qiehuan
            this.closes[i].onclick=this.shanchu
            this.fspan[i].ondblclick=this.xiugai
            this.sections[i].ondblclick=this.xiugai
        }
    }
    huoquyuansu(){
        this.lis=this.main.querySelectorAll('li')
        this.sections=this.main.querySelectorAll('section')
        this.closes=this.main.querySelectorAll('.icon-guanbi')
        this.fspan=this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    qiehuan(){
        that.clear()
        that.sections[this.index].className='conactive'
        this.className='liactive'
    }
    clear(){
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className=''
            this.sections[i].className=''
        }
    }
    addTab(){
        that.clear()
        var li='<li class="liactive"><span>测试'+num+++'</span><span class="iconfont icon-guanbi"></span></li>'
        var sec='<section class="conactive">测试'+num1+++'</section>'
        that.ul.insertAdjacentHTML('beforeend',li)
        that.fsec.insertAdjacentHTML('beforeend',sec)
        that.init()
    }
    shanchu(e){
        e.stopPropagation()//阻止冒泡事件
        var index=this.parentNode.index
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        if(document.querySelector('.liactive')){return}
        index--
        that.lis[index]&&that.lis[index].onclick()
    }
    xiugai(){
        var str=this.innerHTML
        window.getSelection?window.getSelection().removeAllRanges():document.sections.empty()
        this.innerHTML='<input type="text"/>'
        var input=this.children[0]
        input.value=str
        input.select()
        input.onblur=function(){
            this.parentNode.innerHTML=this.value
        }
        input.onkeyup=function(e){
            if(e.keyCode===13){
                this.blur()
            }
        }
    }
}
new Tab('#tab')