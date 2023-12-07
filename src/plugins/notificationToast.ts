import { ElNotification } from 'element-plus'
import 'element-plus/dist/index.css'
import ToastError from '@/components/Icons/ToastError.vue'
import ToastSuccess from '@/components/Icons/ToastSuccess.vue'

const $toast = {
  success(message: string, title = 'Success') {
    ElNotification({
      title,
      message,
      customClass: 'success',
      icon: ToastSuccess
    })
  },

  error(message: string, title: string = 'Error') {
    ElNotification({
      title,
      message,
      customClass: 'error',
      icon: ToastError
    })
  }
}

export default $toast
