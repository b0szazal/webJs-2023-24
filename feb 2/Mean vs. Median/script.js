function meanVsMedian(numbers) {
    let avg=getAverage(numbers);
    let median=getMedian(numbers.sort(function(a, b){return a - b}));
    if(avg==median){
      return "same";
    }
    else if(avg>median){
      return "mean";
    }
    return "median";
  }
  
  function getMedian(nums){
    if(nums.length%2==1){
      return nums[nums.length/2-0.5];
    }
    return ((nums[nums.length/2]+nums[nums.length/2-1])/2);
  }
  
  function getAverage(nums){
    let avg=0;
    for(let i=0; i<nums.length; i++){
      avg+=nums[i];
    }
    return avg/nums.length;
  }