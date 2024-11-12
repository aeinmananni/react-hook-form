

export type LoginTyped ={
     userName:string,
     password:string,
     email:string,
     age:number,
     dateofbirthDay:string,
     socialMedia?:{
            twiter?:string
            facbook?:string
     }
     phones?:string[],
     skills?:{hobbise:string}[]
}