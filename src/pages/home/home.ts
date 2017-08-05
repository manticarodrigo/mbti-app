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
    },
    "7": {
      q: "is it your way to",
      r1: "make up your mind quickly",
      r2: "pick and choose at some length"
    },
    "8": {
      q: "waiting in line, do you often",
      r1: "chat with others",
      r2: "stick to business"
    },
    "9": {
      q: "are you more",
      r1: "sensible than ideational",
      r2: "ideational than sensible"
    },
    "10": {
      q: "are you more interested in what is",
      r1: "what is actual",
      r2: "what is possible"
    },
    "11": {
      q: "in making up your mind, are you more likely to go by",
      r1: "data",
      r2: "desires"
    },
    "12": {
      q: "in sizing up others, do you tend to be",
      r1: "objective and impersonal",
      r2: "friendly and personal"
    },
    "13": {
      q: "do you prefer contracts to be",
      r1: "signed, sealed, an delivered",
      r2: "settled on a handshake"
    },
    "14": {
      q: "are you more satisfied having",
      r1: "a finished product",
      r2: "work in progress"
    },
    "15": {
      q: "at a party, do you",
      r1: "interact with many, even strangers",
      r2: "interact with a few friends"
    },
    "16": {
      q: "do you tend to be more",
      r1: "factual than speculative",
      r2: "speculative than factual"
    },
    "17": {
      q: "do you like writers who",
      r1: "say what they mean",
      r2: "use metaphors and symbolism"
    },
    "18": {
      q: "which appeals to you more",
      r1: "consistency of thought",
      r2: "harmonious relationship"
    },
    "19": {
      q: "if you must disappoint someone are you usually",
      r1: "frank and straightforward",
      r2: "warm and considerate"
    },
    "20": {
      q: "on the job, do you want your activities",
      r1: "scheduled",
      r2: "unscheduled"
    },
    "21": {
      q: "do you often prefer",
      r1: "final, unalterable statements",
      r2: "tentative, preliminary statements"
    },
    "22": {
      q: "does interacting with strangers",
      r1: "energize you",
      r2: "tax your reserve"
    },
    "23": {
      q: "facts",
      r1: "speak for themselves",
      r2: "illustrate principles"
    },
    "24": {
      q: "do you find visionaries and theorists",
      r1: "somewhat annoying",
      r2: "rather fascinating"
    },
    "25": {
      q: "in a heated discussion, do you",
      r1: "stick to your guns",
      r2: "look for common ground"
    },
    "26": {
      q: "is it better to be",
      r1: "just",
      r2: "merciful"
    },
    "27": {
      q: "at work, is it more natural for you to",
      r1: "point out mistakes",
      r2: "try to please others"
    },
    "28": {
      q: "are you more comfortable",
      r1: "after a decision",
      r2: "before a decision"
    },
    "29": {
      q: "do you tend to",
      r1: "say right out whats on your mind",
      r2: "keep your ears open"
    },
    "30": {
      q: "common sense is",
      r1: "usually reliable",
      r2: "frequently questionable"
    },
    "31": {
      q: "children often do not",
      r1: "make themselves useful enough",
      r2: "exercise their fantasy enough"
    },
    "32": {
      q: "when in charge of others, do you tend to be",
      r1: "firm and unbending",
      r2: "a warm-hearted person"
    },
    "33": {
      q: "are you more often",
      r1: "a cool-headed person",
      r2: "forgiving and lenient"
    },
    "34": {
      q: "are you prone to",
      r1: "nailing things down",
      r2: "exloring possibilities"
    },
    "35": {
      q: "in most situations, are you more",
      r1: "deliberate than spontaneous",
      r2: "spontaneous than deliberate"
    },
    "36": {
      q: "do you think of yourself as",
      r1: "an outgoing person",
      r2: "a private person"
    },
    "37": {
      q: "are you more frequently",
      r1: "a practical sort of person",
      r2: "a fanciful sort of person"
    },
    "38": {
      q: "do you speak more in",
      r1: "particulars than generalities",
      r2: "generalities than particulars"
    },
    "39": {
      q: "which is more of a compliment",
      r1: "there's a logical person",
      r2: "there's a sentimental person"
    },
    "40": {
      q: "which rules you more",
      r1: "your thoughts",
      r2: "your feelings"
    },
    "41": {
      q: "when finishing a job, do you like to",
      r1: "tie up all the loose ends",
      r2: "move on to something else"
    },
    "42": {
      q: "do you prefer to work",
      r1: "to deadlines",
      r2: "just whatever"
    },
    "43": {
      q: "are you the kind of person who",
      r1: "is rather talkative",
      r2: "doesn't miss much"
    },
    "44": {
      q: "are you inclined to take what is said",
      r1: "more literally",
      r2: "more figuratively"
    },
    "45": {
      q: "do you more often see",
      r1: "what's right in front of you",
      r2: "what can only be imagined"
    },
    "46": {
      q: "is it worse to be",
      r1: "a softy",
      r2: "hard-nosed"
    },
    "47": {
      q: "in trying circumstances, are you sometimes",
      r1: "too unsympathetic",
      r2: "too sympathetic"
    },
    "48": {
      q: "do you tend to choose",
      r1: "rather carefully",
      r2: "somewhat impulsively"
    },
    "49": {
      q: "are you inclined to be more",
      r1: "hurried than leisurely",
      r2: "leisurely than hurried"
    },
    "50": {
      q: "at work do you tend to",
      r1: "be sociable with your colleagues",
      r2: "keep more to yourself"
    },
    "51": {
      q: "are you most likely to trust",
      r1: "your experiences",
      r2: "your conceptions"
    },
    "52": {
      q: "are you inclined to feel",
      r1: "down to earth",
      r2: "somewhat removed"
    },
    "53": {
      q: "do you think of yourself as a",
      r1: "tough-minded person",
      r2: "tender-hearted person"
    },
    "54": {
      q: "do you value in yourself more that you are",
      r1: "reasonable",
      r2: "devoted"
    },
    "55": {
      q: "do you usually want things",
      r1: "settled and decided",
      r2: "just penciled in"
    },
    "56": {
      q: "would you say you are more",
      r1: "serious and determined",
      r2: "easy going"
    },
    "57": {
      q: "do you consider yourself",
      r1: "a good conversationalist",
      r2: "a good listener"
    },
    "58": {
      q: "do you prize in yourself",
      r1: "a strong hold on reality",
      r2: "a vivid imagination"
    },
    "59": {
      q: "are you drawn more to",
      r1: "fundamentals",
      r2: "overtones"
    },
    "60": {
      q: "which seems the greater fault",
      r1: "to be too compassionate",
      r2: "to be too dispassionate"
    },
    "61": {
      q: "are you swayed more by",
      r1: "convincing evidence",
      r2: "a touching appeal"
    },
    "62": {
      q: "do you feel better about",
      r1: "coming to closure",
      r2: "keeping your options open"
    },
    "63": {
      q: "is it preferable mostly to",
      r1: "make sure things are arranged",
      r2: "just let things happen naturally"
    },
    "64": {
      q: "are you inclined to be",
      r1: "easy to approach",
      r2: "somewhat reserved"
    },
    "65": {
      q: "in stories, do you prefer",
      r1: "action and adventure",
      r2: "fantasy and heroism"
    },
    "66": {
      q: "is it easier for you to",
      r1: "put others to good use",
      r2: "identify with others"
    },
    "67": {
      q: "which do you wish more for yourself",
      r1: "strength of will",
      r2: "strength of emotion"
    },
    "68": {
      q: "do you see yourself as basically",
      r1: "thick-skinned",
      r2: "thin-skinned"
    },
    "69": {
      q: "do you tend to notice",
      r1: "disorderliness",
      r2: "opportunities for change"
    },
    "70": {
      q: "are you more",
      r1: "routinized than whimsical",
      r2: "whimsical than routinized"
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
      };