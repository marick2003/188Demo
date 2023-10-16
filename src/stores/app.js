import { defineStore } from 'pinia'
import { user } from './user'
export const app = defineStore({
    id: 'app',
    state: () => ({
     
    }),
    actions: {
        init() {
            const User= user();
            User.setUser();
        },
        test(){
         return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('asd'); // Resolving the promise with 'asd' after a delay
            }, 1000);
          });
        },
        async test2(){
            await this.init();
            return 'ok';
        },
        test3(){
          return new  Promise(()=>{


          });
        }
      
    }
  })