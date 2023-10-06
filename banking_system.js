class BankAccountWithAdminFee extends BankAccount {
    constructor() {
        super();
    }

    hitungSaldoEfektif() {
        try {
            if (isNaN(this.saldo)) {
                throw new Error('Saldo harus berupa angka');
            }
            
            setTimeout(() => {
                if (this.saldo <= 0 ) {
                    throw new Error('Saldo belum ada');
                }

                const adminFee = 2000;
                this._saldo -= adminFee;
                this.showSaldo();
                alert(`Saldo efektif setelah potongan admin fee: Rp${this.saldo}`);
            }, 3000);
        } catch (error) {
            alert(error.message);
        }
    }
}

const bank_account_obj = new BankAccountWithAdminFee();

setTimeout(() => {
    bank_account_obj.hitungSaldoEfektif();
}, 6500);
