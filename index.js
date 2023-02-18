// var x = document.getElementById("sliderchange");

// var images = new Array(
//        "images/pic1.jpg",
//         "images/pic2.jpg",
//         "images/pic3.jpg",
//         "images/pic4.jpg",
//         "images/pic5.jpg"
//    );
// var len = images.length;
// var i = 0;

// function slider(){

//     if(i>len-1)
//     {
//        i=0;
//     }
//     sliderchange.src = images[i];
//     i++;
//     setTimeout('slider()',3000)
// }

const questions = [
    {
        'que': 'Which of the following is Markup Language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'PHP',
        'd': 'JAVA',
        'correct': 'a'

    },
    {
        'que': 'In which year Javascript was Launched ?',
        'a': '1994',
        'b': '1995',
        'c': '1998',
        'd': 'None of the above',
        'correct': 'b'

    },
    {
        'que': 'What is CSS stands for?',
        'a': 'Cascading Style sheets',
        'b': 'Container Style sheets',
        'c': 'Cascading Simple sheets',
        'd': 'Computer Style Sheet',
        'correct': 'a'

    },
    {
        'que': 'Who invented Javascript and Where ?',
        'a': 'James Gosling , sun microsystems',
        'b': 'Bjarne Stroustrup, Netscape',
        'c': 'Brendan Eich, Netscape',
        'd': 'Dennis Ritche, sun microsystems',
        'correct': 'c'

    },
    {
        'que': 'Which tag is used to underline text?',
        'a': '<a>',
        'b': '<u>',
        'c': '<b>',
        'd': '<l>',
        'correct': 'b'
    },
    {
        'que': 'Where in an HTML document is the correct place to refer to an external style sheet?',
        'a': 'In the <head> section',
        'b': 'In the <body> section',
        'c': 'At the end of the document',
        'd': 'In the <css> section',
        'correct': 'a'
    },
    {
        'que': 'Which statement cannot be used to declare a variable in JavaScript?',
        'a': 'let',
        'b': 'const',
        'c': 'var',
        'd': 'int',
        'correct': 'd'
    },
    {
        'que': 'Which is the correct way to bind an object to the current method?',
        'a': 'Func = func.bind(this)',
        'b': 'Let func = () => {}',
        'c': 'Both a and b',
        'd': 'None of these',
        'correct': 'c'
    },
    {
        'que': 'Which of the following are the Object methods?',
        'a': 'Object.keys(obj)',
        'b': 'Object.values(obj)',
        'c': 'Object.entries(obj)',
        'd': 'All of these',
        'correct': 'd'
    },
    {
        'que': 'Which method is used to convert the JSON string to a JSON object?',
        'a': 'JSON.parse(string)',
        'b': 'JSON.convertToObject(string)',
        'c': 'JSON.object(string)',
        'd': 'None of these',
        'correct': 'a'
    },

]
let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
const quesbox = document.getElementById("ques-box")
const optioninput = document.querySelectorAll('.option')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    } else {
        reset()
    }
    const data = questions[index]
    console.log(data)
    quesbox.innerText = `${index + 1}) ${data.que}`
    optioninput[0].nextElementSibling.innerText = data.a
    optioninput[1].nextElementSibling.innerText = data.b
    optioninput[2].nextElementSibling.innerText = data.c
    optioninput[3].nextElementSibling.innerText = data.d
}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;


}
const getAnswer = () => {
    let answer;
    optioninput.forEach(
        (input) => {

            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () => {
    optioninput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
  <h3> Thankyou for playing the Quiz </h3> 
  <h2>Your score : ${right}/${total}</h2>
  `
}


loadQuestion();