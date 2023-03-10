//variables  for stepper controls
const progressLine = document.getElementById('line-progress');
const steps = document.querySelectorAll('li');
const stepsContent = document.querySelectorAll('.section-content');
let currentStep = 1;
const progressLineValues = ['25%', '75%', '100%'];
const arrowBackElement = document.querySelector('section').firstElementChild;
//variables for title and description
const textContentList = [
    {
        title: 'Select the Bank you giving access to',
        description: 'After selecting the Bank wde will transfer you securly to your banking app to authenticate the connection'
    },
    {
        title: 'We need your premissions',
        description: 'Your security is our priority. In order for us to offer this service, we need your permission to access the follwing account informations.'
    },
    {
        title: 'Account(s) connected',
        description: '',
    }
];
const textSection = document.querySelector('section').lastElementChild;
const textTitle = textSection.querySelector('.title');
const textDescription = textSection.querySelector('.desc');

//init text and description
textTitle.textContent = textContentList[0].title;
textDescription.textContent = textContentList[0].description;


const goNextSlide = () => {
    if (currentStep < 3) {
        currentStep++;
        updateSlide();
    }
}
const goPrevSlide = () => {
    if (currentStep > 1) {
        currentStep--;
        updateSlide();
    }

}
const updateSlide = ()=>{
    //update current state highlight
    steps.forEach((step,index)=>{
        if(currentStep > index){
            step.classList.add('active');
        }else{
            step.classList.remove('active');
        }
    });
    //update step content
    stepsContent.forEach((stepContent, index)=>{
        if(currentStep-1 === index){
            stepContent.classList.add('active');
        }else{
            stepContent.classList.remove('active');
        }
    })
    //update progress bar
    progressLine.style.width = progressLineValues[currentStep - 1];

    //update text and description textContent
    textTitle.textContent = textContentList[currentStep - 1].title;
    textDescription.textContent = textContentList[currentStep - 1].description;

    //update arrow back visibility
    if(currentStep===3){
        arrowBackElement.style.display = "none"
    }else{
        arrowBackElement.style.display = "block"
    }
}


arrowBackElement.addEventListener('click',goPrevSlide)




