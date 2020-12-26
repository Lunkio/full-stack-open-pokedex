/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Single Pokemon', function () {
  it('single pokemon can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
