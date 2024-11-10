

export type LoginTyped ={
     userName:string,
     password:string,
     email:string
     socialMedia?:{
            twiter?:string
            facbook?:string
     }
     phones?:string[],
     skills?:{hobbise:string}[]
}