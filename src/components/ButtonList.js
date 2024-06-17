import React from 'react'
import Button from './Button'

const list = [
    {
        item: "All",
        id: 1,
    },
    {
        item: "Live",
        id: 2
    },
    {
        item: "Gaming",
        id: 3
    },
    {
        item: "Songs",
        id: 4
    },
    {
        item: "Cricket",
        id: 5
    },
    {
        item: "Cooking",
        id: 6
    },
    {
        item: "Music",
        id: 7
    },
    {
        item: "News",
        id: 8
    },
    {
        item: "Bollywood",
        id: 9
    },
];
const ButtonList = () => {

    return (
        <div className='flex'>
            {list.map((items) => {
                return <Button name={items.item} key={items.id} />
            })}
        </div>
    )
}

export default ButtonList