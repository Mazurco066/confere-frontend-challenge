// Dependencies
import PropTypes from 'prop-types'

// Styles
import * as S from './styles'

// Components
import { MdClose } from 'react-icons/md'

// Component
export default function ModalHeader({ onBackPress, title }) {

  // JSX
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.IconWrapper onClick={onBackPress}>
          <MdClose />
        </S.IconWrapper>
      </S.Wrapper>
    </>
  )
}

// Prop Types
ModalHeader.defaultProps = {
  onBackPress: () => {},
  title: 'Title'
}

ModalHeader.propTypes = {
  onBackPress: PropTypes.func,
  title: PropTypes.string
}