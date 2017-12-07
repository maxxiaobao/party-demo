
 (function(window,document,undefined){
        var hearts = [];
        var source = [
          "Wiredcraft","JSConf","Shanghai","Berlin","Hope","❤️",
          "😆",
          "😘",
          "🐱",
          "~(≧▽≦)~",
          "Tracy",
          "Alex",
          "Coco",
          "Iris",
          "Fuzhuang",
          "Hazel",
          "Franzi",
          "Chelsea",
          "Charlie",
          "10k",
          "Xavier",
          "Thomas",
          "Vincent",
          "Tear",
          "Zihui",
          "Shuzi",
          "Karen",
          "Kate",
          "Juha",
          "Makara",
          "Mik",
          "Rich",
          "Kuno",
          "Leo",
          "Johnny <3 Vera",
          "Oliver",
          "Shane",
          "Qingfeng",
          "+1",
          "666",
          "New Office",
          "Welcome"]
        window.requestAnimationFrame = (function(){
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback){
                    setTimeout(callback,1000/60);
                }
        })();
        init();
        function init(){
            attachEvent();
            gameloop();
        }
        function getRandomKeyword() {
            return source[Math.floor(Math.random() * source.length)];
        }
        function gameloop(){
            for(var i=0;i<hearts.length;i++){
                if(hearts[i].alpha <=0){
                    document.body.removeChild(hearts[i].el);
                    hearts.splice(i,1);
                    continue;
                }
                hearts[i].y--;
                hearts[i].scale += 0.004;
                hearts[i].alpha -= 0.013;
                css({
                    left: hearts[i].x + 'px',
                    top: hearts[i].y + 'px',
                    opacity: hearts[i].alpha,
                    transform: "scale(" + hearts[i].scale + ") translate(-50%, 0)"
                }, hearts[i].el);
            }
            requestAnimationFrame(gameloop);
        }
        function attachEvent(){
            var old = typeof window.onclick==="function" && window.onclick;
            document.onclick=function(event){
                old && old();
                createWord(event);
            }
        }
        function createWord(event){
            var d = document.createElement("div");
            hearts.push({
                el : d,
                x : event.clientX - 5,
                y : event.clientY - 5,
                scale : 1,
                alpha : 1,
                color : randomColor()
            });
            css({
                display: 'inline-block',
                transform: 'translate(-50%, 0)',
                position: 'fixed',
                zIndex: '99999999',
                color: randomColor(),
                fontSize: '26px'
            }, d);
            d.innerHTML = getRandomKeyword();
            document.body.appendChild(d);
            d.onselectstart = function() { return false; }
        }
        function css(css, node){
            for (var index in css) {
                if (css.hasOwnProperty(index)) {
                    node.style[index] = css[index];
                }
            }
        }
        function randomColor(){
            return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
        }
    })(window,document);