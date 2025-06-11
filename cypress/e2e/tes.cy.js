describe('Login', () => {
  it('pengguna bisa masuk dengan email dan password yang sesuai', () => {
    cy.visit('https://courtyz.dcat.web.id/') // sesuaikan dengan URL login

    cy.contains('a', 'Login').click() // Ganti sesuai teks menu yang ada

    // cy.get('input[name=username]').type('admin')
    // cy.get('input[name=password]').type('admin')

    // cy.contains('button', 'Sign in').click()
  })
})

// describe('Login', () => {
//   it('pengguna tidak bisa masuk dengan email dan password yang salah', () => {
//     cy.visit('https://gawelur.my.id/login') // sesuaikan dengan URL login

//     cy.get('input[name=email]').type('faiqfauzi2@gmail.com')
//     cy.get('input[name=password]').type('1234567890')

//     cy.get('button[type=submit]').click()

//     cy.url().should('include', '/login') // ganti sesuai route setelah login
//   })
// })

