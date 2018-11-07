import moduleExtend from 'dva-model-extend'
import { model } from '../utils/model'

export default moduleExtend(model, {
  namespace: 'app',

  state: {
    itemList: [
      {
        _id: 0,
        name: 'newsIndex',
        desc: '首页新闻',
      },
      {
        _id: 1,
        name: 'newsMedia',
        desc: '媒体新闻',
      },
    ],
    itemSelect: {},
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
  },

  reducers: {},
})
