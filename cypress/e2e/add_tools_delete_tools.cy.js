describe('Add Tools dan Delete Tools', () => {
  it('Client bisa menambahkan Tools ke project yang sudah mereka buat dan menghapusnya', () => {
    cy.visit('https://gawelur.my.id/login') // sesuaikan dengan URL login

    cy.get('input[name=email]').type('faiqfauzi@gmail.com')
    cy.get('input[name=password]').type('1234567890')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/dashboard') // ganti sesuai route setelah login

    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('exist') // sesuaikan teks yang tampil

    // Klik menu di navbar untuk Project Listing
    cy.contains('a', 'Project Listing').click() // Ganti sesuai teks menu yang ada

    // Verifikasi halaman Project Listing berhasil dibuka
    cy.url().should('include', '/project') // Ganti jika route berbeda
    cy.contains('Project Listing').should('exist')

    cy.contains('a', 'Manage').click() // Ganti sesuai teks menu yang ada

    cy.contains('a', 'Add Tools').click() // Ganti sesuai teks menu yang ada
    
    cy.get('select[name="tool_id"]').select('Laravel');

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/tools') // Ganti jika route berbeda

    cy.contains('button', 'Delete').click()

  })
})