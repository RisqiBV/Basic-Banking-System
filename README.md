
# BASIC BANKING SYSTEM

Basic Banking System merupakan Challenge pada pembelajaran Chapter 2 Program Backend Engineering FSGA x Binar Academy

## Skill Metrics
- Programming Algorithm
- Melakukan error handling
- Menerapkan Asynchronous process
- Menerapkan OOP
- Menggunakan Git

## Delivery
    1. Membuat repositori baru di GitHub dengan nama "Basic-Banking-System"
    2. Salin file bank_account.js Challenge 1 ke direktori  proyek di repositori baru.
    3. Membuat file JavaScript baru dengan nama banking_system.js
    4. Implementasikan kelas BankAccount dengan metode deposit() dan withdraw()
    5. Gunakan setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous
    6. Commit dan push perubahan ke repositori GitHub

## Criteria
- Menggunakan modular class OOP (40 points)
- Mengurai proses berpikir dengan menggunakan flowchart (30 points)
- Menggunakan GitHub untuk mengelola repository (30 points)

## Pseudocode
    1. Start Program
    2. Declare variables: saldo, inputSaldo
    3. Display options: "Withdraw" or "Deposit"
    4. Read user's choice
    5. if choice is "Withdraw" then
        - Display message: "Enter amount to withdraw"
        - Read inputSaldo
        - Check if saldo <= 0
            - Display message:      "Insufficient balance, cannot withdraw."
            - End program
        - Check if inputSaldo is a valid integer
            - if valid then
            - Update saldo: saldo - inputSaldo
            - Display updated saldo
        - else
            - Display message: "Invalid input. Please enter a valid integer."
        - End if
    6. else if choice is "Deposit" then
        - Display message: "Enter amount to deposit"
        - Read inputSaldo
        - Check if inputSaldo is a valid integer
        - if valid then
            - Update saldo: saldo + inputSaldo
            - Display updated saldo
        - else
            - Display message: "Invalid input. Please enter a valid integer."
        - End if
    7. else
        - Display message: "Invalid choice. Please choose either 'Withdraw' or 'Deposit'."
        - End Program



## Authors

- [@risqibv](https://github.com/RisqiBV)

