class SavingAccount extends BankAccount {
    constructor() {
        super();
        this.biayaAdmin = 25; 
    }

    calculateInterest() {
        const saldoEfektif = this.saldo - this.biayaAdmin;
        this.saldo -= this.biayaAdmin;
        this.calculateSaldoEfektif();  // Perbarui saldo efektif
        alert(`Saldo telah dikurangi biaya admin. Saldo anda saat ini Rp${this.saldo}`);
        return this.saldoEfektif;
    }
}