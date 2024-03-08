function oddOnesOut(nums) {
    let seenValueAmounts={};
    for(let i=0; i<nums.length; i++){
        if(seenValueAmounts.hasOwnProperty(nums[i])){
            seenValueAmounts[nums[i]]++;
        }
        else{
            seenValueAmounts[nums[i]]=1;
        }
    }
    return nums.filter((num)=>seenValueAmounts[num]%2==0);
}