import numbro from 'numbro'

export default value =>
  numbro(value).format({ mantissa: 2, thousandSeparated: true })