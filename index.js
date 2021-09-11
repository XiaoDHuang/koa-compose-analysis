// let stack = [];

// const wait = (timer) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), timer);
//   });
// }

// stack.push(async(context, next) => {
//   console.log(1);
//   await wait(1000);
//   await next();
//   await wait(1000);
//   console.log(6);
// });

// stack.push(async(context, next) => {
//   console.log(2);
//   await wait(1000);
//   await next();
//   await wait(1000);
//   console.log(5);
// });

// stack.push(async(context, next) => {
//   console.log(3);
//   await wait(1000);
//   await next();
//   await wait(1000);
//   console.log(4);
// });

// compose(stack)({});

module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */
function compose(middleware, context) {
  if (!Array.isArray) throw new TypeError('Middleware stack must be an array!');

  for( const fn of middleware) {
    if(typeof fn !== 'function') throw new TypeError('Middleware must be composed of function!');
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
  return function(context, next) {
    let index = -1;
    return dispatch(0);
    
    function dispatch(i) {
      if(i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i;

      let fn = middleware[i]
      if (i >= middleware.length) {
        fn = next;
      }

      if(!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch(err) {
        return Promise.reject(err);
      }
    }
  } 
}