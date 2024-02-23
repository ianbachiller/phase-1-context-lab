/* Your Code Here */

//1
function createEmployeeRecord(employee){
    const [firstName, familyName, title, payPerHour] = employee
    const employeeRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}

//2
function createEmployeeRecords(employeesArray){
    return employeesArray.map((employee)=> createEmployeeRecord(employee))
}

//3 
function createTimeInEvent(dateStamp){
    const hour = dateStamp.slice(11,15)
    const date = dateStamp.slice(0,10)
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

//4
function createTimeOutEvent(dateStamp){
    // console.log(this)
    const hour = dateStamp.slice(11,15)
    const date = dateStamp.slice(0,10)
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

//5
function hoursWorkedOnDate(dateWorked){
    const timeIn = this.timeInEvents.find((timeIn) => timeIn.date === dateWorked)
    const timeOut = this.timeOutEvents.find((timeOut) => timeOut.date === dateWorked)
    return (timeOut.hour - timeIn.hour)/100
}

//6
function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    // console.log(hoursWorked)
    let pay = this.payPerHour
    let wage = hoursWorked * pay
    return wage
}

//7
function findEmployeeByFirstName(srcArray, firstNamee){
    for(let obj of srcArray){
        if(obj.firstName === firstNamee){
            return obj
        }
    }
}

//8

function calculatePayroll(employeeRecords) {
    let grandTotal = 0;

    employeeRecords.forEach((empRec) => {
        let dailyTotal = allWagesFor.call(empRec); // Use call to set the context for allWagesFor
        grandTotal += dailyTotal;
    });
    return grandTotal;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

