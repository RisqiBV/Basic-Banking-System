class BankAccount {
    constructor() {
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        if (isNaN(value) || value < 0) {
            throw new Error('Input harus berupa angka dan lebih dari nol');
        }
        this._saldo = value;
    }

    showSaldo() {
        const nilaiDisplay = document.getElementById('tampilanwebsaldo');
        nilaiDisplay.textContent = this.saldo;
    }

    tambahSaldo() {
        alert('Anda akan setor saldo, tekan OK dan harap tunggu');

        setTimeout(() => {
            try {
                let inputSaldo = parseInt(prompt(`Saldo anda Rp${this._saldo}. Input penambahan saldo`));
                this.saldo += inputSaldo;  
                this.showSaldo();
                alert(`Saldo anda saat ini Rp${this._saldo}`);
            } catch (error) {
                alert(error.message);
            }
        }, 3000);
    }
    
    kurangiSaldo() {
        alert('Anda akan menarik saldo, tekan OK dan harap tunggu');

        setTimeout(() => {
            try {
                if (this._saldo <= 0) {
                    throw new Error('Saldo belum ada');
                }

                let inputSaldo = parseInt(prompt(`Saldo anda Rp${this._saldo}. Input pengurangan saldo`));

                if (inputSaldo > this._saldo || isNaN(inputSaldo) || inputSaldo <= 0) {
                    throw new Error('Input pengurangan saldo tidak valid');
                }

                this._saldo -= inputSaldo; 
                this.showSaldo();
                alert(`Saldo anda saat ini Rp${this._saldo}`);
            } catch (error) {
                alert(error.message);
            }
        }, 3000);
    }
}