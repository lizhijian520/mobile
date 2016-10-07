/**
 * Created by Administrator on 2016/9/21.
 */
(function () {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW,
        oMain = document.querySelector('.main');
    if (winW > desW) {
        oMain.style.margin = '0 auto';
        oMain.style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = ratio * 100 + 'px';
})();


var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function (swipter) {
        var slideAry = swipter.slides,//获取当前一共有多少个活动块
            curIn = swipter.activeIndex,
            total = slideAry.length;
        //计算ID是page
        var targetId = 'page';
        switch (curIn) {
            case 0:
                targetId += total - 2;
                break;
            case total - 1:
                targetId += 1;
                break;
            default:
                targetId += curIn;
        }
        //给当前的活动块设置ID,还要把其余的移出
        [].forEach.call(slideAry,function(item,index){
            if(curIn === index){
                slideAry[curIn].id = targetId;
                return;
            }
            item.id = null;
        });


    }
});
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');
    musicMenu.addEventListener('click',function () {
        if(musicAudio.paused){
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    },false);
    function controlMusic() {
        musicAudio.volume = 0.4;
        musicAudio.play();
        musicAudio.addEventListener('canplay',function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        },false)
    }
    window.setTimeout(controlMusic,1000)
}();