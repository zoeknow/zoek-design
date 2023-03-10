
import { test, it, expect, beforeAll } from "vitest"
import { mount } from '@vue/test-utils'
import ZdPagination from './zd-pagination.vue'
import { vuetify } from '@/plugins/vuetify'

beforeAll(() => {
  global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
  }
})

test('Pagination', async () => {
  expect(ZdPagination).toBeTruthy()

  const wrapper = mount(ZdPagination, {
    global: {
      plugins: [vuetify],
    },
    props: {
      count: 0,
      visible: 5,
      page: 4,
      pageSize: 9,
      totalCount: 50
    },
  })

  it('should to match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should contain the correct text', () => {
    expect(wrapper.text()).toContain('第 28 - 36，共 50 筆結果')
  })

  it('should display the correct page action button', () => {
    expect(wrapper.text()).toContain('1...3456')
  })
})
