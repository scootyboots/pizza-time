// import first from './first-scenario'
// import second from './second-scenario'

// export default {
//     firstScenario: first,
//     secondScenario: second,
// }

export default {
    "home": {
        "description": "You're at home, What do you do?",
        "answers": [
            { text: "Call tucker", key: "call_tucker" },
            { text: "Look at twitter", key: "look_at_internet" },
        ]
    },
    "call_tucker": {
        "description": "Fuck Tucker.",
        "answers": [
            { text: "Look at twitter", key: "look_at_internet" },
        ]
    },
    "look_at_internet": {
        "description": "Twitter sucks and you hate yourself.",
        "answers": []
    }
}