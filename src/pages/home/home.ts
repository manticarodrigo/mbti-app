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
      r1: "observant than introspective",
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

  iCount = 0;
  eCount = 0;
  sCount = 0;
  nCount = 0;
  tCount = 0;
  fCount = 0;
  jCount = 0;
  pCount = 0;

  constructor(public navCtrl: NavController) {

  }

  buttonPressed(i) {
    console.log("button " + i + "pressed");
    if (this.step < 6) {
      this.step++;
    } else {
      this.step = 1;
    }
    if (this.step == 1) {
      if (i == 1) {
        this.eCount++;
      }
      if (i == 2) {
        this.iCount++;

      }
    }
    if (this.step == 2) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;

      }
    }
    if (this.step == 3) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;

      }
    }
    if (this.step == 4) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;

      }
    }
    if (this.step == 5) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;

      }
    }
    if (this.step == 6) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;

      }
    }
  }

}
