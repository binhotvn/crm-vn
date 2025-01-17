import { createDocumentResource } from 'frappe-ui'
import { reactive, ref } from 'vue'

const settings = ref({})
const brand = reactive({})

export function getSettings() {
  createDocumentResource({
    doctype: 'FCRM Settings',
    name: 'FCRM Settings',
    onSuccess: (data) => {
      settings.value = data
      brand.name = settings.value?.brand_name
      brand.logo = settings.value?.brand_logo
      brand.favicon = settings.value?.favicon
      return data
    },
  })

  return {
    settings,
    brand,
  }
}
