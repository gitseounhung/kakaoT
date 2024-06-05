// 아래는 향후, 몽고DB로 바꿀것임 (꼭 잊지말고) ㅋㅋ
const Store = [
    {
      name: '유재석',
      role: 'user',
      email: 'yujaesuk@gmail.com',
      password: '1234',
    },
    {
      name: '강호동',
      role: 'driver',
      email: 'hodong@gmail.com',
      password: '4567',
      availablity: 1,
      position: {
        latitude: 17.38,
        longitude: 78.48,
      },
    },
  ];
  
  export const User = {
    find: async (params) => {
      if (!params) return Store;
    },
  };
  