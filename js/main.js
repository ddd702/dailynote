var now = $.now();
var Config = {
    plan: [{
        name: 'get a girlfriend before 2017!',
        end: new Date('2017-1-1 00:00').getTime(),
        sub: [],
        remark: [{
            con: '备注1'
        }]
    }, {
        name: '五月份前去云南旅游一番，预计6天（看心情）',
        end: new Date('2016-5-1 00:00').getTime()
    },{
        name: '报考驾照',
        end: new Date('2016-12-1 00:00').getTime()
    },{
    	name:'坚持每月看完一本书',
    	end:new Date('2017-1-1 00:00').getTime()
    }],
    timeCount: function(sTime, eTime, $dom) {
        var count = eTime - sTime;
        //var secondCount = Math.floor(count / 1000);
        var secondCount = Math.floor(count / 1000);
        var day, hour, minute, second;
        if (secondCount < 0) {
            $dom.text('已结束！');
            return false;
        }
        console.log(secondCount);
        var counter = setInterval(function() {
            day = Math.floor(secondCount / (3600 * 24));
            hour = Math.floor(secondCount / 3600) % 24;
            minute = Math.floor(secondCount / 60) % 60;
            second = secondCount % 60;
            secondCount--;
            if (secondCount < 0) {
                $dom.text('已结束');
                clearInterval(counter);
            }
            $dom.text(day + '天' + (hour < 10 ? '0' + hour : hour) + '时' + (minute < 10 ? '0' + minute : minute) + '分' + (second < 10 ? '0' + second : second) + '秒');
        }, 1000);
    }
};
$('.plan-wrap').html(D.utils.render($('#t-plan').html(), Config));
for (var i = 0; i < Config.plan.length; i++) {
    Config.timeCount(now, Config.plan[i].end, $('#j-counter-' + i));
}
$('#j-prev').on('click', function(event) {
    event.preventDefault();
    D.alert('往事不堪回首！');
});