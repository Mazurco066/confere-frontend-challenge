// Dependencies
import { useRef } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

// Components
import { FaPlus, FaMinus } from 'react-icons/fa'

// Component
export default function ProductAmount({
  name,
  placeholder,
  label,
  invalid,
  message,
  mb,
  ...rest
}) {

  // Input reference for toggle stepUp() and stepDown()
  const inputRef = useRef(null)

  // Jsx
  return (
    <S.Wrapper mb={mb}>
      {label && (<S.Label>{label}</S.Label>)}
      <S.InputGroup>
        <S.AddonLeft
          type="button"
          onClick={() => {
            inputRef.current?.stepDown()
            inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
          }}
        >
          <FaMinus />
        </S.AddonLeft>
        <S.Input
          ref={inputRef}
          placeholder={placeholder}
          name={name}
          type="number"
          {...rest}
        />
        <S.AddonRight
          type="button"
          onClick={() => {
            inputRef.current?.stepUp()
            inputRef.current?.dispatchEvent(new Event('input', { bubbles: true }))
          }}
        >
          <FaPlus />
        </S.AddonRight>
      </S.InputGroup>
      {invalid && (
        <S.ValidationError>
          {message}
        </S.ValidationError>
      )}
    </S.Wrapper>
  )
}

// Prop Types
ProductAmount.defaultProps = {
  name: '',
  placeholder: '',
  label: null,
  invalid: false,
  message: '',
  mb: '1'
}

ProductAmount.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  invalid: PropTypes.bool,
  message: PropTypes.string,
  mb: PropTypes.string
}
