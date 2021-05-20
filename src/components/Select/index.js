// Dependencies
import PropTypes from 'prop-types'
import * as S from './styles'

// Component
export default function Select({
  name,
  placeholder,
  label,
  addonLeft: AddonLeft,
  onAddonLeftClick,
  invalid,
  message,
  mb,
  options,
  labelLeft,
  fit,
  ...rest
}) {

  // Jsx
  return (
    <S.Wrapper mb={mb}>
      {label && (
        labelLeft ? (
          <S.FormLabel>{label}</S.FormLabel>
        ) : (
          <S.Label>{label}</S.Label>
        )
      )}
      <S.InputGroup fit={fit}>
        {AddonLeft && (
          <S.AddonLeft onClick={onAddonLeftClick}>
            <AddonLeft />
          </S.AddonLeft>
        )}
        <S.Input
          style={{
            paddingLeft: AddonLeft ? 35 : 15,
            paddingRight: 15
          }}
          fit={fit}
          placeholder={placeholder}
          name={name}
          {...rest}
        >
          {options.map(({ text, value }, i) => (
            <option key={i} value={value}>
              {text}
            </option>
          ))}
        </S.Input>
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
Select.defaultProps = {
  name: '',
  placeholder: '',
  label: null,
  labelLeft: false,
  addonLeft: null,
  invalid: false,
  message: '',
  onAddonLeftClick: () => {},
  options: [],
  fit: true
}

Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  addonLeft: PropTypes.func,
  invalid: PropTypes.bool,
  message: PropTypes.string,
  onAddonLeftClick: PropTypes.func,
  mb: PropTypes.string,
  fit: PropTypes.bool,
  labelLeft: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.text,
      value: PropTypes.string | PropTypes.number
    })
  )
}
