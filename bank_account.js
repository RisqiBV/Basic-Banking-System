class BankAccount {
    constructor() {
        this.saldo = 0;
    }

    showSaldo() {
        const nilaiDisplay = document.getElementById('tampilanwebsaldo');
        nilaiDisplay.textContent = this.saldo;
    }

    tambahSaldo() {
        try {
            let inputSaldo = parseInt(prompt(`Saldo anda Rp${this.saldo}. Input penambahan saldo`));
            if (isNaN(inputSaldo) || inputSaldo <= 0) {
                throw new Error('Input harus berupa angka dan lebih dari nol');
            }
            
            this.saldo += inputSaldo;
            this.showSaldo();
            alert(`Saldo anda saat ini Rp${this.saldo}`);
        } catch (error) {
            alert(error.message);
        }
    }

    kurangiSaldo() {
        try {
            if (this.saldo <= 0) {
                throw new Error('Saldo belum ada');
            }

            let inputSaldo = parseInt(prompt(`Saldo anda Rp${this.saldo}. Input pengurangan saldo`));

            if (inputSaldo > this.saldo || isNaN(inputSaldo) || inputSaldo <= 0) {
                throw new Error('Input pengurangan saldo tidak valid');
            }

            this.saldo -= inputSaldo;
            this.showSaldo();
            alert(`Saldo anda saat ini Rp${this.saldo}`);
        } catch (error) {
            alert(error.message);
        }
    }
}
