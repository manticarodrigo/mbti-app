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
<<<<<<< HEAD
      q: "is it your way to",
=======
      q: "Is it your way to:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "make up your mind quickly",
      r2: "pick and choose at some length"
    },
    "8": {
<<<<<<< HEAD
      q: "waiting in line, do you often",
=======
      q: "Waiting in line, do you often:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "chat with others",
      r2: "stick to business"
    },
    "9": {
<<<<<<< HEAD
      q: "are you more",
=======
      q: "Are you more:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "sensible than ideational",
      r2: "ideational than sensible"
    },
    "10": {
<<<<<<< HEAD
      q: "are you more interested in what is",
=======
      q: "Are you more interested in:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "what is actual",
      r2: "what is possible"
    },
    "11": {
<<<<<<< HEAD
      q: "in making up your mind, are you more likely to go by",
=======
      q: "In making up your mind, are you more likely to go by:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "data",
      r2: "desires"
    },
    "12": {
<<<<<<< HEAD
      q: "in sizing up others, do you tend to be",
=======
      q: "In sizing up others, do you tend to be:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "objective and impersonal",
      r2: "friendly and personal"
    },
    "13": {
<<<<<<< HEAD
      q: "do you prefer contracts to be",
      r1: "signed, sealed, an delivered",
      r2: "settled on a handshake"
    },
    "14": {
      q: "are you more satisfied having",
=======
      q: "Do you prefer contracts to be:",
      r1: "signed, sealed, and delivered",
      r2: "settled on a handshake"
    },
    "14": {
      q: "Are you more satisfied having:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "a finished product",
      r2: "work in progress"
    },
    "15": {
<<<<<<< HEAD
      q: "at a party, do you",
=======
      q: "At a party, do you:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "interact with many, even strangers",
      r2: "interact with a few friends"
    },
    "16": {
<<<<<<< HEAD
      q: "do you tend to be more",
=======
      q: "Do you tend to be more:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "factual than speculative",
      r2: "speculative than factual"
    },
    "17": {
<<<<<<< HEAD
      q: "do you like writers who",
=======
      q: "Do you like writers who:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "say what they mean",
      r2: "use metaphors and symbolism"
    },
    "18": {
<<<<<<< HEAD
      q: "which appeals to you more",
      r1: "consistency of thought",
      r2: "harmonious relationship"
    },
    "19": {
      q: "if you must disappoint someone are you usually",
=======
      q: "Which appeals to you more?:",
      r1: "Consistency of thought",
      r2: "Harmonious relationships"
    },
    "19": {
      q: "If you must dissapoint someone, are you usually:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "frank and straightforward",
      r2: "warm and considerate"
    },
    "20": {
<<<<<<< HEAD
      q: "on the job, do you want your activities",
=======
      q: "On the job, do you want your activities:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "scheduled",
      r2: "unscheduled"
    },
    "21": {
<<<<<<< HEAD
      q: "do you often prefer",
=======
      q: "Do you often prefer:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "final, unalterable statements",
      r2: "tentative, preliminary statements"
    },
    "22": {
<<<<<<< HEAD
      q: "does interacting with strangers",
=======
      q: "Does interacting with strangers:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "energize you",
      r2: "tax your reserve"
    },
    "23": {
<<<<<<< HEAD
      q: "facts",
=======
      q: "Facts:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "speak for themselves",
      r2: "illustrate principles"
    },
    "24": {
<<<<<<< HEAD
      q: "do you find visionaries and theorists",
=======
      q: "Do you find visionaries and theorists:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "somewhat annoying",
      r2: "rather fascinating"
    },
    "25": {
<<<<<<< HEAD
      q: "in a heated discussion, do you",
=======
      q: "In a heated discussion, do you:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "stick to your guns",
      r2: "look for common ground"
    },
    "26": {
<<<<<<< HEAD
      q: "is it better to be",
=======
      q: "Is it better to be:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "just",
      r2: "merciful"
    },
    "27": {
<<<<<<< HEAD
      q: "at work, is it more natural for you to",
=======
      q: "At work, is it more natural for you to:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "point out mistakes",
      r2: "try to please others"
    },
    "28": {
<<<<<<< HEAD
      q: "are you more comfortable",
=======
      q: "Are you more comfortable:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "after a decision",
      r2: "before a decision"
    },
    "29": {
<<<<<<< HEAD
      q: "do you tend to",
      r1: "say right out whats on your mind",
      r2: "keep your ears open"
    },
    "30": {
      q: "common sense is",
=======
      q: "Do you tend to:",
      r1: "say right out what's on your mind",
      r2: "keep your ears open"
    },
    "30": {
      q: "Common sense is:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "usually reliable",
      r2: "frequently questionable"
    },
    "31": {
<<<<<<< HEAD
      q: "children often do not",
=======
      q: "Children often do not:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "make themselves useful enough",
      r2: "exercise their fantasy enough"
    },
    "32": {
<<<<<<< HEAD
      q: "when in charge of others, do you tend to be",
=======
      q: "When in charge of others, do you tend to be:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "firm and unbending",
      r2: "a warm-hearted person"
    },
    "33": {
<<<<<<< HEAD
      q: "are you more often",
=======
      q: "Are you more often:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "a cool-headed person",
      r2: "forgiving and lenient"
    },
    "34": {
<<<<<<< HEAD
      q: "are you prone to",
      r1: "nailing things down",
      r2: "exloring possibilities"
    },
    "35": {
      q: "in most situations, are you more",
=======
      q: "Are you prone to:",
      r1: "nailing things down",
      r2: "exploring possibilities"
    },
    "35": {
      q: "In most situations, are you more:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "deliberate than spontaneous",
      r2: "spontaneous than deliberate"
    },
    "36": {
<<<<<<< HEAD
      q: "do you think of yourself as",
=======
      q: "Do you think of yourself as:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "an outgoing person",
      r2: "a private person"
    },
    "37": {
<<<<<<< HEAD
      q: "are you more frequently",
=======
      q: "Are you more frequently:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "a practical sort of person",
      r2: "a fanciful sort of person"
    },
    "38": {
<<<<<<< HEAD
      q: "do you speak more in",
=======
      q: "Do you speak more in:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "particulars than generalities",
      r2: "generalities than particulars"
    },
    "39": {
<<<<<<< HEAD
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
=======
      q: "Which is more of a compliment?:",
      r1: "There's a logical person!",
      r2: "There's a sentimental person!"
    },
    "40": {
      q: "Which rules you more?:",
      r1: "Your thoughts",
      r2: "Your feelings"
    },
    "41": {
      q: "When finishing a job, do you like to:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "tie up all the loose ends",
      r2: "move on to something else"
    },
    "42": {
<<<<<<< HEAD
      q: "do you prefer to work",
=======
      q: "Do you prefer to work:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "to deadlines",
      r2: "just whatever"
    },
    "43": {
<<<<<<< HEAD
      q: "are you the kind of person who",
=======
      q: "Are you the kind of person who:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "is rather talkative",
      r2: "doesn't miss much"
    },
    "44": {
<<<<<<< HEAD
      q: "are you inclined to take what is said",
=======
      q: "Are you inclined to take what is said:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "more literally",
      r2: "more figuratively"
    },
    "45": {
<<<<<<< HEAD
      q: "do you more often see",
=======
      q: "Do you more often see:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "what's right in front of you",
      r2: "what can only be imagined"
    },
    "46": {
<<<<<<< HEAD
      q: "is it worse to be",
=======
      q: "Is it worse to be:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "a softy",
      r2: "hard-nosed"
    },
    "47": {
<<<<<<< HEAD
      q: "in trying circumstances, are you sometimes",
=======
      q: "In trying circumstances, are you sometimes:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "too unsympathetic",
      r2: "too sympathetic"
    },
    "48": {
<<<<<<< HEAD
      q: "do you tend to choose",
=======
      q: "Do you tend to choose:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "rather carefully",
      r2: "somewhat impulsively"
    },
    "49": {
<<<<<<< HEAD
      q: "are you inclined to be more",
=======
      q: "Are you inclined to be more:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "hurried than leisurely",
      r2: "leisurely than hurried"
    },
    "50": {
<<<<<<< HEAD
      q: "at work do you tend to",
      r1: "be sociable with your colleagues",
      r2: "keep more to yourself"
    },
    "51": {
      q: "are you most likely to trust",
=======
      q: "At work do you tend to:",
      r1: "be sociable with your colleages",
      r2: "keep more to yourself"
    },
    "51": {
      q: "Are you more likely to trust:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "your experiences",
      r2: "your conceptions"
    },
    "52": {
<<<<<<< HEAD
      q: "are you inclined to feel",
=======
      q: "Are you more inclined to feel:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "down to earth",
      r2: "somewhat removed"
    },
    "53": {
<<<<<<< HEAD
      q: "do you think of yourself as a",
=======
      q: "Do you think of yourself as a:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "tough-minded person",
      r2: "tender-hearted person"
    },
    "54": {
<<<<<<< HEAD
      q: "do you value in yourself more that you are",
=======
      q: "Do you value in yourself more that you are:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "reasonable",
      r2: "devoted"
    },
    "55": {
<<<<<<< HEAD
      q: "do you usually want things",
=======
      q: "Do you usually want things:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "settled and decided",
      r2: "just penciled in"
    },
    "56": {
<<<<<<< HEAD
      q: "would you say you are more",
=======
      q: "Would you say you are more:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "serious and determined",
      r2: "easy going"
    },
    "57": {
<<<<<<< HEAD
      q: "do you consider yourself",
=======
      q: "Do you consider yourself:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "a good conversationalist",
      r2: "a good listener"
    },
    "58": {
<<<<<<< HEAD
      q: "do you prize in yourself",
=======
      q: "Do you prize in yourself:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "a strong hold on reality",
      r2: "a vivid imagination"
    },
    "59": {
<<<<<<< HEAD
      q: "are you drawn more to",
=======
      q: "Are you more drawn to:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "fundamentals",
      r2: "overtones"
    },
    "60": {
<<<<<<< HEAD
      q: "which seems the greater fault",
      r1: "to be too compassionate",
      r2: "to be too dispassionate"
    },
    "61": {
      q: "are you swayed more by",
=======
      q: "Which seems the greater fault?:",
      r1: "To be too compassionate",
      r2: "to be too dispassionate"
    },
    "61": {
      q: "Are you swayed more by:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "convincing evidence",
      r2: "a touching appeal"
    },
    "62": {
<<<<<<< HEAD
      q: "do you feel better about",
=======
      q: "Do you feel better about:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "coming to closure",
      r2: "keeping your options open"
    },
    "63": {
<<<<<<< HEAD
      q: "is it preferable mostly to",
=======
      q: "Is it mostly preferable to:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "make sure things are arranged",
      r2: "just let things happen naturally"
    },
    "64": {
<<<<<<< HEAD
      q: "are you inclined to be",
=======
      q: "Are you inclined to be:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "easy to approach",
      r2: "somewhat reserved"
    },
    "65": {
<<<<<<< HEAD
      q: "in stories, do you prefer",
=======
      q: "In stories, do you prefer:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "action and adventure",
      r2: "fantasy and heroism"
    },
    "66": {
<<<<<<< HEAD
      q: "is it easier for you to",
=======
      q: "Is it easier for you to:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "put others to good use",
      r2: "identify with others"
    },
    "67": {
<<<<<<< HEAD
      q: "which do you wish more for yourself",
=======
      q: "Which do you wish more for yourself:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "strength of will",
      r2: "strength of emotion"
    },
    "68": {
<<<<<<< HEAD
      q: "do you see yourself as basically",
=======
      q: "Do you see yourself as basically:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "thick-skinned",
      r2: "thin-skinned"
    },
    "69": {
<<<<<<< HEAD
      q: "do you tend to notice",
=======
      q: "Do you tend to notice:",
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
      r1: "disorderliness",
      r2: "opportunities for change"
    },
    "70": {
<<<<<<< HEAD
      q: "are you more",
      r1: "routinized than whimsical",
      r2: "whimsical than routinized"
    }
=======
      q: "Are you more:",
      r1: "routinized than whimsical",
      r2: "whimsical than routinized"
    },
  }
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9

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
<<<<<<< HEAD
    console.log("button " + i + "pressed")
    if (this.step < 70) {
      this.step++
=======
    console.log("button " + i + "pressed");
    if (this.step < 70) {
      this.step++;
>>>>>>> 4e2f9cdd5156c955d35f698ee9323e57969395b9
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