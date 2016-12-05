namespace HYViewport {
/**
 * viewport
 */
export class Viewport {
    fontwidth = 54;
    htmlwidth = 640;
    constructor(fontwidth?:number,htmlwidth?:number) {
        this.fontwidth = !!fontwidth ? fontwidth: this.fontwidth;
        this.htmlwidth = !!htmlwidth ? htmlwidth: this.htmlwidth;
        window.addEventListener('resize',(e)=>{
            e.stopPropagation();
            this.run()
        })
        document.addEventListener('DOMContentLoaded',(e)=>{
            e.stopPropagation();
            this.run()
        })
    }
    private run(){
        let width = this.caculateWidth();
        let html = document.children[0];
        if (width <= this.htmlwidth) {
            html.setAttribute('style',`font-size: ${this.fontwidth*(width/this.htmlwidth)}px;`)
        }else{
            html.setAttribute('style',`font-size: ${this.fontwidth}px;`)
        }

    }

    private caculateWidth():number{
        return document.body.offsetWidth;
    }
}

}
new HYViewport.Viewport();
