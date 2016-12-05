namespace HYViewport {
/**
 * viewport
 */
export class Viewport {

    minwidth = 0;
    maxwidth = 0;
    times     = 1;      //字体与网页宽度到比的倍数,默认是1
    fonthtml  = 0.1; //字体与网页宽度到比，字体／宽度

    //
    constructor(times?:number,minwidth?:number,maxwidth?:number) {
        this.minwidth = !!minwidth ? minwidth : this.minwidth;
        this.maxwidth = !!maxwidth ? maxwidth : this.maxwidth;
        this.times    = !!times ? times : this.times;

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

        let html = document.children[0];
        let width = html.clientWidth;
        if (this.maxwidth !== 0 && this.minwidth !== 0){
            if( width >= this.maxwidth ) width = this.maxwidth;
            if( width <= this.minwidth ) width = this.minwidth;
        }
        html.setAttribute('style',`font-size: ${ width * this.fonthtml * this.times }px;`)
    }

}

}
new HYViewport.Viewport(1,320,640);

