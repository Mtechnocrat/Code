let dates =new Date();
console.log(dates); // Current date and time
console.log(dates.toString()); // String representation of the date
console.log(dates.toDateString()); // Date in a human-readable format
console.log(dates.toTimeString()); // Time in a human-readable format
console.log(dates.toISOString()); // Date in ISO format 
console.log(dates.toLocaleString());

let newDate=new Date(2020,8,30);
console.log(newDate);
console.log(newDate.toLocaleString());
console.log(newDate.toDateString());


let timeStamp=Date.now();
console.log(timeStamp);


console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"2-digit"
}))