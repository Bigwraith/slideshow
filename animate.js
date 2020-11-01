
let foucs = document.querySelector('.foucs');
let arrow_l = document.querySelector('.arrow_l');
let arrow_r = document.querySelector('.arrow_r');

animate = (obj, target,callback)=>{
    clearInterval(obj.timer); //先清除之前得定时器
    obj.timer = setInterval(()=>{

        // 缓慢运行 步长公式:(目标值-现在位置)/10
        let step = (target - obj.offsetLeft) / 10;
        // 如果步长为正就上取舍,为负下取舍
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //console.log(step);
        // 当移动到目标位置清除定时器
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            // 回调函数要在最后
            callback && callback(); // 两者都为真才运行
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15)
}


