/// <reference types="cypress" />

describe('Testes para home', () =>{
    it('Deve renderizar 4 vagas', () =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 4)
    })
    it('Deve filtrar por fullstack', () =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        //cy.get('.FormVagas_campo__E1ppF').type('fullstack{enter}')
        cy.get('.FormVagas_campo__E1ppF').type('fullstack')
        cy.get('button[type="submit"').click() //acesso um botão que possui um type submit
        cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    })
})