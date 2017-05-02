// engine.Ticker.getInstance().register((deltaTime) => {
//     console.log("aaa")
//     bitmap.x += 1;
// });
var imageConfigList = [
    {
        name: "captain.jpg",
        url: "../../captain.jpg",
        width: 100,
        height: 100
    },
    {
        name: "npc1.jpg",
        url: "../../npc1.jpg",
        width: 100,
        height: 100
    },
    {
        name: "npc2.jpg",
        url: "../../npc2.jpg",
        width: 100,
        height: 100
    }
];
var canvas = document.getElementById("myCanvas");
var stage = engine.run(canvas);
engine.RES.loadImageConfig(imageConfigList);
var bitmap1 = new engine.Bitmap();
bitmap1.img = engine.RES.getRes("npc1.jpg");
engine.RES.loadRes("npc1.jpg");
var bitmap2 = new engine.Bitmap();
bitmap2.img = engine.RES.getRes("npc2.jpg");
engine.RES.loadRes("npc2.jpg");
var standFrame1 = { image: "npc1.jpg" };
var standFrames = [standFrame1];
var standMovieClipData = { _name: "stand", _frames: standFrames };
var playerstand_mc = new engine.MovieClip(standMovieClipData);
var walkFrame1 = { image: "npc2.jpg" };
var walkFrames = [walkFrame1];
var walkMovieClipData = { _name: "walk", _frames: walkFrames };
var playerwalk_mc = new engine.MovieClip(walkMovieClipData);
var PlayerContainer = new engine.DisplayObjectContainer();
PlayerContainer.addChild(playerstand_mc);
PlayerContainer.addChild(playerwalk_mc);
var text = new engine.TextField();
text.x = 50;
text.y = 50;
text.scaleY = 1;
text.alpha = 0;
text.color = "#FF0000";
text.fontName = "Arial";
text.fontSize = 20;
text.text = "Hello World";
PlayerContainer.addChild(text);
var m = new StateMachine(stage, playerstand_mc, playerwalk_mc, PlayerContainer);
playerstand_mc.play();
PlayerContainer.touchEnabled = true;
PlayerContainer.addEventListener("mousedown", function (e) {
    m.setState("move");
    playerwalk_mc.play();
    PlayerContainer.x++;
}, false);
var captain = new engine.Bitmap();
captain.img = engine.RES.getRes("captain.jpg");
engine.RES.loadRes("captain.jpg");
stage.addChild(captain);
