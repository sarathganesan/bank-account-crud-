import express, { Request, Response } from 'express';

class BackAccount {
  private name: string;
  private gender: string;
  private dob: Date;
  private email: string;
  private mobile: string;
  private address: string;
  private initialBalance: number;
  private adharNo: string;
  private panNo: string;

  constructor() {
    this.name = '';
    this.gender = '';
    this.dob = new Date();
    this.email = '';
    this.mobile = '';
    this.address = '';
    this.initialBalance = 0;
    this.adharNo = '';
    this.panNo = '';
  }

  public openAccount(
    name: string,
    gender: string,
    dob: Date,
    email: string,
    mobile: string,
    address: string,
    initialBalance: number,
    adharNo: string,
    panNo: string
  ): void {
    // Store the account details
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.mobile = mobile;
    this.address = address;
    this.initialBalance = initialBalance;
    this.adharNo = adharNo;
    this.panNo = panNo;
  }
}

const app = express();
const backAccount = new BackAccount();

app.post('/openAccount', (req: Request, res: Response) => {
  const {
    name,
    gender,
    dob,
    email,
    mobile,
    address,
    initialBalance,
    adharNo,
    panNo,
  } = req.body;

  if (!name || !gender || !dob || !email || !mobile || !address || !initialBalance || !adharNo || !panNo) {
    return res.status(400).send('Please provide all the required details.');
  }

  backAccount.openAccount(name, gender, new Date(dob), email, mobile, address, initialBalance, adharNo, panNo);

  return res.send('Account opened successfully!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
