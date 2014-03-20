/**
 * @fileoverview 商品详情
 * @author lynne.xu
 * @version 2013-08-23
 */
(function($){
    var Detail = {

        init: function(){
            this.pullDown($('#vip-price'));
            this.pullDown($('#area-list'));
            this.tabs();
            this.reply();
            this.youlike();

        },
        pullDown: function(elm) {
            var parentNode = elm.parent(),
                showBox = elm.next(),
                t,tOut;

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
        },
        tabs: function(){
            $.use('ui-tabs', function(){
                $('#detail-tabs').tabs({
                    isAutoPlay:false,
                    event:'click'
                });

                $('#detail-comment').tabs({
                    isAutoPlay:false,
                    event:'click',
                    titleSelector: '.comment-tab-t',
                    boxSelector: '.comment-b'
                });
            });
        },
        reply: function(){
            var _div = $('#detail-comment');

            _div.delegate('a.reply-lnk','click',function(e){
                e.preventDefault();
                var _pNode = $(this).closest('.user-comment-detail'),
                    replyBox = $('.reply-box',_pNode);

                replyBox.slideDown();
            });
            _div.delegate('textarea','keyup',function(){
                var _pNode = $(this).closest('.user-comment-detail'),
                    num = $(this).val().length,
                    maxLen = $(this).data('maxLen'),
                    em = $('.tips em',_pNode);

                em.html(maxLen-num);

            });
        },
        youlike: function() {
            $.use('ui-tabs-effect', function(){
                var tab = $('#tab-list').tabs({
                    isAutoPlay:false,
                    boxSelector:'li',
                    effect:'scroll',
                    scrollType:'loop',
                    perItem:5
                });
                //绑定左右滚动事件
                $('#btn-pre').bind('click', function(){
                    tab.tabs('prev');
                });
                $('#btn-next').bind('click', function(){
                    tab.tabs('next');
                });
            });
        }
    };

    
    $(document).ready(function(){
        Detail.init();
    });

})(jQuery);