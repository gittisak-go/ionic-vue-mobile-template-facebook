import { mount } from '@vue/test-utils'
import Timeline from '../../src/views/Timeline.vue'
import { describe, expect, test } from 'vitest'

describe('Timeline.vue', () => {
  test('renders logo text', () => {
    const wrapper = mount(Timeline, { global: { stubs: ['ion-icon', 'ion-button', 'ion-buttons', 'ion-header', 'ion-toolbar', 'ion-page', 'ion-content', 'ion-grid', 'ion-row', 'ion-col', 'ion-card', 'ion-card-header', 'ion-modal', 'ion-input', 'ion-list', 'ion-item', 'ion-label'] } })
    expect(wrapper.html()).toMatch('แม้วง่วง')
  })
})
