const balloon = document.querySelector('#air-balloon');
const cloudOne = document.querySelector('#cloud-one');
const cloudTwo = document.querySelector('#cloud-two');
const cloudThree = document.querySelector('#cloud-three');
const cloudFour = document.querySelector('#cloud-four');
const cloudFive = document.querySelector('#cloud-five');
const javascript = document.querySelector('#javascript');
const react = document.querySelector('#react');
const graphql = document.querySelector('#graphql');

const balloonYFromBottom = 10

const cloudOneYFromBottom = 40
const cloudOneYFromLeft = 75

const cloudTwoYFromBottom = 80
const cloudTwoYFromLeft = 70

const cloudThreeYFromBottom = 60
const cloudThreeYFromLeft = 0

const cloudFourYFromBottom = 70
const cloudFourYFromLeft = 20

const cloudFiveYFromBottom = 60
const cloudFiveYFromLeft = 60

const javascriptYFromLeft = 20

const reactYFromLeft = 26

const graphqlYFromLeft = 32

//starting position

balloon.style.bottom = balloonYFromBottom + '%'

cloudOne.style.bottom = cloudOneYFromBottom + '%'
cloudOne.style.left = cloudOneYFromLeft + '%'

cloudTwo.style.bottom = cloudTwoYFromBottom + '%'
cloudTwo.style.left = cloudTwoYFromLeft + '%'

cloudThree.style.bottom = cloudThreeYFromBottom + '%'
cloudThree.style.left = cloudThreeYFromLeft + '%'

cloudFour.style.bottom = cloudFourYFromBottom + '%'
cloudFour.style.left = cloudFourYFromLeft + '%'

cloudFive.style.bottom = cloudFiveYFromBottom + '%'
cloudFive.style.left = cloudFiveYFromLeft + '%'

javascript.style.left = javascriptYFromLeft + '%'
react.style.left = reactYFromLeft + '%'
graphql.style.left = graphqlYFromLeft + '%'

//move out on scroll
function move() {
   // console.log('I have scrolled');
    const incrementer = window.scrollY 
    //on scroll this will increment %
    balloon.style.bottom = balloonYFromBottom + incrementer * 0.1 + '%';

    cloudOne.style.bottom = cloudOneYFromBottom + incrementer * 0.12 + '%'
    cloudOne.style.left = cloudOneYFromLeft + incrementer * 0.1 + '%';

    cloudTwo.style.bottom = cloudTwoYFromBottom + incrementer * 0.14 + '%'
    cloudTwo.style.left = cloudTwoYFromLeft + incrementer * 0.15 + '%';

    cloudThree.style.bottom = cloudThreeYFromBottom + incrementer * 0.1 + '%'
    cloudThree.style.left = cloudThreeYFromLeft + incrementer * -0.12 + '%';

    cloudFour.style.bottom = cloudFourYFromBottom + incrementer * 0.16 + '%'
    cloudFour.style.left = cloudFourYFromLeft + incrementer * -0.15 + '%';

    cloudFive.style.bottom = cloudFiveYFromBottom + incrementer * 0.2 + '%'
    cloudFive.style.left = cloudFiveYFromLeft + incrementer * 0.16 + '%';

    javascript.style.left = javascriptYFromLeft + incrementer * -2.2 + '%';
    react.style.left = reactYFromLeft + incrementer * -1.5 + '%';
    graphql.style.left = graphqlYFromLeft + incrementer * -1 + '%';
}

//everytime i scroll, i want to invoke the move function
window.addEventListener('scroll', move)