describe('Add Project', () => {
  it('Client bisa menambahkan Project baru', () => {
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

    cy.contains('a', 'Add New').click() // Ganti sesuai teks menu yang ada

    cy.get('input[name="name"]').type('Web Dev 6');

    cy.get('input[name="thumbnail"]').selectFile('cypress/fixtures/Tes.png', { force: true });

    cy.get('input[name="budget"]').type('100000');

    cy.get('select[name="category_id"]').select('UI/UX');

    cy.get('textarea[name="about"]').type('Lorem Ipsum');

    cy.get('select[name="skill_level"]').select('Expert');

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/project') // Ganti jika route berbeda
    cy.contains('Project Listing').should('exist')
  })
})


