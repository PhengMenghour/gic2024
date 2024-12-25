import Page1_Section1 from '@/components/Page1_Section1.vue'
import Page1_Section2 from '@/components/Page1_Section2.vue'
import Page1_Section3 from '@/components/Page1_Section3.vue'
import Page1_Section4 from '@/components/Page1_Section4.vue'
import Page2_Section1 from '@/components/Page2_Section1.vue'
import Page2_Section2 from '@/components/Page2_Section2.vue'
import Page2_Section3 from '@/components/Page2_Section3.vue'
import Page2_Section4 from '@/components/Page2_Section4.vue'
import Page3_Section1 from '@/components/Page3_Section1.vue'
import Page3_Section2 from '@/components/Page3_Section2.vue'
import Page3_Section3 from '@/components/Page3_Section3.vue'
import Page3_Section4 from '@/components/Page3_Section4.vue'

import Page1View from '@/views/Page1View.vue'
import Page2View from '@/views/Page2View.vue'
import Page3View from '@/views/Page3View.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/page1'

    },
    {
      path: "/page1",
      name: "page1",
      component: Page1View,
      children: [
        {
          path: "/page1/section1",
          component: Page1_Section1
        },
        {
          path: "/page1/section2",
          component: Page1_Section2
        },
        {
          path: "/page1/section3",
          component: Page1_Section3
        },
        {
          path: "/page1/section4",
          component: Page1_Section4
        }
      ]
    },
    {
      path: "/page2",
      name: "page2",
      props: true,
      component: Page2View,
      children: [
        {
          path: "/page2/section1",
          component: Page2_Section1
        },
        {
          path: "/page2/section2",
          component: Page2_Section2
        },
        {
          path: "/page2/section3",
          component: Page2_Section3
        },
        {
          path: "/page2/section4",
          component: Page2_Section4
        }
      ]
    },
    {
      path: "/page3",
      name: "page3",
      component: Page3View,
      children: [
        {
          path: "/page3/section1",
          component: Page3_Section1
        },
        {
          path: "/page3/section2",
          component: Page3_Section2
        },
        {
          path: "/page3/section3",
          component: Page3_Section3
        },
        {
          path: "/page3/section4",
          component: Page3_Section4
        }
      ]
    },
    // {
    //   path: "/page-section",
    //   name: "page-section",
    // },

  ],
})

export default router
