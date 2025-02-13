var student = {
    f_name: 'Himanshu',
    l_name: 'chaudhari',
    skill: 'python',
    isActive: true,
    age: 22,
    getuserinfo: function(role){
        return `The name of student is ${this.f_name} ${this.l_name}. He is ${this.age} years old. He is expert in ${this.skill}. His role is ${role}.`;
    },
}

console.log(student.getuserinfo("Super admin")); // The name of student is Himanshu chaudhari. He is 22 years old. He is expert in python.