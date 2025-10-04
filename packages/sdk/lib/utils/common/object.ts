/**
 * 将对象source的值深度遍历赋值给target对象相同key
 * @param target
 * @param source
 */
export function deepAssign(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
                if (!target[key]){
                    target[key] = {};
                }
                deepAssign(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
}