function compareArrays(arr1, arr2){
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((value, index) =>{
      console.log(value, arr2[index]);
      return value === arr2[index];
    });
  }

  function getUsersNamesInAgeRange(users, gender){
    let result = users.filter(user => user.gender === gender);
    let result2 = result.map(user => user.age);
    let result3 = result2.reduce((acc, item, index, arr) => {
      acc += item;
      if (index === arr.length - 1) {
        return acc / arr.length;
      } else {
        return acc;
      }
    }, 0);
    return result3;
  }