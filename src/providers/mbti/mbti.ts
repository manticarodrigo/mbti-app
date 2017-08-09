import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MbtiProvider {

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
      q: "Is it your way to:",
      r1: "make up your mind quickly",
      r2: "pick and choose at some length"
    },
    "8": {
      q: "Waiting in line, do you often:",
      r1: "chat with others",
      r2: "stick to business"
    },
    "9": {
      q: "Are you more:",
      r1: "sensible than ideational",
      r2: "ideational than sensible"
    },
    "10": {
      q: "Are you more interested in:",
      r1: "what is actual",
      r2: "what is possible"
    },
    "11": {
      q: "In making up your mind, are you more likely to go by:",
      r1: "data",
      r2: "desires"
    },
    "12": {
      q: "In sizing up others, do you tend to be:",
      r1: "objective and impersonal",
      r2: "friendly and personal"
    },
    "13": {
      q: "Do you prefer contracts to be:",
      r1: "signed, sealed, and delivered",
      r2: "settled on a handshake"
    },
    "14": {
      q: "Are you more satisfied having:",
      r1: "a finished product",
      r2: "work in progress"
    },
    "15": {
      q: "At a party, do you:",
      r1: "interact with many, even strangers",
      r2: "interact with a few friends"
    },
    "16": {
      q: "Do you tend to be more:",
      r1: "factual than speculative",
      r2: "speculative than factual"
    },
    "17": {
      q: "Do you like writers who:",
      r1: "say what they mean",
      r2: "use metaphors and symbolism"
    },
    "18": {
      q: "Which appeals to you more?:",
      r1: "Consistency of thought",
      r2: "Harmonious relationships"
    },
    "19": {
      q: "If you must dissapoint someone, are you usually:",
      r1: "frank and straightforward",
      r2: "warm and considerate"
    },
    "20": {
      q: "On the job, do you want your activities:",
      r1: "scheduled",
      r2: "unscheduled"
    },
    "21": {
      q: "Do you often prefer:",
      r1: "final, unalterable statements",
      r2: "tentative, preliminary statements"
    },
    "22": {
      q: "Does interacting with strangers:",
      r1: "energize you",
      r2: "tax your reserve"
    },
    "23": {
      q: "Facts:",
      r1: "speak for themselves",
      r2: "illustrate principles"
    },
    "24": {
      q: "Do you find visionaries and theorists:",
      r1: "somewhat annoying",
      r2: "rather fascinating"
    },
    "25": {
      q: "In a heated discussion, do you:",
      r1: "stick to your guns",
      r2: "look for common ground"
    },
    "26": {
      q: "Is it better to be:",
      r1: "just",
      r2: "merciful"
    },
    "27": {
      q: "At work, is it more natural for you to:",
      r1: "point out mistakes",
      r2: "try to please others"
    },
    "28": {
      q: "Are you more comfortable:",
      r1: "after a decision",
      r2: "before a decision"
    },
    "29": {
      q: "Do you tend to:",
      r1: "say right out what's on your mind",
      r2: "keep your ears open"
    },
    "30": {
      q: "Common sense is:",
      r1: "usually reliable",
      r2: "frequently questionable"
    },
    "31": {
      q: "Children often do not:",
      r1: "make themselves useful enough",
      r2: "exercise their fantasy enough"
    },
    "32": {
      q: "When in charge of others, do you tend to be:",
      r1: "firm and unbending",
      r2: "a warm-hearted person"
    },
    "33": {
      q: "Are you more often:",
      r1: "a cool-headed person",
      r2: "forgiving and lenient"
    },
    "34": {
      q: "Are you prone to:",
      r1: "nailing things down",
      r2: "exploring possibilities"
    },
    "35": {
      q: "In most situations, are you more:",
      r1: "deliberate than spontaneous",
      r2: "spontaneous than deliberate"
    },
    "36": {
      q: "Do you think of yourself as:",
      r1: "an outgoing person",
      r2: "a private person"
    },
    "37": {
      q: "Are you more frequently:",
      r1: "a practical sort of person",
      r2: "a fanciful sort of person"
    },
    "38": {
      q: "Do you speak more in:",
      r1: "particulars than generalities",
      r2: "generalities than particulars"
    },
    "39": {
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
      r1: "tie up all the loose ends",
      r2: "move on to something else"
    },
    "42": {
      q: "Do you prefer to work:",
      r1: "to deadlines",
      r2: "just whatever"
    },
    "43": {
      q: "Are you the kind of person who:",
      r1: "is rather talkative",
      r2: "doesn't miss much"
    },
    "44": {
      q: "Are you inclined to take what is said:",
      r1: "more literally",
      r2: "more figuratively"
    },
    "45": {
      q: "Do you more often see:",
      r1: "what's right in front of you",
      r2: "what can only be imagined"
    },
    "46": {
      q: "Is it worse to be:",
      r1: "a softy",
      r2: "hard-nosed"
    },
    "47": {
      q: "In trying circumstances, are you sometimes:",
      r1: "too unsympathetic",
      r2: "too sympathetic"
    },
    "48": {
      q: "Do you tend to choose:",
      r1: "rather carefully",
      r2: "somewhat impulsively"
    },
    "49": {
      q: "Are you inclined to be more:",
      r1: "hurried than leisurely",
      r2: "leisurely than hurried"
    },
    "50": {
      q: "At work do you tend to:",
      r1: "be sociable with your colleages",
      r2: "keep more to yourself"
    },
    "51": {
      q: "Are you more likely to trust:",
      r1: "your experiences",
      r2: "your conceptions"
    },
    "52": {
      q: "Are you more inclined to feel:",
      r1: "down to earth",
      r2: "somewhat removed"
    },
    "53": {
      q: "Do you think of yourself as a:",
      r1: "tough-minded person",
      r2: "tender-hearted person"
    },
    "54": {
      q: "Do you value in yourself more that you are:",
      r1: "reasonable",
      r2: "devoted"
    },
    "55": {
      q: "Do you usually want things:",
      r1: "settled and decided",
      r2: "just penciled in"
    },
    "56": {
      q: "Would you say you are more:",
      r1: "serious and determined",
      r2: "easy going"
    },
    "57": {
      q: "Do you consider yourself:",
      r1: "a good conversationalist",
      r2: "a good listener"
    },
    "58": {
      q: "Do you prize in yourself:",
      r1: "a strong hold on reality",
      r2: "a vivid imagination"
    },
    "59": {
      q: "Are you more drawn to:",
      r1: "fundamentals",
      r2: "overtones"
    },
    "60": {
      q: "Which seems the greater fault?:",
      r1: "To be too compassionate",
      r2: "to be too dispassionate"
    },
    "61": {
      q: "Are you swayed more by:",
      r1: "convincing evidence",
      r2: "a touching appeal"
    },
    "62": {
      q: "Do you feel better about:",
      r1: "coming to closure",
      r2: "keeping your options open"
    },
    "63": {
      q: "Is it mostly preferable to:",
      r1: "make sure things are arranged",
      r2: "just let things happen naturally"
    },
    "64": {
      q: "Are you inclined to be:",
      r1: "easy to approach",
      r2: "somewhat reserved"
    },
    "65": {
      q: "In stories, do you prefer:",
      r1: "action and adventure",
      r2: "fantasy and heroism"
    },
    "66": {
      q: "Is it easier for you to:",
      r1: "put others to good use",
      r2: "identify with others"
    },
    "67": {
      q: "Which do you wish more for yourself:",
      r1: "strength of will",
      r2: "strength of emotion"
    },
    "68": {
      q: "Do you see yourself as basically:",
      r1: "thick-skinned",
      r2: "thin-skinned"
    },
    "69": {
      q: "Do you tend to notice:",
      r1: "disorderliness",
      r2: "opportunities for change"
    },
    "70": {
      q: "Are you more:",
      r1: "routinized than whimsical",
      r2: "whimsical than routinized"
    },
  }

  constructor(public http: Http) {
    console.log('Hello MbtiProvider Provider');
  }

}
