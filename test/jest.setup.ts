import { config } from '@vue/test-utils';
import noSsrMock from '~/test/mock/NoSsrMock.vue';

config.stubs['client-only'] = noSsrMock;
