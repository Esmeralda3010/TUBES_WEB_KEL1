describe('Login', () => {
  it('pengguna bisa masuk dengan email dan password yang sesuai', () => {
    cy.visit('https://gawelur.my.id/login') // sesuaikan dengan URL login

    cy.get('input[name=email]').type('faiqfauzi@gmail.com')
    cy.get('input[name=password]').type('1234567890')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/dashboard') // ganti sesuai route setelah login
  })
})

describe('Login', () => {
  it('pengguna tidak bisa masuk dengan email dan password yang salah', () => {
    cy.visit('https://gawelur.my.id/login') // sesuaikan dengan URL login

    cy.get('input[name=email]').type('faiqfauzi2@gmail.com')
    cy.get('input[name=password]').type('1234567890')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/login') // ganti sesuai route setelah login
  })
})

