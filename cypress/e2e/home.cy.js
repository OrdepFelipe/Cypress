/// <reference types="cypress" />

describe("Testes de adição, remoção e edição do contato", () =>{
    beforeEach(() =>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Teste para adição', () =>{
        cy.get('[type="text"]').type('Pedro Felipe')
        cy.get('[type="email"]').type('pedro@pedro.com.br')
        cy.get('[type="tel"]').type(21123456789)
        cy.get('.adicionar').click()

        cy.get('ul').should('have.length', 4)
    })

    it("Teste para edição", () =>{
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Carolina Affonso')
        cy.get('[type="email"]').clear().type('carol@affonso.com.br')
        cy.get('[type="tel"]').clear().type(21987654321)
        cy.get('.alterar').click()
        
        cy.get('.sc-eDDNvR > :nth-child(1)').contains("Carolina Affonso")
    })

    it('Teste para remoção de contato', () =>{
        cy.get('.delete').first().click()
        cy.get('h2').contains('3 contatos na agenda')
    })
})
