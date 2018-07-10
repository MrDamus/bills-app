export const selectValue = (payload) => ({
  type: 'SELECT_VALUE',
  payload
})

export const selectType = (payload) => ({
  type: 'SELECT_TYPE',
  payload
})

export default {
  selectValue,
  selectType,
}