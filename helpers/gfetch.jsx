import React from 'react'

let obj = [
    {
        "id": "1",
        "nombre": "Hamburguesa con queso",
        "precio": 1000,
        "img": 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar'
    },
    {
        "id": "2",
        "nombre": "Cuarto de libra",
        "precio": 1300,
        "img": 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar'
    },
    {
        "id": "3",
        "nombre": "BigMac",
        "precio": 1500,
        "img": 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar'
    },
    {
        "id": "4",
        "nombre": "McNifica",
        "precio": 1500,
        "img": 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar'
    },
    {
        "id": "5",
        "nombre": "BBQ Smoke",
        "precio": 1600,
        "img": 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kLXkDNvH/200/200/original?country=ar'
    },
    {
        "id": "6",
        "nombre": "Grand Tasty Doble",
        "precio": 1700,
        "img": 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3hBwW/200/200/original?country=ar'
    }
]
export const gFetch = () => {
    return new Promise((resolve, reject) => {
        //acciones 
        const condition = true
        if (condition) {
            setTimeout(() => {
                resolve(obj)
            }, 3000)
        } else {
            reject('error fetch')
        }
    })
}



