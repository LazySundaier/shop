import request from '@/utils/request'
export const getPicCode = () => {
  return request.get('/captcha/image')
}
