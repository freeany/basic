/**
 * 为了能够在对象中安全的取值， 需要验证对象中每一个键的存在性，常见的处理方法有:
 *    1. 通过短路与运算符进行可访问性嗅探
 *    obj.user && obj.user.posts && obj.user.posts[0] && obj.user.posts[0].comments
 *    2. 通过短路或设置单元默认保底值
 *    (((obj.user || {}).posts || {})[0] || {}).comments
 *    3. 使用try catch
 *      let result
 *      try {
 *         result = obj.user.posts[0].comments
 *      }catch() {
 *          return = null
 *       }
 *     4. loadsh 的 get API
 *     5. es2020的可选链运算符
 *        obj?.user?.posts?.[0]?.comments
 */

const obj = {
	user: {
		posts: [{ comments: 900 }]
	}
}
console.log(obj?.user?.posts?.[0]?.comments)
