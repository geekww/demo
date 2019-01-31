/**
 * Created by solexit28 on 2018/1/2.
 */
(function ($) {
    $.fn.changeColor = function (parm) {
        // 定义缺省值
        var defaults = {
            redDom:'',
            addDom:'',
            inputDom:'',
            wrongClass:'',
            mixNumber:'0',
            maxNumber:'99',
            actionFunction:function () {

            }
        };
        // extend方法合并两个对象，将后面的对象存在的属性值覆盖默认参数
        var obj = $.extend(defaults,parm);
        // 使用合并后的对象
        var _init = function (options) {
            if(options.redDom && options.addDom && options.inputDom){
                // 减少操作
                $(document).on('click',options.redDom,function () {
                    var $this = $(this);
                    var addDom = $this.siblings(options.addDom).eq(0);
                    var inputDom = $this.siblings(options.inputDom).eq(0);
                    _checkNumber($this,addDom,inputDom,'red');
                });
                // 增加操作
                $(document).on('click',options.addDom,function () {
                    var $this = $(this);
                    var redDom = $this.siblings(options.redDom).eq(0);
                    var inputDom = $this.siblings(options.inputDom).eq(0);
                    _checkNumber(redDom,$this,inputDom,'add');
                });
                // 输入值改变操作
                $(document).on('input propertychange',options.inputDom,function () {
                    var $this = $(this);
                    var redDom = $this.siblings(options.redDom).eq(0);
                    var addDom = $this.siblings(options.addDom).eq(0);
                    _checkNumber(redDom,addDom,this);
                })
            }
        };
        // 数量限制判断
        var _checkNumber = function (redDom,addDom,inputDom,action) {
            var options = opj;
            var inputValue = inputDom.val();
            var newValue;

            if (action == 'red') {
                newValue = parseInt(inputValue) - 1;
            } else if (action == 'add') {
                newValue = parseInt(inputValue) + 1;
            }
            if (newValue <= options.mixNumber) {
                redDom.addClass(options.wrongClass);
                addDom.removeClass(options.wrongClass);
                newValue = options.mixNumber;
            } else if (newValue >= options.maxNumber) {
                redDom.removeClass(options.wrongClass);
                addDom.addClass(options.wrongClass);
                newValue = options.maxNumber;
            }else {
                redDom.removeClass(options.wrongClass);
                addDom.removeClass(options.wrongClass);
            }

            inputDom.val(newValue);
            if(typeof options.actionAfterFun == 'function'){
                options.actionAfterFun(inputDom);
            }
        };

        _init(obj);

        return this;
    }
}(jQuery));