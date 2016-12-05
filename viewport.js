var HYViewport;
<<<<<<< HEAD
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
=======
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
>>>>>>> 4fb3cee7186b5a0df332f172c4f77cb8910caa94
                e.stopPropagation();
                _this.run();
            });
        }
<<<<<<< HEAD
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
=======
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
>>>>>>> 4fb3cee7186b5a0df332f172c4f77cb8910caa94
        };
        return Viewport;
    }());
    HYViewport.Viewport = Viewport;
})(HYViewport || (HYViewport = {}));
<<<<<<< HEAD
new HYViewport.Viewport(1, 320, 640);
=======
new HYViewport.Viewport();
>>>>>>> 4fb3cee7186b5a0df332f172c4f77cb8910caa94
