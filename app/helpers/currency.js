import Helper from '@ember/component/helper';

/*
  Class helpers are useful when the helper logic is fairly complicated,
  requires fine-grained control of the helper lifecycle, or is stateful.
  See https://guides.emberjs.com/release/components/helper-functions/ for more information
*/

// import { helper } from '@ember/component/helper'; // posso usar dessa forma tbm

export default class currency extends Helper {
  compute(params, hash = {}) {
    // {{currency 25}}
    const [number] = params;
    const {
      sign = '$'
    } = hash;
    const dollars = Math.floor(number);
    let cents = Math.floor(number * 100 % 100);

    if (cents.toString().length === 1) {
      cents = '0' + cents;
    }

    return `${sign}${dollars}.${cents}`;
  }
}

// outra forma de escrever o helper
// export default helper(function currency(params, hash = {}){
//     // {{currency 25}}
//     const [number] = params;
//     const {
//       sign = '$'
//     } = hash;
//     const dollars = Math.floor(number);
//     let cents = Math.floor(number * 100 % 100);

//     if (cents.toString().length === 1) {
//       cents = '0' + cents;
//     }

//     return `${sign}${dollars}.${cents}`;
// })
