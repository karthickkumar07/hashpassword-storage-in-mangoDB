

const Employee=require('../model/employee');

// method for adding employeee
exports.addEmployee=(req,res)=>{
    const employee=new Employee(req.body);
    employee.save((err,employee)=>{
        if(err || !employee){
            err.status(400).json({
                error:"employee not added"
            })
        }
        return res.json(employee);
    })
   
}