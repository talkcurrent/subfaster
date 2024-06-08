export default function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]"
    //   return Boolean(o1) && (o1.constructor === Object);
}