import { Context } from 'egg';

module.exports = () => {
  /** 返回体统一处理 */
  return async function dealRes(ctx: Context, next: () => void) {
    await next();

    const code = ctx.status || 200;
    const data = ctx.response.body || ctx.body;

    if (code !== 200) {
      ctx.body = {
        status: 'error',
        code,
        data,
      };
    } else {
      ctx.body = {
        status: 'success',
        code,
        data,
      };
    }
    ctx.status = code;
  };
};
