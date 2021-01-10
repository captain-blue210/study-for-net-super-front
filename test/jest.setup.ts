import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config } from '@vue/test-utils';
import Vue from 'vue';
import noSsrMock from '~/test/mock/NoSsrMock.vue';

library.add(fas);

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);
config.stubs['client-only'] = noSsrMock;
