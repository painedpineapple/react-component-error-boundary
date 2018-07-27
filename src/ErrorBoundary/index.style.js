import styled from 'react-emotion'

export default styled('div')(({ customStyles }) => ({
  backgroundColor: '#f8ebe6',
  boxShadow:
    'inset 0 0 0 0 transparent, 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)',
  position: 'absolute',
  borderTop: '2px solid rgb(222,54,24)',
  top: '50%',
  width: 'calc(100% - 40px)',
  margin: '0 20px',
  padding: 20,
  textAlign: 'center',
  lineHeight: 1.5,

  '&, button': {
    fontSize: '1rem',
    fontWeight: 300,
  },

  h2: {
    fontSize: '1.625rem',
    paddingBottom: 10,
  },

  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: 0,
    borderBottom: '1px solid rgb(222,54,24)',
  },

  ...customStyles,
}))
