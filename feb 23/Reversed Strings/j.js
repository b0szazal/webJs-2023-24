function solution(str){
    return str.split('').reverse().toString().replace(/[,]/g, "")
  }

console.log(solution("word"));