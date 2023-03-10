class AuthItem {
    title;
    description;
    imgUrl;
    constructor(authItem) {
        this.title = authItem.title;
        this.description = authItem.description;
        this.imgUrl = authItem.imgUrl;
    }
    render() {
        const authItem = document.createElement('div');
        authItem.classList.add('auth-item');
        authItem.innerHTML = `
        <img src="${this.imgUrl}" alt="${this.title}">
        <div class="content">
            <div class="title">${this.title}</div>
            <div class="desc">${this.description}</div>
        </div>
        `;
        return authItem;
    }
}

const authListDOM = document.querySelector('.auth-details')
const authList = [
    new AuthItem({
        title: 'Your account details',
        description: 'This includes your account name, account details and balance',
        imgUrl: 'assets/infoImages/account-details.svg'
    }),
    new AuthItem({
        title: 'Your transactions',
        description: `
            This includes your account's incoming/outgoing
            transactions from the past 6 months (or more, if
            available) along with any regular payments
        `,
        imgUrl: 'assets/infoImages/transfers.svg'
    }),
    new AuthItem({
        title: 'Your account features and benefits',
        description: `
            This includes the type of account you have, any
            fees charges and interst you pay, as well as any benifits,
            and interest your account offers
        `,
        imgUrl: 'assets/infoImages/features.svg'
    }),

    new AuthItem({
        title: 'How will we use your account<br/>information?',
        description: `
            No third parties or apps will ever have access to 
            your information, Spare will never store or share
            your sensitive data, and that data is protected
            using the highest levels of encryption. You may
            revoke or renew this consent at any time from the 
            Spare app, or direcly from your bank account
        `,
        imgUrl: 'assets/infoImages/information.svg'
    }),
]

authList.forEach((item)=>{
    authListDOM.append(item.render());
})

// update dates

const startDateElement = document.querySelector('.share-dates').firstElementChild;
const endDateElement = document.querySelector('.share-dates').lastElementChild;

const formater = new Intl.DateTimeFormat('fr-Fr',{
    dateStyle:'short'
});

const today = new Date();
const startDate = formater.format(new Date());
const endDate  = formater.format(setEndDate(today));


// set endDate 1 year and 1 day from current date (startDate)
function setEndDate(date){
    date.setFullYear(date.getFullYear() +1);
    date.setDate(date.getDate() + 1);
    return date;
}

startDateElement.textContent+= ` ${startDate}`;
endDateElement.textContent+= ` ${endDate}`;


// add goNextSlide method to button

const confirmBtn = document.querySelector('.auth-content').lastElementChild;
confirmBtn.addEventListener('click',()=>{
    goNextSlide()
});
