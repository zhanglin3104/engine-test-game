
// engine.Ticker.getInstance().register((deltaTime) => {
//     console.log("aaa")
//     bitmap.x += 1;
// });
var imageConfigList: engine.RES.imageConfig[] = [
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
]

var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
var stage = engine.run(canvas);

engine.RES.loadImageConfig(imageConfigList);

var bitmap1 = new engine.Bitmap();
bitmap1.img = engine.RES.getRes("npc1.jpg");
engine.RES.loadRes("npc1.jpg")

var bitmap2 = new engine.Bitmap();
bitmap2.img = engine.RES.getRes("npc2.jpg");
engine.RES.loadRes("npc2.jpg")

let standFrame1: engine.MovieClipFrameData = { image: "npc1.jpg" };
let standFrames: engine.MovieClipFrameData[] = [standFrame1];
let standMovieClipData: engine.MovieClipData = { _name: "stand", _frames: standFrames };
let playerstand_mc: engine.MovieClip = new engine.MovieClip(standMovieClipData);

let walkFrame1: engine.MovieClipFrameData = { image: "npc2.jpg" };
let walkFrames: engine.MovieClipFrameData[] = [walkFrame1];
let walkMovieClipData: engine.MovieClipData = { _name: "walk", _frames: walkFrames };
let playerwalk_mc: engine.MovieClip = new engine.MovieClip(walkMovieClipData);

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

var m: StateMachine = new StateMachine(stage, playerstand_mc, playerwalk_mc, PlayerContainer);
playerstand_mc.play();
PlayerContainer.touchEnabled = true;
PlayerContainer.addEventListener("mousedown", (e) => {
    m.setState("move");
    playerwalk_mc.play();
    PlayerContainer.x++;
}, false)

var captain = new engine.Bitmap();
captain.img = engine.RES.getRes("captain.jpg");
engine.RES.loadRes("captain.jpg")

stage.addChild(captain);

