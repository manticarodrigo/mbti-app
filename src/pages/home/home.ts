import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MbtiProvider } from '../../providers/mbti/mbti';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  step = 1;

  responseMap: any;

  iCount = 0;
  eCount = 0;
  sCount = 0;
  nCount = 0;
  tCount = 0;
  fCount = 0;
  jCount = 0;
  pCount = 0;

  constructor(public navCtrl: NavController,
              public mbtiProvider: MbtiProvider) {
    this.responseMap = this.mbtiProvider.responseMap;

  }

  buttonPressed(i) {
    console.log("button " + i + "pressed")
    if (this.step < 70) {
      this.step++
    } else {
      this.step = 1;
      this.iCount = 0;
      this.eCount = 0;
      this.sCount = 0;
      this.nCount = 0;
      this.tCount = 0;
      this.fCount = 0;
      this.jCount = 0;
      this.pCount = 0;
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
    if (this.step == 7) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 8) {
      if (i == 1) {
        this.eCount++;
      }
      if (i == 2) {
        this.iCount++;
      }
    }
    if (this.step == 9) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 10) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 11) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 12) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 13) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 14) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 15) {
      if (i == 1) {
        this.eCount++;
      }
      if (i == 2) {
        this.iCount++;
      }
    }
    if (this.step == 16) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 17) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 18) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 19) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 20) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 21) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 22) {
      if (i == 1) {
        this.eCount++;
      }
      if (i == 2) {
        this.iCount++;
      }
    }
    if (this.step == 23) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 24) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 25) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 26) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 27) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 28) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 29) {
      if (i == 1) {
        this.eCount++;
      }
      if (i == 2) {
        this.iCount++;
      }
    }
    if (this.step == 30) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 31) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 32) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 33) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
    if (this.step == 34) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 35) {
      if (i == 1) {
        this.jCount++;
      }
      if (i == 2) {
        this.pCount++;
      }
    }
    if (this.step == 36) {
      if (i == 1) {
        this.eCount++;
      }
      if (i == 2) {
        this.iCount++;
      }
    }
    if (this.step == 37) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 38) {
      if (i == 1) {
        this.sCount++;
      }
      if (i == 2) {
        this.nCount++;
      }
    }
    if (this.step == 39) {
      if (i == 1) {
        this.tCount++;
      }
      if (i == 2) {
        this.fCount++;
      }
    }
  }
};