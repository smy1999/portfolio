import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'portfolio-storage',
  access: (allow) => ({
    'data/*': [
      allow.guest.to(['read']),
    ]
  })
});