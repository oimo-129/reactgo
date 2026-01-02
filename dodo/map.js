//map的使用,数组转化器，遍历
users = [
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
];
names = users.map(
    (user)=>{
        return user.name;
    }
)
//数组上面的方法
//这里有展开运算符
function sum(...nums){
  return nums.reduce((preValue,curValue)=>{
    return preValue+curValue;
  })
}
sum(1,2,3,4,5);//15