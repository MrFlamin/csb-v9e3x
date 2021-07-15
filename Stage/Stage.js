/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bitmapcity", "./Stage/costumes/bitmapcity.svg", {
        x: 345.41193,
        y: 211.56468999999998
      }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 229.25000000000003,
        y: 176.49837000000002
      })
    ];

    this.sounds = [new Sound("Inst", "./Stage/sounds/Inst.mp3")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "l" }, this.whenKeyLPressed),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Die" }, this.whenIReceiveDie),
      new Trigger(Trigger.BROADCAST, { name: "Mute" }, this.whenIReceiveMute)
    ];

    this.vars.mute = 0;
    this.vars.volumeStage = 100;
  }

  *whenKeyLPressed() {
    if (this.vars.mute == 0) {
      this.audioEffects.volume = 20;
    }
    this.vars.volumeStage = 20;
    yield* this.wait(0.6);
    for (let i = 0; i < 40; i++) {
      if (this.vars.mute == 0) {
        this.audioEffects.volume += 2;
      }
      this.vars.volumeStage += 2;
      yield;
    }
  }

  *whenIReceiveStart() {
    this.audioEffects.volume = 100;
    this.vars.volumeStage = 100;
    while (true) {
      this.broadcast("tick");
      yield* this.wait(0);
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.startSound("Voices");
      yield* this.playSoundUntilDone("Inst");
      yield;
    }
  }

  *whenIReceiveDie() {
    if (this.vars.mute == 0) {
      this.audioEffects.volume = 20;
    }
    this.vars.volumeStage = 20;
    yield* this.wait(0.6);
    for (let i = 0; i < 40; i++) {
      if (this.vars.mute == 0) {
        this.audioEffects.volume += 2;
      }
      this.vars.volumeStage += 2;
      yield;
    }
  }

  *whenIReceiveMute() {
    if (this.vars.mute == 1) {
      this.audioEffects.volume = 0;
    } else {
      this.audioEffects.volume = this.vars.volumeStage;
    }
  }
}
