var StateMachine = (function () {
    function StateMachine(stage, standAnim, walkAnim, playerContainer) {
        this.timeOnEnterFrame = 0;
        this.ratioX = 0;
        this.ratioY = 0;
        this.stage = stage;
        this.standAnim = standAnim;
        this.walkAnim = walkAnim;
        this.playerContainer = playerContainer;
        this.standState = new Standstate(this);
        this.walkState = new Movestate(this);
        this.currentState = this.standState;
        this.currentState.onEnter();
    }
    StateMachine.prototype.setState = function (s) {
        console.log("当前状态：" + this.currentState.getStateName());
        console.log("即将进入状态：" + s);
        if (this.currentState.getStateName() != s) {
            this.currentState.onExit();
            this.currentState.setStateName(s);
            this.currentState.onEnter();
        }
    };
    return StateMachine;
}());
var Standstate = (function () {
    function Standstate(stateMachine) {
        this.s = "stand";
        this.stateMachine = stateMachine;
    }
    Standstate.prototype.getStateName = function () {
        return this.s;
    };
    Standstate.prototype.setStateName = function (stateName) {
        this.s = stateName;
    };
    Standstate.prototype.onEnter = function () {
        console.log("进入stand");
        this.stateMachine.walkAnim.alpha = 1;
    };
    Standstate.prototype.onExit = function () {
        this.stateMachine.walkAnim.alpha = 0;
        this.stateMachine.currentState = this.stateMachine.walkState;
        console.log("退出stand");
    };
    return Standstate;
}());
var Movestate = (function () {
    function Movestate(stateMachine) {
        this.s = "move";
        this.stateMachine = stateMachine;
    }
    Movestate.prototype.getStateName = function () {
        return this.s;
    };
    Movestate.prototype.setStateName = function (stateName) {
        this.s = stateName;
    };
    Movestate.prototype.onEnter = function () {
        this.stateMachine.walkAnim.alpha = 1;
        console.log("进入move");
    };
    Movestate.prototype.onExit = function () {
        console.log("退出move");
        this.stateMachine.walkAnim.alpha = 0;
        this.stateMachine.currentState = this.stateMachine.standState;
    };
    return Movestate;
}());
