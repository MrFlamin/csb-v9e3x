/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Boyfriend extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Position", "./Boyfriend/costumes/Position.svg", {
        x: 240.92709431722838,
        y: 179.73926099099103
      }),
      new Costume(
        "Boyfriend Idle1",
        "./Boyfriend/costumes/Boyfriend Idle1.svg",
        { x: 274.77477477477476, y: 200.45045045045046 }
      ),
      new Costume(
        "Boyfriend Idle2",
        "./Boyfriend/costumes/Boyfriend Idle2.svg",
        { x: 274.774775, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Idle3",
        "./Boyfriend/costumes/Boyfriend Idle3.svg",
        { x: 274.774775, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Idle4",
        "./Boyfriend/costumes/Boyfriend Idle4.svg",
        { x: 274.774775, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Idle5",
        "./Boyfriend/costumes/Boyfriend Idle5.svg",
        { x: 274.774775, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Storm1",
        "./Boyfriend/costumes/Boyfriend Storm1.svg",
        { x: 155, y: 139.49997000000005 }
      ),
      new Costume(
        "Boyfriend Storm2",
        "./Boyfriend/costumes/Boyfriend Storm2.svg",
        { x: 155, y: 139.49997000000008 }
      ),
      new Costume(
        "Boyfriend Left1",
        "./Boyfriend/costumes/Boyfriend Left1.svg",
        { x: 274.77474500000005, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Left2",
        "./Boyfriend/costumes/Boyfriend Left2.svg",
        { x: 274.774755, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend LeftFail1",
        "./Boyfriend/costumes/Boyfriend LeftFail1.svg",
        { x: 155.00000054400095, y: 147.0074611755083 }
      ),
      new Costume(
        "Boyfriend LeftFail2",
        "./Boyfriend/costumes/Boyfriend LeftFail2.svg",
        { x: 154.9999970722364, y: 143.45575100400174 }
      ),
      new Costume(
        "Boyfriend Right1",
        "./Boyfriend/costumes/Boyfriend Right1.svg",
        { x: 274.774755, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Right2",
        "./Boyfriend/costumes/Boyfriend Right2.svg",
        { x: 274.774765, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend RightFail1",
        "./Boyfriend/costumes/Boyfriend RightFail1.svg",
        { x: 155, y: 147.5 }
      ),
      new Costume(
        "Boyfriend RightFail2",
        "./Boyfriend/costumes/Boyfriend RightFail2.svg",
        { x: 155.00000000000023, y: 147.5 }
      ),
      new Costume("Boyfriend Up1", "./Boyfriend/costumes/Boyfriend Up1.svg", {
        x: 274.77474500000005,
        y: 200.45045
      }),
      new Costume("Boyfriend Up2", "./Boyfriend/costumes/Boyfriend Up2.svg", {
        x: 274.77474500000005,
        y: 200.45045
      }),
      new Costume(
        "Boyfriend UpFail1",
        "./Boyfriend/costumes/Boyfriend UpFail1.svg",
        { x: 155, y: 139.49997000000008 }
      ),
      new Costume(
        "Boyfriend UpFail2",
        "./Boyfriend/costumes/Boyfriend UpFail2.svg",
        { x: 155, y: 139.49997000000008 }
      ),
      new Costume(
        "Boyfriend Down1",
        "./Boyfriend/costumes/Boyfriend Down1.svg",
        { x: 274.774765, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend Down2",
        "./Boyfriend/costumes/Boyfriend Down2.svg",
        { x: 274.774765, y: 200.45045 }
      ),
      new Costume(
        "Boyfriend DownFail1",
        "./Boyfriend/costumes/Boyfriend DownFail1.svg",
        { x: 154.99999500000013, y: 139.49996999999996 }
      ),
      new Costume(
        "Boyfriend DownFail2",
        "./Boyfriend/costumes/Boyfriend DownFail2.svg",
        { x: 154.99999500000013, y: 139.49996999999996 }
      ),
      new Costume(
        "Boyfriend Pose1",
        "./Boyfriend/costumes/Boyfriend Pose1.svg",
        { x: 155, y: 139.4999700000001 }
      ),
      new Costume(
        "Boyfriend Pose2",
        "./Boyfriend/costumes/Boyfriend Pose2.svg",
        { x: 155, y: 139.4999700000001 }
      ),
      new Costume(
        "Boyfriend Pose3",
        "./Boyfriend/costumes/Boyfriend Pose3.svg",
        { x: 155, y: 139.49997000000005 }
      ),
      new Costume(
        "Boyfriend Skeleton1",
        "./Boyfriend/costumes/Boyfriend Skeleton1.svg",
        { x: 250.28819312006334, y: 201.2403394154818 }
      ),
      new Costume("Thumbnail", "./Boyfriend/costumes/Thumbnail.svg", {
        x: 294.2942942942943,
        y: 195.94594594594594
      }),
      new Costume("costume1", "./Boyfriend/costumes/costume1.svg", {
        x: 193.693695,
        y: 192.19219
      })
    ];

    this.sounds = [
      new Sound("fnf_loss_sfx", "./Boyfriend/sounds/fnf_loss_sfx.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "tick" }, this.whenIReceiveTick),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "l" }, this.whenKeyLPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Left Miss" },
        this.whenIReceiveLeftMiss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Up Miss" },
        this.whenIReceiveUpMiss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Down Miss" },
        this.whenIReceiveDownMiss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Right Miss" },
        this.whenIReceiveRightMiss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Right Arrow" },
        this.whenIReceiveRightArrow
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Down Arrow" },
        this.whenIReceiveDownArrow
      ),
      new Trigger(Trigger.BROADCAST, { name: "Pose" }, this.whenIReceivePose),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Up Arrow" },
        this.whenIReceiveUpArrow
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Left Arrow" },
        this.whenIReceiveLeftArrow
      ),
      new Trigger(Trigger.BROADCAST, { name: "Die" }, this.whenIReceiveDie),
      new Trigger(Trigger.KEY_PRESSED, { key: "m" }, this.whenKeyMPressed),
      new Trigger(Trigger.BROADCAST, { name: "Mute" }, this.whenIReceiveMute)
    ];

    this.vars.animationIdleDelay = 14;
    this.vars.currentAnimation = "left";
  }

  *whenIReceiveTick() {
    if (!(this.costume.name == "Position")) {
      this.vars.animationIdleDelay += 1;
      if (
        this.vars.currentAnimation == "idle" &&
        ((2 < this.vars.animationIdleDelay &&
          !(this.costume.name == "Boyfriend Idle5")) ||
          (6 < this.vars.animationIdleDelay &&
            this.costume.name == "Boyfriend Idle5"))
      ) {
        this.costumeNumber += 1;
        if (this.costumeNumber < 2 || 6 < this.costumeNumber) {
          this.costume = "Boyfriend Idle1";
        }
        this.vars.animationIdleDelay = 0;
      }
      if (this.vars.currentAnimation == "right") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend Right1";
        } else {
          this.costume = "Boyfriend Right2";
          if (this.keyPressed("right arrow")) {
            this.vars.animationIdleDelay = 3;
          }
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "down") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend Down1";
        } else {
          this.costume = "Boyfriend Down2";
          if (this.keyPressed("down arrow")) {
            this.vars.animationIdleDelay = 3;
          }
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "up") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend Up1";
        } else {
          this.costume = "Boyfriend Up2";
          if (this.keyPressed("up arrow")) {
            this.vars.animationIdleDelay = 3;
          }
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "left") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend Left1";
        } else {
          this.costume = "Boyfriend Left2";
          if (this.keyPressed("left arrow")) {
            this.vars.animationIdleDelay = 3;
          }
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "right miss") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend RightFail1";
        } else {
          this.costume = "Boyfriend RightFail2";
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "down miss") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend DownFail1";
        } else {
          this.costume = "Boyfriend DownFail2";
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "up miss") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend UpFail1";
        } else {
          this.costume = "Boyfriend UpFail2";
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "left miss") {
        if (this.vars.animationIdleDelay < 3) {
          this.costume = "Boyfriend LeftFail1";
        } else {
          this.costume = "Boyfriend LeftFail2";
          if (15 < this.vars.animationIdleDelay) {
            this.vars.animationIdleDelay = 0;
            this.vars.currentAnimation = "idle";
            return;
          }
        }
      }
      if (this.vars.currentAnimation == "thunder") {
        if ((Math.round(this.vars.animationIdleDelay / 2) / 2).includes(".")) {
          this.costume = "Boyfriend Storm1";
        } else {
          this.costume = "Boyfriend Storm2";
        }
        if (15 < this.vars.animationIdleDelay) {
          this.vars.animationIdleDelay = 0;
          this.vars.currentAnimation = "idle";
          return;
        }
      }
      if (this.vars.currentAnimation == "pose") {
        if (this.vars.animationIdleDelay < 2) {
          this.costume = "Boyfriend Pose1";
        } else {
          if (this.vars.animationIdleDelay < 4) {
            this.costume = "Boyfriend Pose2";
          } else {
            this.costume = "Boyfriend Pose3";
            if (15 < this.vars.animationIdleDelay) {
              this.vars.animationIdleDelay = 0;
              this.vars.currentAnimation = "idle";
              return;
            }
          }
        }
      }
      if (this.vars.currentAnimation == "die") {
        this.costume = "Boyfriend Skeleton1";
        if (60 < this.vars.animationIdleDelay) {
          this.vars.animationIdleDelay = 0;
          this.vars.currentAnimation = "idle";
          return;
        }
      }
    } else {
      this.effects.ghost += 2;
      this.size += 1;
      if (130 < this.size) {
        this.deleteThisClone();
      }
    }
  }

  *whenKeyUpArrowPressed() {
    this.vars.currentAnimation = "up";
    this.vars.animationIdleDelay = 0;
    while (!!this.keyPressed("up arrow")) {
      yield;
    }
  }

  *whenKeyDownArrowPressed() {
    this.vars.currentAnimation = "down";
    this.vars.animationIdleDelay = 0;
    while (!!this.keyPressed("down arrow")) {
      yield;
    }
  }

  *whenKeyRightArrowPressed() {
    this.vars.currentAnimation = "right";
    this.vars.animationIdleDelay = 0;
    while (!!this.keyPressed("right arrow")) {
      yield;
    }
  }

  *whenKeyLeftArrowPressed() {
    this.vars.currentAnimation = "left";
    this.vars.animationIdleDelay = 0;
    while (!!this.keyPressed("left arrow")) {
      yield;
    }
  }

  *whenKeyLPressed() {
    yield* this.startSound("fnf_loss_sfx");
    this.vars.currentAnimation = "die";
    this.vars.animationIdleDelay = 0;
    yield* this.wait(0.6);
    while (!!this.keyPressed("l")) {
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.size = 90;
    this.goto(0, 0);
    this.costume = "Position";
    this.createClone();
    this.moveBehind();
    this.vars.currentAnimation = "idle";
    this.vars.animationIdleDelay = 0;
    for (let i = 0; i < 50; i++) {
      this.costumeNumber += 1;
      yield;
    }
    this.costume = "Boyfriend Idle1";
    this.goto(-20, -13);
    this.broadcast("Start");
  }

  *startAsClone() {
    this.goto(0, 0);
    this.size = 100;
  }

  *whenIReceiveLeftMiss() {
    this.vars.currentAnimation = "left miss";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveUpMiss() {
    this.vars.currentAnimation = "up miss";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveDownMiss() {
    this.vars.currentAnimation = "down miss";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveRightMiss() {
    this.vars.currentAnimation = "right miss";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveRightArrow() {
    this.vars.currentAnimation = "right";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveDownArrow() {
    this.vars.currentAnimation = "down";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceivePose() {
    this.vars.currentAnimation = "pose";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveUpArrow() {
    this.vars.currentAnimation = "up";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveLeftArrow() {
    this.vars.currentAnimation = "left";
    this.vars.animationIdleDelay = 0;
  }

  *whenIReceiveDie() {
    yield* this.startSound("fnf_loss_sfx");
    this.vars.currentAnimation = "die";
    this.vars.animationIdleDelay = 0;
  }

  *whenKeyMPressed() {
    if (this.stage.vars.mute == 0) {
      this.stage.vars.mute = 1;
    } else {
      this.stage.vars.mute = 0;
    }
    this.broadcast("Mute");
  }

  *whenIReceiveMute() {
    if (this.stage.vars.mute == 1) {
      this.audioEffects.volume = 0;
    } else {
      this.audioEffects.volume = 100;
    }
  }
}
