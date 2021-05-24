import React from 'react'
import Person from './Person'


function NameList() {
    const names = ['Bella', 'Joe', 'Ray', 'Bella']
    const persons = [
        {
            name: 'Bella',
            id: 2,
            skill: 'React'
        },
        {
            name: 'Joe',
            id: 5,
            skill: 'Vue'
        },
        {
            name: 'Ray',
            id: 8,
            skill: 'Angular'
        }

    ]
    const nameList = names.map((name, index) => <h2 key={index}>
                                                    {index} {name}
                                                </h2>) 
//    const personList = persons.map(person => <h2>I am {person.name}. My id is {person.id}. I know {person.skill}.</h2>)
//    const personList = persons.map(person => <Person key={person.skill} personProp={person}/>)
/*
    return (
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>          
        </div>
    )

*/

 return  <div>{nameList}</div>
// return <div>{personList}</div>
}

export default NameList
