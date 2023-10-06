class BankAccountWithAdminFee extends BankAccount {
    constructor() {
        super();
    }

    hitungSaldoEfektif() {
        if (this.saldo <= 0) {
            throw new Error('Saldo belum ada');
        }
        
        const adminFee = 2000;
        this.saldo -= adminFee;
        this.showSaldo();
        alert(`Saldo efektif setelah potongan admin fee: Rp${this.saldo}`);
    }
}

const bank_account_obj = new BankAccountWithAdminFee();

setTimeout(() => {
    bank_account_obj.hitungSaldoEfektif();
}, 10000);  
