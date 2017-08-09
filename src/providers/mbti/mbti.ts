import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MbtiProvider {

  responseMap = {
    "1": {
      q: "When the phone rings, do you:",
      r1: "hurry to get it first",
      r1type: "e",
      r2: "hope someone else will answer it",
      r2type: "i"
    },
    "2": {
      q: "Are you more:",
      r1: "observant than introspective",
      r1type: "s",
      r2: "introspective than observant",
      r2type: "n"
    },
    "3": {
      q: "Is it worse to:",
      r1: "have your head in the clouds",
      r1type: "s",
      r2: "be in a rut",
      r2type: "n"
    },
    "4": {
      q: "With people, are you usually more:",
      r1: "firm than gentle",
      r1type: "t",
      r2: "gentle than firm",
      r2type: "f"
    },
    "5": {
      q: "Are you more comfortable in making:",
      r1: "critical judgements",
      r1type: "t",
      r2: "value judgements",
      r2type: "f"
    },
    "6": {
      q: "Is clutter in the workplace something you:",
      r1: "take time to straighten up",
      r1type: "j",
      r2: "tolerate pretty well",
      r2type: "p"
    },
    "7": {
      q: "Is it your way to:",
      r1: "make up your mind quickly",
      r1type: "j",
      r2: "pick and choose at some length",
      r2type: "p"
    },
    "8": {
      q: "Waiting in line, do you often:",
      r1: "chat with others",
      r1type: "e",
      r2: "stick to business",
      r2type: "i"
    },
    "9": {
      q: "Are you more:",
      r1: "sensible than ideational",
      r1type: "s",
      r2: "ideational than sensible",
      r2type: "n"
    },
    "10": {
      q: "Are you more interested in:",
      r1: "what is actual",
      r1type: "s",
      r2: "what is possible",
      r2type: "n"
    },
    "11": {
      q: "In making up your mind, are you more likely to go by:",
      r1: "data",
      r1type: "t",
      r2: "desires",
      r2type: "f"
    },
    "12": {
      q: "In sizing up others, do you tend to be:",
      r1: "objective and impersonal",
      r1type: "t",
      r2: "friendly and personal",
      r2type: "f"
    },
    "13": {
      q: "Do you prefer contracts to be:",
      r1: "signed, sealed, and delivered",
      r1type: "j",
      r2: "settled on a handshake",
      r2type: "p"
    },
    "14": {
      q: "Are you more satisfied having:",
      r1: "a finished product",
      r1type: "j",
      r2: "work in progress",
      r2type: "p"
    },
    "15": {
      q: "At a party, do you:",
      r1: "interact with many, even strangers",
      r1type: "e",
      r2: "interact with a few friends",
      r2type: "i"
    },
    "16": {
      q: "Do you tend to be more:",
      r1: "factual than speculative",
      r1type: "s",
      r2: "speculative than factual",
      r2type: "n"
    },
    "17": {
      q: "Do you like writers who:",
      r1: "say what they mean",
      r1type: "s",
      r2: "use metaphors and symbolism",
      r2type: "n"
    },
    "18": {
      q: "Which appeals to you more?:",
      r1: "Consistency of thought",
      r1type: "t",
      r2: "Harmonious relationships",
      r2type: "f"
    },
    "19": {
      q: "If you must dissapoint someone, are you usually:",
      r1: "frank and straightforward",
      r1type: "t",
      r2: "warm and considerate",
      r2type: "f"
    },
    "20": {
      q: "On the job, do you want your activities:",
      r1: "scheduled",
      r1type: "j",
      r2: "unscheduled",
      r2type: "p"
    },
    "21": {
      q: "Do you often prefer:",
      r1: "final, unalterable statements",
      r1type: "j",
      r2: "tentative, preliminary statements",
      r2type: "p"
    },
    "22": {
      q: "Does interacting with strangers:",
      r1: "energize you",
      r1type: "e",
      r2: "tax your reserve",
      r2type: "i"
    },
    "23": {
      q: "Facts:",
      r1: "speak for themselves",
      r1type: "s",
      r2: "illustrate principles",
      r2type: "n"
    },
    "24": {
      q: "Do you find visionaries and theorists:",
      r1: "somewhat annoying",
      r1type: "s",
      r2: "rather fascinating",
      r2type: "n"
    },
    "25": {
      q: "In a heated discussion, do you:",
      r1: "stick to your guns",
      r1type: "t",
      r2: "look for common ground",
      r2type: "f"
    },
    "26": {
      q: "Is it better to be:",
      r1: "just",
      r1type: "t",
      r2: "merciful",
      r2type: "f"
    },
    "27": {
      q: "At work, is it more natural for you to:",
      r1: "point out mistakes",
      r1type: "j",
      r2: "try to please others",
      r2type: "p"
    },
    "28": {
      q: "Are you more comfortable:",
      r1: "after a decision",
      r1type: "j",
      r2: "before a decision",
      r2type: "p"
    },
    "29": {
      q: "Do you tend to:",
      r1: "say right out what's on your mind",
      r1type: "e",
      r2: "keep your ears open",
      r2type: "i"
    },
    "30": {
      q: "Common sense is:",
      r1: "usually reliable",
      r1type: "s",
      r2: "frequently questionable",
      r2type: "n"
    },
    "31": {
      q: "Children often do not:",
      r1: "make themselves useful enough",
      r1type: "s",
      r2: "exercise their fantasy enough",
      r2type: "n"
    },
    "32": {
      q: "When in charge of others, do you tend to be:",
      r1: "firm and unbending",
      r1type: "t",
      r2: "a warm-hearted person",
      r2type: "f"
    },
    "33": {
      q: "Are you more often:",
      r1: "a cool-headed person",
      r1type: "t",
      r2: "forgiving and lenient",
      r2type: "f"
    },
    "34": {
      q: "Are you prone to:",
      r1: "nailing things down",
      r1type: "j",
      r2: "exploring possibilities",
      r2type: "p"
    },
    "35": {
      q: "In most situations, are you more:",
      r1: "deliberate than spontaneous",
      r1type: "j",
      r2: "spontaneous than deliberate",
      r2type: "p"
    },
    "36": {
      q: "Do you think of yourself as:",
      r1: "an outgoing person",
      r1type: "e",
      r2: "a private person",
      r2type: "i"
    },
    "37": {
      q: "Are you more frequently:",
      r1: "a practical sort of person",
      r1type: "s",
      r2: "a fanciful sort of person",
      r2type: "n"
    },
    "38": {
      q: "Do you speak more in:",
      r1: "particulars than generalities",
      r1type: "s",
      r2: "generalities than particulars",
      r2type: "n"
    },
    "39": {
      q: "Which is more of a compliment?:",
      r1: "There's a logical person!",
      r1type: "t",
      r2: "There's a sentimental person!",
      r2type: "f"
    },
    "40": {
      q: "Which rules you more?:",
      r1: "Your thoughts",
      r1type: "t",
      r2: "Your feelings",
      r2type: "f"
    },
    "41": {
      q: "When finishing a job, do you like to:",
      r1: "tie up all the loose ends",
      r1type: "j",
      r2: "move on to something else",
      r2type: "p"
    },
    "42": {
      q: "Do you prefer to work:",
      r1: "to deadlines",
      r1type: "j",
      r2: "just whatever",
      r2type: "p"
    },
    "43": {
      q: "Are you the kind of person who:",
      r1: "is rather talkative",
      r1type: "e",
      r2: "doesn't miss much",
      r2type: "i"
    },
    "44": {
      q: "Are you inclined to take what is said:",
      r1: "more literally",
      r1type: "s",
      r2: "more figuratively",
      r2type: "n"
    },
    "45": {
      q: "Do you more often see:",
      r1: "what's right in front of you",
      r1type: "s",
      r2: "what can only be imagined",
      r2type: "n"
    },
    "46": {
      q: "Is it worse to be:",
      r1: "a softy",
      r1type: "t",
      r2: "hard-nosed",
      r2type: "f"
    },
    "47": {
      q: "In trying circumstances, are you sometimes:",
      r1: "too unsympathetic",
      r1type: "t",
      r2: "too sympathetic",
      r2type: "f"
    },
    "48": {
      q: "Do you tend to choose:",
      r1: "rather carefully",
      r1type: "j",
      r2: "somewhat impulsively",
      r2type: "p"
    },
    "49": {
      q: "Are you inclined to be more:",
      r1: "hurried than leisurely",
      r1type: "j",
      r2: "leisurely than hurried",
      r2type: "p"
    },
    "50": {
      q: "At work do you tend to:",
      r1: "be sociable with your colleages",
      r1type: "e",
      r2: "keep more to yourself",
      r2type: "i"
    },
    "51": {
      q: "Are you more likely to trust:",
      r1: "your experiences",
      r1type: "s",
      r2: "your conceptions",
      r2type: "n"
    },
    "52": {
      q: "Are you more inclined to feel:",
      r1: "down to earth",
      r1type: "s",
      r2: "somewhat removed",
      r2type: "n"
    },
    "53": {
      q: "Do you think of yourself as a:",
      r1: "tough-minded person",
      r1type: "t",
      r2: "tender-hearted person",
      r2type: "f"
    },
    "54": {
      q: "Do you value in yourself more that you are:",
      r1: "reasonable",
      r1type: "t",
      r2: "devoted",
      r2type: "f"
    },
    "55": {
      q: "Do you usually want things:",
      r1: "settled and decided",
      r1type: "j",
      r2: "just penciled in",
      r2type: "p"
    },
    "56": {
      q: "Would you say you are more:",
      r1: "serious and determined",
      r1type: "j",
      r2: "easy going",
      r2type: "p"
    },
    "57": {
      q: "Do you consider yourself:",
      r1: "a good conversationalist",
      r1type: "e",
      r2: "a good listener",
      r2type: "i"
    },
    "58": {
      q: "Do you prize in yourself:",
      r1: "a strong hold on reality",
      r1type: "s",
      r2: "a vivid imagination",
      r2type: "n"
    },
    "59": {
      q: "Are you more drawn to:",
      r1: "fundamentals",
      r1type: "s",
      r2: "overtones",
      r2type: "n"
    },
    "60": {
      q: "Which seems the greater fault?:",
      r1: "To be too compassionate",
      r1type: "t",
      r2: "to be too dispassionate",
      r2type: "f"
    },
    "61": {
      q: "Are you swayed more by:",
      r1: "convincing evidence",
      r1type: "t",
      r2: "a touching appeal",
      r2type: "f"
    },
    "62": {
      q: "Do you feel better about:",
      r1: "coming to closure",
      r1type: "j",
      r2: "keeping your options open",
      r2type: "p"
    },
    "63": {
      q: "Is it mostly preferable to:",
      r1: "make sure things are arranged",
      r1type: "j",
      r2: "just let things happen naturally",
      r2type: "p"
    },
    "64": {
      q: "Are you inclined to be:",
      r1: "easy to approach",
      r1type: "e",
      r2: "somewhat reserved",
      r2type: "i"
    },
    "65": {
      q: "In stories, do you prefer:",
      r1: "action and adventure",
      r1type: "s",
      r2: "fantasy and heroism",
      r2type: "n"
    },
    "66": {
      q: "Is it easier for you to:",
      r1: "put others to good use",
      r1type: "s",
      r2: "identify with others",
      r2type: "n"
    },
    "67": {
      q: "Which do you wish more for yourself:",
      r1: "strength of will",
      r1type: "t",
      r2: "strength of emotion",
      r2type: "f"
    },
    "68": {
      q: "Do you see yourself as basically:",
      r1: "thick-skinned",
      r1type: "t",
      r2: "thin-skinned",
      r2type: "f"
    },
    "69": {
      q: "Do you tend to notice:",
      r1: "disorderliness",
      r1type: "j",
      r2: "opportunities for change",
      r2type: "p"
    },
    "70": {
      q: "Are you more:",
      r1: "routinized than whimsical",
      r1type: "j",
      r2: "whimsical than routinized",
      r2type: "p"
    },
  }

  constructor(public http: Http) {
    console.log('Hello MbtiProvider Provider');
  }

}
