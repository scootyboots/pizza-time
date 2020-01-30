import croost from '../images/crooster.jpg'

export default {
    "home": {
        "type": "default",
        "events": [
            { type: "text", content: "You're at home, What do you do?" },
            { type: "image", content: croost , alt: "cooster face"},
            { type: "text", content: "I know right? Doesn't get much worse than that" }
        ],
        "notification": { active: false, number: 0, key: "" },
        "answers": [
            { text: "Call tucker", key: "call_tucker" },
            { text: "Look at twitter", key: "look_at_internet" },
        ]
    },
    "call_tucker": {
        "type": "default",
        "events": [
            { type: "text", content: "He doesn't pick up because in the end he really doesn't care that much" },
            { type: "text", content: "You think maybe if I can just think of something funnier to say" }
        ],
        "notification": { active: true, number: 1, key: "look_at_internet" },
        "answers": [
            { text: "Look at twitter", key: "look_at_internet" },
            { text: "Give up", key: "you_suck" }
        ]
    },
    "look_at_internet": {
        "type": "default",
        "events": [
            {type: "text", content: "Twitter sucks and you hate yourself."}
        ],
        "notification": { active: true, number: 12, key: "call_tucker" },
        "answers": []
    },
    "answer_peggy": {
        "type": "message",
        events:[
            { sender: true, text: "I'm dumb and my name is Crista" },
            { sender: false, text: "I'm also dumb, but my name is not Crista" }
        ],
        "notification": { active: false, number: 0, key: "" },
    }
}