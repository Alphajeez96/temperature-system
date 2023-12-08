import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Login from '../../views/LoginView.vue'

describe('Login', () => {
  it('renders properly', () => {
    const wrapper = mount(Login)
    expect(wrapper.text()).toContain('Log In')
  })
})
