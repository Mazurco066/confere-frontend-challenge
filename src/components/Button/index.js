// Dependencies
import PropTypes from 'prop-types'
import * as S from './styles'

// Component
export default function Button({
  disabled,
  icon: Icon,
  text,
  status,
  type,
  mb,
  ...rest
}) {

  // Jsx
  return (
    <S.Button mb={mb} type={type} status={status} disabled={disabled} {...rest}>
      {Icon && <Icon />} {text}
    </S.Button>
  )
}

// Prop Types
Button.defaultProps = {
  disabled: false,
  text: '',
  icon: null,
  status: 'primary',
  type: 'button',
  mb: 0
}

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.func,
  status: PropTypes.string,
  type: PropTypes.string,
  mb: PropTypes.number
}