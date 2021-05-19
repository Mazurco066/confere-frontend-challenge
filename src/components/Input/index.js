// Dependencies
import InputMask from 'react-input-mask'
import PropTypes from 'prop-types'
import * as S from './styles'

// Component
export default function Input({
  name,
  placeholder,
  type,
  label,
  addonLeft: AddonLeft,
  addonRight: AddonRight,
  onAddonLeftClick,
  onAddonRightClick,
  mask,
  invalid,
  message,
  mb,
  ...rest
}) {

  // Jsx
  return (
    <S.Wrapper mb={mb}>
      {label && (<S.Label>{label}</S.Label>)}
      <S.InputGroup>
        {AddonLeft && (
          <S.AddonLeft onClick={onAddonLeftClick}>
            <AddonLeft />
          </S.AddonLeft>
        )}
        <InputMask
          style={{
            paddingLeft: AddonLeft ? 35 : 15,
            paddingRight: AddonRight ? 35 : 15
          }}
          className="sc-custom-input"
          placeholder={placeholder}
          name={name}
          type={type}
          mask={mask}
          {...rest}
        />
        {AddonRight && (
          <S.AddonRight onClick={onAddonRightClick}>
            <AddonRight />
          </S.AddonRight>
        )}
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
Input.defaultProps = {
  name: '',
  placeholder: '',
  type: 'text',
  label: null,
  addonLeft: null,
  addonRight: null,
  mask: null,
  invalid: false,
  message: '',
  onAddonLeftClick: () => {},
  onAddonRightClick: () => {}
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  addonLeft: PropTypes.func,
  addonRight: PropTypes.func,
  mask: PropTypes.string,
  invalid: PropTypes.bool,
  message: PropTypes.string,
  onAddonLeftClick: PropTypes.func,
  onAddonRightClick: PropTypes.func,
  mb: PropTypes.string
}
