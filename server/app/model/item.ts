import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ItemSchema = new Schema({
    name: { type: String },
    desc: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
  });

  return mongoose.model('Item', ItemSchema);
}
