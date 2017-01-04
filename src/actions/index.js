import { FETCH_USERS } from './types';

export function fetchUsers() {
  console.log('are you there? fetchUsers!!');
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Jane' },
      { name: 'Alex' },
      { name: 'Jim' }
    ]
  };
}
