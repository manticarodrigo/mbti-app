import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  step = 1;
  responseMap = {
    "1": {
      q: "When the phone rings, do you:",
      r1: "hurry to get it first",
      r2: "hope someone else will answer it"
    },
    "2": {
      q: "Are you more:",
      r1: "observant and introspective",
      r2: "introspective than observant"
    },
    "3": {
      q: "Is it worse to:",
      r1: "have your head in the clouds",
      r2: "be in a rut"
    },
    "4": {
      q: "With people, are you usually more:",
      r1: "firm than gentle",
      r2: "gentle than firm"
    },
    "5": {
      q: "Are you more comfortable in making:",
      r1: "critical judgements",
      r2: "value judgements"
    },
    "6": {
      q: "Is clutter in the workplace something you:",
      r1: "take time to straighten up",
      r2: "tolerate pretty well"
    }
  }

  constructor(public navCtrl: NavController) {

  }

  respOnePressed() {
    console.log("resp one pressed");
    if (this.step < 6) {
      this.step++;
    } else {
      this.step = 1;
    }
  }

  respTwoPressed() {
    console.log("resp two pressed");
    if (this.step < 6) {
      this.step++;
    } else {
      this.step = 1;
    }
  }

}
