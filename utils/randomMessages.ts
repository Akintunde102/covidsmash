export default function radomMessages(type: 'good' | 'bad') {
    const messages = {
        good: ['Hmm, Good Job', 'Yeah, Nice One', 'Correct!!!', 'Nice!!!'],
        bad: ['Bad Answer, You can do better', 'Nah, You Picked The Wrong one', 'No, you missed this one', 'Oops!!!, that was wrong' ]
    }
    return messages[type][Math.floor(Math.random() * 4)];
  }