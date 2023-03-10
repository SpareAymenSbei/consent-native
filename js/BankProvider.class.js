class BankProvider{
    imgUrl;
    bankName;
    constructor(provider){
        this.imgUrl = provider.imgUrl;
        this.bankName = provider.bankName;
    }

    render(){
        const bankProvider = document.createElement('div');
        bankProvider.classList.add('bank');
        bankProvider.innerHTML = `
        <img src="${this.imgUrl}" alt="${this.bankName}">
        <div class="bank-name">${this.bankName}</div>
        `;
        bankProvider.addEventListener('click',()=>{
            goNextSlide();
        })
        return bankProvider;
    }
}

//bank providers rendering
const bankProvidersDOM = document.querySelector('.bank-providers');

const bankProvidersList = [
    new BankProvider({
        imgUrl : 'assets/mock/BBK.png',
        bankName : 'BBK'
    }),
    new BankProvider({
        imgUrl : 'assets/mock/BisB.png',
        bankName : 'BisB'
    }),
    new BankProvider({
        imgUrl : 'assets/mock/ithmaar-logo.png',
        bankName : 'Ithmaar Bank'
    }),
    new BankProvider({
        imgUrl : 'assets/mock/Al-Salam-Bank-Logo.jpg',
        bankName : 'Al Salam Bank'
    }),
]


bankProvidersList.forEach((bank)=>{
    bankProvidersDOM.append(bank.render());
})