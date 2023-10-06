class BankAccount {
    constructor() {
        this.saldo = 0;
        this.saldoEfektif = 0;
    }

    calculateSaldoEfektif() {
        this.saldoEfektif = this.saldo;
    }

    showSaldo() {
        const nilaiDisplay = document.getElementById('tampilanwebsaldo');
        this.calculateSaldoEfektif();  // Perbarui saldo efektif
        nilaiDisplay.textContent = this.saldo;
    }

    async tambahSaldo() {
        try {
            let inputSaldo = await this.getInput("Tambahkan jumlah saldo");
            this.validateInput(inputSaldo);
            this.saldo += inputSaldo;
            this.calculateSaldoEfektif();  // Perbarui saldo efektif
            this.showSaldo();  // Tampilkan saldo efektif secara otomatis
            alert(`Saldo anda saat ini Rp${this.saldoEfektif}`);
    
            // Tambahkan perbarui saldo efektif secara otomatis
            const nilaiDisplay = document.getElementById('tampilanwebsaldo');
            nilaiDisplay.textContent = this.saldoEfektif;
        } catch (error) {
            alert(error);
        }
    }
    
    
    async kurangiSaldo() {
        try {
            if (this.saldo <= 0) {
                alert("Saldo belum ada");
                return;
            }

            let inputSaldo = await this.getInput("Input pengurangan saldo");
            this.validateInput(inputSaldo);

            if (inputSaldo <= this.saldo) {
                this.saldo -= inputSaldo;
                this.calculateSaldoEfektif();  // Perbarui saldo efektif
                this.showSaldo();
                alert(`Saldo anda saat ini Rp${this.saldoEfektif}`);
            } else {
                alert("Saldo dilarang defisit.");
            }
        } catch (error) {
            alert(error);
        }
    }

    async getInput(message) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let inputSaldo = parseInt(prompt(`Saldo anda Rp${this.saldoEfektif}. ${message}`));
                resolve(inputSaldo);
            }, 0);
        });
    }

    validateInput(inputSaldo) {
        if (isNaN(inputSaldo) || inputSaldo <= 0) {
            if (inputSaldo <= 0)
                throw new Error("Input harus lebih dari nol");
            else if (isNaN(inputSaldo))
                throw new Error("Harap inputkan angka");
        }
    }
}
