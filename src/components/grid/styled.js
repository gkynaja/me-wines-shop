import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 160px);
  grid-template-rows: repeat(5, 160px);
  place-content: center center;
`
const Grid = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;

  grid-column: ${({ col }) => `${col[0]}/${col[1]}`};
  grid-row: ${({ row }) => `${row[0]}/${row[1]}`};

  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`

export { Container, Grid }
