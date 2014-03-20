/**
 * @fileoverview 商品详情
 * @author lynne.xu
 * @version 2013-08-23
 */
(function($){
    var Center = {

        init: function(){
            this.menu();
            this.tabs();
            this.pullDown($('#order-all'));
            this.dialog();
        },
        menu: function(){
            var _dt = $('.menu dt');

            _dt.bind('click',function(){
                var elm = $(this),
                    _dd = elm.next(),
                    _pNode = elm.parent();

                if(_pNode.hasClass('fold')){
                    _dd.slideDown();
                    _pNode.removeClass('fold');
                }else{
                    _dd.slideUp();
                    _pNode.addClass('fold');
                }
                
            });
        },
        tabs: function(){
            var _tabs = $('#center-tabs');

            if(_tabs.length){
                _tabs.tabs({
                    isAutoPlay:false,
                    event:'click'
                });
            }
            
            
        },
        pullDown: function(elm) {
            var parentNode = elm.parent(),
                showBox = elm.next(),
                t,tOut,
                close = $('.close',parentNode);

            elm.bind('mouseenter',function(){
                t = setTimeout(function(){

                    parentNode.addClass('hover');

                },100);
            });
            elm.bind('mouseleave',function(){
                tOut = setTimeout(function(){
                    parentNode.removeClass('hover');
                },100);
                
                clearTimeout(t);
            });
            showBox.bind('mouseenter',function(){
                clearTimeout(tOut);
            });
            showBox.bind('mouseleave',function(){
                tOut = setTimeout(function(){
                    parentNode.removeClass('hover');
                },100);
                // parentNode.removeClass('hover');
                
            });
            close.bind('click',function(){
                parentNode.removeClass('hover');
            });
        },
        dialog: function() {
            var _dialog = $('.dialog'),
                btnAdd = $('.add-new-address');

            if(_dialog.length){
                btnAdd.bind('click',function(e){
                    e.preventDefault();
                    _dialog.dialog({
                        draggable: {
                            handle: _dialog
                        },
                        shim: true,
                        center: true
                        
                    });
                });
                $('.btn-close,.btn-cancel', _dialog).click(function(e){
                    e.preventDefault();

                    $(this).closest('div.dialog').dialog('close');
                }); 
                
            }
        }
    };

    
    $(document).ready(function(){
        Center.init();
    });

})(jQuery);