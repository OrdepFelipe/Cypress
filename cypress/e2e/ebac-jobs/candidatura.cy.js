/// <reference types="cypress" />

describe('Testes para a página de candidatura', () =>{
    beforeEach(() =>{
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Deve levar o usuário para página de inscrição', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()//Sem o first retorna um erro, pois há mais de um botão com a mesma classe, com o first ele seleciona o primeiro
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })
    it('Deve preencher o formulário de inscrição', () =>{
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Pedro Felipe')
        cy.get('input[name="email"]').type('pedro@teste.com')
        cy.get('input[name="telefone"]').type('2191234578')
        cy.get('input[name="endereco"]').type('Rua Teste, Bairro Leme')
        cy.get('#linux').check() // Trabalhando com input radius
        cy.get('select[name="escolaridade"]').select('outros') //Trabalhando com input select
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})