$(function(){
    
    //Setting variables to HTML elements
    var intro = $('.intro-wrapper'), 
        start = $('.start'), 
        quizContainer = $('.quiz-container'), 
        quizQuestion = $('.quiz-question'), 
        quizBody = $('.quiz-body'), 
        btn1 = $('#btn1'), 
        btn2 = $('#btn2'), 
        btn3 = $('#btn3'), 
        btn4 = $('#btn4'), 
        quizChoices = $('.choices'), 
        score = $('.score'), 
        checker = $('.checker'), 
        checkerWrapper = $('.checker-wrapper'), 
        quizNumWrapper = $('.quizNum-wrapper'), 
        quizNumContainer = $('.quizNum-container'), 
        quizNumber = $('.quiz-number'), 
        submitAnswer = $('.submit-answer'), 
        playAgain = $('.play-again'), 
        quizResult = $('.quiz-result'), 
        quizHeader = $('.quiz-header'), 
        resultTable = $('.result-table'), 
        itemNumber = $('.item-number'), 
        itemContainer = $('.item-container'), 
        quizItems = $('.quiz-items'), 
        viewAnswer = $('.view-answer'), 
        scoreContainer = $('#score'),
        resultQuizNum = $('.result-quiz-num'), 
        prevBtn = $('.prev-btn'), 
        nextBtn = $('.next-btn'), 
        btnAnswer = $('.btn-answer'), 
        backBtn = $('.back-btn'), 
        closeBtn = $('.btn-close'), 
        modalWrapper = $('.modal-wrapper');
    /********** QUESTIONS, CHOICES, ANSWERS LIST **********/  
    //Questions list
    var questions = 
        [
        "", 
        'Ruby: What is the output of this code? \
               string = "SoloLearn" \
	           n = string.index"L" \
	           puts n * 2 ', 
        "Ruby: What is the output of this code?", 
        "Ruby: How to reverse the following array?", 
        "Ruby: Which of these operators has the lowest precedence?", 
        "Ruby: Is the keyword required to indicate the end of the if statement?", 
        "Ruby: Which of these represents a range from 1 to 10 inclusive?", 
        "Ruby: What is the output of this code? \
                a = [2,4,6,8] \
                n = a.find {|n| n > a.length} \
                puts n", 
        "Ruby: Instance variables are represented with which symbol?", 
        "Ruby: Is it possible to make an array of booleans", 
        "It is used to specify uppercase and lowercase letters in a text.", 
        "A selector that selects elements with a specific class attribute.", 
        "A selector symbol that selects entire elements.", 
        "<koala>1em</koala> is equivalent to how many pixels?", 
        "Which <koala>background-repeat</koala> value is used to show background image once?", 
        "Which property is used to specify how an element should float?", 
        "It is used to increase or decrease the gap betweeen the characters of the text.",
        "An element with ________ is positioned relative to the viewport, which means it always stays on the same place even if the page is scrolled.", 
        "The ________ property specifies the stack order of an element either if it should be placed in front of, or behind, the others.", 
        "What property should be used to specify a rectangle to clip an absolutely positioned element?", 
        "Which property defines how long an animation should take to complete one cycle?", 
        "These are the different absolute length units except:", 
        "The four links states are:", 
        "Which is the right property and value to change the list's item marker into lower roman numbers?", 
        "Which is the best statement about <koala>visibility: none;</koala>?", 
        "A property that controls what happens to content that is too big to fit into an area.", 
        "Which property is used to control the transparency of an element?", 
        "It is a property used to create a space around the element.", 
        "What is the default shape of a <koala>radial-gradient</koala>?", 
        "It is used to set or remove decorations of the text.", 
        "A property that sets the border of the table into a single border."
        ]; 
    //Choices list
    var choices = 
        [
        "", 
        "10", "9", "8", "Error", //ruby
        
        "YBur", "YBUR", "RUBY", "ybuR", //ruby
        
        "a.rev", "a.reverse", "a[-1]", "a.strv", //ruby
        
        "?:", "**", "/", "+", //ruby

        "maybe", "it depends", "yes", "no", //Ruby
        
        "1..10", "1...10", "1..11", "1..10 and 1...11", //ruby
        
        "6", "4 6 8", "8", "6 8",  //ruby
        
        "$", "&", "@", "#", //ruby
        
        "True", "False", "maybe", "It depends", //ruby
        
        "text-decoration", "text-transform", "text-align", "text-alignment", 
        
        "#class", "$class", ".class", "-class-",
        
        "dollar sign ($)", "dot (.)", "dash sign (-)", "asterisk (*)", 
        
        "16px", "4px", "8px", "12px", 
        
        "none", "no-repeat", "once", "one", 
        
        "margin", "left", "float", "padding",
         
        "word-wrap", "word-break", "line-height", "letter-spacing", 
        
        "position: fixed;", "position: relative;", "position: absolute;", "position: static;", 
        
        "float", "z-index", "transform", "position: absolute;", 
        
        "background-attachment", "background-position", "clip", "background-clip", 
        
        "animation-time", "set-timeout", "set-interval", "animation-duration", 
        
        "mm", "px", "cm", "pc", 
        
        ":link, :visited, :hover, :active",
        
         ":visit, :linked, :hover, :actived",
          ":visited, :active, :hover, :linked",
           ":link, :visited, :hovered, :active", 
           
        "list-style-type: roman-lower;", "list-type: roman-lower;", "list-style-type: lower-roman;", "list-type: lower-roman;", 
        
        "It hides the element and the page will be displayed as if it is not there.", 
        "It hides the element. However, the element will stake up the same space as before.", 
        "It hides the element and the element next to it will be moved backward.", 
        "It hides the element and the element next to it will be moved forward.", 
        
        "word-wrap", "justify-content", "text-align", "overflow", 
        
        "visibility", "display", "opacity", "contrast", 
        
        "margin", "padding", "border", "box-border", 
        
        "oblong", "sphere", "ellipse", "round", 
        
        "text-transform", "text-decoration", "word-wrap", "text-align", 
        
        "border", "table-collapse", "border-collapse", "collapse"
        ];
    //Answers list
    //You can take a peek at the answers. Let's see if you can remember them all. The questions and choices are randomized so, it would be difficult to remember them. >;)  
    var answers = 
        [
        "", 
        "8", "YBUR", "a.reverse", "?:", "yes", 
        "1..10 and 1...11", "6", "@", "True", "text-transform", 
        ".class", "asterisk (*)", "16px or is equivalent to the computed font-size of the element being styled.", "no-repeat", "float", "letter-spacing", "position: fixed;", 
        "z-index", "clip", "animation-duration", "px", ":link, :visited, :hover, :active", 
        "list-style-type: lower-roman;", "It hides the element. However, the element will stake up the same space as before.", "overflow", "opacity", "margin", 
        "ellipse", "text-decoration", "border-collapse"
        ];
    /********** QUIZ GENERATOR **********/
    //Random numbers container
    var randomizer = [];
    var randomChoice = [];
    //Default index
    var i = 0;
    //Default score
    var scorer = 0;
    //Default quiz number
    var quizNum = 1;
    //User's answer container
    var userAnswer = "";
    //Default item number
    var itemNum = 1;
    /********** NUMBER OF ITEMS LIMIT FUNCTION **********/
    var limit = 0;
    itemNumber.on('click', function(){
        limit = $(this).text();
        quizItems.text($(this).text());
        randomizeQuestion();
        randomizeChoices();
        itemContainer.fadeOut(500);
        startQuiz();
        //generate first question
        quizQuestion.html(questions[randomizer[i]]);
        //Call generate choices function
        generateChoices();
    });
    //Randomize unique numbers for questions
    function randomizeQuestion(){
        while(randomizer.length < limit){
            var randomNumber = Math.floor(Math.random() * 30) + 1;
            if(randomizer.indexOf(randomNumber) > -1){
                continue;
            }
            randomizer.push(randomNumber);
        }
    }
    //Randomize unique numbers for choices
    function randomizeChoices(){
        while(randomChoice.length < 4){
            var randomNumber = Math.floor(Math.random() * 4) + 1;
            if(randomChoice.indexOf(randomNumber) > -1){
                continue;
            }
            randomChoice.push(randomNumber);
        }
    }
    //Generate new question
    function newQuestion(){
        //Add 1 to the index
        i++;
        //Generate new question
        quizQuestion.html(questions[randomizer[i]]);
        //Generate choices for the question
        generateChoices();
    }
    //Generate randomized placement of choices function
    function generateChoices(){
        btn1.text(choices[randomizer[i] * 4 - 4 + randomChoice[0]]);
        btn2.text(choices[randomizer[i] * 4 - 4 + randomChoice[1]]);
        btn3.text(choices[randomizer[i] * 4 - 4 + randomChoice[2]]);
        btn4.text(choices[randomizer[i] * 4 - 4 + randomChoice[3]]);
    }
    /********** ANIMATIONS **********/
    //Hide modal
    closeBtn.on('click', function(){
        modalWrapper.fadeOut(500);
    });
    modalWrapper.on('click', function(){
        modalWrapper.fadeOut(500);
    });
    //Shows the submit button when hidden
    function animateButton(){
        setTimeout(function(){
            submitAnswer.animate({top: '0'}, 250);
            submitAnswer.removeAttr('disabled');
        }, 3250);
    }
    //Shows the Play Again buttkn
    function showPlayAgain(){
        setTimeout(function(){
           submitAnswer.hide();
           playAgain.css({display: 'block'});
           playAgain.animate({top: '0'}, 250);
        }, 2000);
        
    }
    //Start quiz animation
    function startQuiz(){
        quizContainer.fadeIn(500);
        quizNumWrapper.delay(500).fadeIn(500);
        quizNumWrapper.delay(500).fadeOut(500);
        quizBody.delay(2000).fadeIn(500);
        
        setTimeout(function(){
            submitAnswer.animate({top: '0'}, 250);
        }, 2250);
    }
    //Start the quiz onclick
    start.on('click', function(){
        intro.fadeOut(500);
        
        itemContainer.delay(500).fadeIn(250);
    });
    //Quiz Number
    function quizNumberPanel(){
        quizNumWrapper.delay(1500).fadeIn(500);
        quizNumWrapper.delay(500).fadeOut(500);
    }
    //Correct Answer Panel
    function correctAnswer(){
        //Check if quiz reached the limit
        if(i < randomizer.length - 1){
            //Provide new question
            newQuestion();
            //Add 1 to the quiz number
            quizNumber.text(quizNum += 1);
            quizBody.hide();
            checkerWrapper.css('display', 'flex');
            checker.fadeIn(700);
            checker.text("Correct");
            checker.css('color', 'seagreen');
            setTimeout(function(){checker.css('display', 'none')}, 1500);
            checkerWrapper.delay(1000).fadeOut(250);
            quizNumberPanel();
            quizBody.delay(3000).fadeIn(500);
            animateButton();
        }else{
            quizBody.hide();
            checkerWrapper.css('display', 'flex');
            checker.fadeIn(700);
            checker.text("Correct");
            checker.css('color', 'seagreen');
            setTimeout(function(){checker.css('display', 'none')}, 1500);
            checkerWrapper.delay(1000).fadeOut(250);
            quizHeader.delay(1000).fadeOut(250);
            quizResult.delay(1250).fadeIn(250);
            showPlayAgain();
        }
    }
    //Wrong Answer Panel
    function wrongAnswer(){
        //Check if the quiz reached the limit
        if(i < randomizer.length - 1){
            //Provide another random question
            newQuestion();
            //Add 1 to the quiz number
            quizNumber.text(quizNum += 1);
            quizBody.hide();
            checkerWrapper.css('display', 'flex');
            checker.fadeIn(700);
            checker.text("Wrong");
            checker.css('color', 'firebrick');
            setTimeout(function(){checker.css('display', 'none')}, 1500);
            checkerWrapper.delay(1000).fadeOut(250);
            quizNumberPanel();
            quizBody.delay(3000).fadeIn(500);
            animateButton();
        }else{
            quizBody.hide();
            checkerWrapper.css('display', 'flex');
            checker.fadeIn(700);
            checker.text("Wrong");
            checker.css('color', 'firebrick');
            setTimeout(function(){checker.css('display', 'none')}, 1500);
            checkerWrapper.delay(1000).fadeOut(250);
            quizHeader.delay(1000).fadeOut(250);
            quizResult.delay(1250).fadeIn(250);
            showPlayAgain();
        }
    }
    //Choice selection function
    quizChoices.on('click', function(){
       //Set user's answer
       userAnswer = $(this).text();
       //Set all buttons to default design
       quizChoices.css({'background-color': '#eee', 'color': 'inherit'});
       //Set selected answer button's background
       $(this).css({'background-color': 'rgb(38, 77, 228)', 'color': 'white'});
    });
    /********** SUBMISSION FUNCTION **********/
    //Check submitted answer
    submitAnswer.on('click', function(){
        //Hide the submit button
        submitAnswer.animate({top: '50px'}, 250);
        submitAnswer.attr('disabled', 'true');
        //Checks if user's answer matches to the correct answer
        if(userAnswer === answers[randomizer[i]]){
            //Correct answer panel
            correctAnswer();
            //Add 1 to the score
            score.text(scorer+=1);
            //Add row to result table
            resultTable.append('<tr><td><span class="item-num">'+ itemNum++ +'</span></td><td><span class="correct item-result"><b>&#10003;</b></span></td></tr>'); 
        }else{
           //Hide the submit button
           submitAnswer.animate({top: '50px'}, 250);
           //Wrong answer panel
           wrongAnswer();
           //Add row to result table
           resultTable.append('<tr><td><span class="item-num">'+ itemNum++ +'</span></td><td><span class="wrong item-result"><b>&#10005;</b></span></td></tr>');
        }
        //Resets the button's background color
        quizChoices.css({backgroundColor: '#eee', color: ''});
        //Resets the user's answer to blank
        userAnswer = "";
    });
    /********** VIEW CORRECT ANSWERS FUNCTION **********/
    viewAnswer.on('click', function(){
        quizResult.fadeOut(250);
        
        setTimeout(function(){
            quizHeader.fadeIn(250);
            quizHeader.css('display', 'block');
        }, 250);
        quizBody.delay(250).fadeIn(250);
        scoreContainer.hide();
        quizChoices.hide();
        resultQuizNum.show();
        btnAnswer.show();
        backBtn.show();
        
        quizNum = 1;
        i = 0;
        
        quizNumber.text(quizNum);
        quizQuestion.html(questions[randomizer[i]]);
        btnAnswer.text(answers[randomizer[i]]);
        
        playAgain.animate({top: '50px'}, 250);
        setTimeout(function(){
            playAgain.hide();
            nextBtn.show();
            prevBtn.show();
            nextBtn.animate({top: '0'}, 250);
            prevBtn.animate({top: '0'}, 250);
        }, 250);
    });
    prevBtn.on('click', function(){
        if(i === 0){
            i = randomizer.length - 1;
            quizNum = limit;
            quizNumber.text(quizNum);
            quizQuestion.html(questions[randomizer[i]]);
            btnAnswer.text(answers[randomizer[i]]);
        }else{
            i -= 1;
            quizNum -= 1;
            quizNumber.text(quizNum);
            quizQuestion.html(questions[randomizer[i]]);
            btnAnswer.text(answers[randomizer[i]]);
        }
    });
    nextBtn.on('click', function(){
        if(i === randomizer.length - 1){
            i = 0;
            quizNum = 1;
            quizNumber.text(quizNum);
            quizQuestion.html(questions[randomizer[i]]);
            btnAnswer.text(answers[randomizer[i]]);
        }else{
            i += 1;
            quizNum += 1;
            quizNumber.text(quizNum);
            quizQuestion.html(questions[randomizer[i]]);
            btnAnswer.text(answers[randomizer[i]]);
        }
    });
    /********** BACK BUTTON FUNCTION **********/
    backBtn.on('click', function(){
        quizHeader.fadeOut(250);
        quizBody.fadeOut(250);
        quizResult.delay(250).fadeIn(250);
        
        nextBtn.animate({top: '50px'}, 250);
        prevBtn.animate({top: '50px'}, 250);
        setTimeout(function(){
            prevBtn.hide();
            nextBtn.hide();
            playAgain.show();
        }, 250)
        playAgain.delay(250).animate({top: '0'}, 250);
    });
    /********** PLAY AGAIN FUNCTION **********/
    playAgain.on('click', function(){
        //Reset container and values
        randomizer = [];
        randomChoice = [];
        i = 0;
        scorer = 0;
        quizNum = 1;
        itemNum = 1;
        limit = 0;
        score.text(scorer);
        quizNumber.text(quizNum);
        setTimeout(function(){
            $('.result-table tr:not(:first-child)').remove();
            itemNum = 1;
        }, 1000);
        setTimeout(function(){
            quizResult.hide();
            playAgain.hide();
            playAgain.css('top', '50px');
            submitAnswer.show();
            quizHeader.show();
        }, 550);
        quizContainer.fadeOut(500);
        itemContainer.delay(500).fadeIn(500);
        
        setTimeout(function(){
            submitAnswer.removeAttr('disabled');
            backBtn.hide();
            resultQuizNum.hide();
            btnAnswer.hide();
            quizChoices.show();
        
            quizHeader.css('display', 'flex');
        }, 500);
        
        scoreContainer.show();
    });
});