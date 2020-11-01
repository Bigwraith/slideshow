let banner = document.querySelector('.banner');
let circle = document.querySelector('.circle');
let current = document.querySelector('.current');

banner.addEventListener('mouseenter', () => {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    // 关闭定时器
    clearInterval(timer);
    timer = null; // 清除定时器变量
})

banner.addEventListener('mouseleave', () => {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    // 开启定时器
    timer = setInterval(() => {
        // 直接调用右边按钮
        arrow_r.click();
    }, 2000)
})

// 圆圈按钮样式切换
let roundcut = (ind) => {
    for (let j = 0; j < foucs.children.length - 1; j++) {
        circle.children[j].className = '';
    }
    circle.children[ind].className = 'current';
}

// 动态生成圆圈
for (let i = 0; i < foucs.children.length; i++) {
    let li = document.createElement('li');
    circle.appendChild(li);
    li.setAttribute('index', i);
    // 点击圆圈切换
    li.addEventListener('click', () => {
        roundcut(i);
        // 点击圆圈切换照片
        let circleX = i * foucs.children[i].offsetWidth;
        animate(foucs, -circleX);
    })
}

// 一开始的圆圈样式
circle.children[0].className = 'current';

// 克隆第一个图片到最后
let first = foucs.children[0].cloneNode(true);
foucs.appendChild(first);

let num = 0;
let criclen = 0;
// 右按钮    
arrow_r.addEventListener('click', () => {
    // 获取小圆圈的index值
    let indx;
    for (let i = 0; i < circle.children.length; i++) {
        // console.log(circle.children[i].getAttribute('class'));
        if (circle.children[i].getAttribute('class') === 'current') {
            // console.log(circle.children[i].getAttribute('index'));
            indx = circle.children[i].getAttribute('index');
        }
    }
    // console.log(indx);
    num = criclen = indx;
    // 图片到最后一张要快速回到第一张
    if (num == foucs.children.length - 1) {
        foucs.style.Left = 0;
        num = 0;
        criclen = 0;
    }

    num++;
    criclen++;
    let alX = -num * foucs.children[num].offsetWidth;
    // console.log(alX);
    animate(foucs, alX);
    // 小圆圈到最后一张，样式要回到第一个
    if (criclen == circle.children.length) {
        criclen = 0;
    }
    roundcut(criclen);

})

// 左按钮
arrow_l.addEventListener('click', () => {
    // 获取小圆圈的index值
    let indx;
    for (let i = 0; i < circle.children.length; i++) {
        // console.log(circle.children[i].getAttribute('class'));
        if (circle.children[i].getAttribute('class') === 'current') {
            console.log(circle.children[i].getAttribute('index'));
            indx = circle.children[i].getAttribute('index');
        }
    }
    // console.log(indx);
    num = criclen = indx;
    // 图片到第一张一张要快速回到最后一张
    if (num == 0) {
        num = foucs.children.length - 1;
        foucs.style.left = -num * foucs.children[num].offsetWidth + 'px';
    }
    num--;
    let alX = -num * foucs.children[num].offsetWidth;
    //console.log(alX);
    animate(foucs, alX);
    roundcut(num);
})


// 每两秒自动播放
let timer = setInterval(() => {
    // 直接调用右边按钮
    arrow_r.click();
}, 2000)