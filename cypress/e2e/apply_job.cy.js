describe('Apply Job', () => {
  it('Freelancer bisa melakukan Apply Job', () => {
    cy.visit('https://gawelur.my.id/login') // sesuaikan dengan URL login

    cy.get('input[name=email]').type('fauzifaiq@gmail.com')
    cy.get('input[name=password]').type('1234567890')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/dashboard') // ganti sesuai route setelah login

    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('exist') // sesuaikan teks yang tampil

    cy.contains('a', 'Home').click() // Ganti sesuai teks menu yang ada

    cy.contains('a', 'UI/UX').click() // Ganti sesuai teks menu yang ada

    cy.contains('a', 'Web Dev 6').click() // Ganti sesuai teks menu yang ada

    cy.contains('a', 'Apply Now').click()

    cy.get('textarea[name="message"]').type('Lorem Ipsum')

    cy.contains('button', 'Apply Now').click()

    cy.url().should('include', '/details') // Ganti jika route berbeda
  })
})


