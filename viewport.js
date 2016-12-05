var HYViewport;
(function(HYViewport) {
    /**
     * viewport
     */
    var Viewport = (function() {
        //
        function Viewport(times, minwidth, maxwidth) {
            var _this = this;
            this.minwidth = 0;
            this.maxwidth = 0;
            this.times = 1; //字体与网页宽度到比的倍数,默认是1
            this.fonthtml = 0.1; //字体与网页宽度到比，字体／宽度
            this.minwidth = !!minwidth ? minwidth : this.minwidth;
            this.maxwidth = !!maxwidth ? maxwidth : this.maxwidth;
            this.times = !!times ? times : this.times;
            window.addEventListener('resize', function(e) {
                e.stopPropagation();
                _this.run();
            });
            document.addEventListener('DOMContentLoaded', function(e) {
                e.stopPropagation();
                _this.run();
            });
        }
        Viewport.prototype.run = function() {
            var html = document.children[0];
            var width = html.clientWidth;
            if (this.maxwidth !== 0 && this.minwidth !== 0) {
                if (width >= this.maxwidth)
                    width = this.maxwidth;
                if (width <= this.minwidth)
                    width = this.minwidth;
            }
            html.setAttribute('style', "font-size: " + width * this.fonthtml * this.times + "px;");
        };
        return Viewport;
    }());
    HYViewport.Viewport = Viewport;
})(HYViewport || (HYViewport = {}));
new HYViewport.Viewport(1, 320, 640);