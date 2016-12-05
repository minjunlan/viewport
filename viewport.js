var HYViewport;
(function (HYViewport) {
    /**
     * viewport
     */
    var Viewport = (function () {
        function Viewport(fontwidth, htmlwidth) {
            var _this = this;
            this.fontwidth = 54;
            this.htmlwidth = 640;
            this.fontwidth = !!fontwidth ? fontwidth : this.fontwidth;
            this.htmlwidth = !!htmlwidth ? htmlwidth : this.htmlwidth;
            window.addEventListener('resize', function (e) {
                e.stopPropagation();
                _this.run();
            });
            document.addEventListener('DOMContentLoaded', function (e) {
                e.stopPropagation();
                _this.run();
            });
        }
        Viewport.prototype.run = function () {
            var width = this.caculateWidth();
            var html = document.children[0];
            if (width <= this.htmlwidth) {
                html.setAttribute('style', "font-size: " + this.fontwidth * (width / this.htmlwidth) + "px;");
            }
            else {
                html.setAttribute('style', "font-size: " + this.fontwidth + "px;");
            }
        };
        Viewport.prototype.caculateWidth = function () {
            return document.body.offsetWidth;
        };
        return Viewport;
    }());
    HYViewport.Viewport = Viewport;
})(HYViewport || (HYViewport = {}));
new HYViewport.Viewport();
