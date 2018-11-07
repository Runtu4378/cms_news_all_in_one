import moduleExtend from 'dva-model-extend'
import { model } from '../utils/model'

export default moduleExtend(model, {
  namespace: 'app',

  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
  },

  reducers: {},
})
