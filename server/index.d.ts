import 'egg-mongoose'
import { DefaultConfig } from './config/config.default';

// Controller
import ItemController from './app/controller/item'

// Model
import ItemModel from './app/model/item';

// Service

declare module 'egg' {
  export interface Application {
    config: EggAppConfig & DefaultConfig;
  }

  export interface IController {
    item: ItemController;
  }

  export interface Context {
    model: {
      item: Model<ItemModel, {}>;
    }
  }

  export interface IService {
  }
}
