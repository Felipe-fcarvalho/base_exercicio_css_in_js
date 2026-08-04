import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  width: 100%;
  box-sizing: border-box;
  gap: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  border-radius: 4px;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 150px;
    align-self: center;
  }
`

const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);

  @media (max-width: 768px) {
    padding: 16px;
  }
`
export { Form, BtnPesquisar, Campo }
