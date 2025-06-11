describe('Topup Wallet', () => {
  it('Client bisa melakukan topup', () => {
    cy.visit('https://gawelur.my.id/login') // sesuaikan dengan URL login

    cy.get('input[name=email]').type('faiqfauzi@gmail.com')
    cy.get('input[name=password]').type('1234567890')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/dashboard') // ganti sesuai route setelah login

    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('exist') // sesuaikan teks yang tampil

    // Klik menu di navbar untuk Project Listing
    cy.contains('a', 'My Wallets').click() // Ganti sesuai teks menu yang ada

    cy.contains('a', 'Topup Wallet').click() // Ganti sesuai teks menu yang ada
    
    cy.get('input[name=amount]').type('100000')

    cy.get('input[name="proof"]').selectFile('cypress/fixtures/Tes.png', { force: true });

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/wallet') // Ganti jika route berbeda

  })
})