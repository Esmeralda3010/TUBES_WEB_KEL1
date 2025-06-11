describe('Register', () => {
  it('Pengguna bisa membuat akun baru dengan memasukkan data yang valid', () => {
    cy.visit('http://127.0.0.1:8000/register');

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="occupation"]').type('Engineer');

    // Upload file avatar (harus disiapkan dulu file dummy-nya)
    cy.get('input[name="avatar"]').selectFile('cypress/fixtures/Tes.png', { force: true });

    cy.get('select[name="role"]').select('Freelance'); // nilai di option: project_freelancer

    cy.get('input[name="email"]').type('faiqfauzi101@gmail.com');

    cy.get('input[name="password"]').type('1234567890');
    cy.get('input[name="password_confirmation"]').type('1234567890');

    cy.get('button[type="submit"]').click();

    // Pastikan redirect ke dashboard (atau yang sesuai)
    cy.url().should('include', '/dashboard');
  });
});

describe('Register', () => {
  it('Pengguna tidak bisa membuat akun baru karena memasukkan data yang invalid', () => {
    cy.visit('http://127.0.0.1:8000/register');

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="occupation"]').type('Engineer');

    // Upload file avatar (harus disiapkan dulu file dummy-nya)
    cy.get('input[name="avatar"]').selectFile('cypress/fixtures/Tes.png', { force: true });

    cy.get('select[name="role"]').select('Freelance'); // nilai di option: project_freelancer

    cy.get('input[name="email"]').type('faiqfauzi101@gmail.com');

    cy.get('input[name="password"]').type('1234567890');
    cy.get('input[name="password_confirmation"]').type('123456789');

    cy.get('button[type="submit"]').click();

    // Pastikan redirect ke dashboard (atau yang sesuai)
    cy.url().should('include', '/register');
  });
});