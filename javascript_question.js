/*
Using HashMap
Time Complexity O(n)
Space Complexity O(n)
*/
function twoIntegersTargetedSum(integersArr, sum) {
    const integersHashMap = {}; 
    for (let i = 0; i < integersArr.length; i++) {
        const num = integersArr[i];
        const difference = sum - num;
    
        if (integersHashMap.hasOwnProperty(difference)) {
            return [integersHashMap[difference], i];
        }
        integersHashMap[num] = i;
    }
    return [];
  }