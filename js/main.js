
var data={
    p10banner:''
};
var all=new Vue({
    el:'#vueMain',
    data:data,
    created:function(){
        var $this=this;
        $.getJSON('json/p10.json',function(res){
            $this.p10banner=res.banner;
            setTimeout(function(){
                var p10Swiper = new Swiper ('.p10top',{
                    autoplay:3000,
                    loop:true,
                    loopedSlides:3,
                    spaceBetween:15,
                    centeredSlides:true,
                    slidesPerView : 'auto',
                    pagination: '.swiper-pagination-p10',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                });
            },500);

        });

    }
});