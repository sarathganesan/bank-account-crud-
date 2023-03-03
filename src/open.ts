export class BankAccount {
    private name: string;
    private gender: string;
    private dob: string;
    private email: string;
    private mobile: string;
    private address: string;
    private initialBalance: number;
    private adharNo: string;
    private panNo: string;
    private isOpen: boolean;
  
    constructor() {
      this.isOpen = false;
    }
  
    openAccount(name: string, gender: string, dob: string, email: string, mobile: string, address: string, initialBalance: number, adharNo: string, panNo: string): void {
      if (this.isOpen) {
        throw new Error('Account already opened');
      }
  
      // perform any necessary validation on the input parameters
  
      // store the account details
      this.name = name;
      this.gender = gender;
      this.dob = dob;
      this.email = email;
      this.mobile = mobile;
      this.address = address;
      this.initialBalance = initialBalance;
      this.adharNo = adharNo;
      this.panNo = panNo;
      this.isOpen = true;
    }
  
    // other methods for performing transactions, checking balance, etc.
}


  