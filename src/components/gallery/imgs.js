import React from 'react';
//imagenes

const imgs = 
[
    {
        img : '/gallery/img/img1.jpg',
        cols : 1,
        rows : 2,
        index : 1
    },
    {
        img : '/gallery/img/img2.jpg',
        cols : 2,
        rows : 2,
        index : 2
    },
    {
        img : '/gallery/img/img3.jpg',
        cols : 1,
        rows : 2,
        index : 3
    },
    {
        img : '/gallery/img/img4.jpg',
        cols : 2,
        rows : 2,
        index : 4
    },
    {
        img : '/gallery/img/img5.jpg',
        cols : 2,
        rows : 2,
        index : 5
    },
    {
        img : '/gallery/img/img6.jpg',
        cols : 1,
        rows : 2,
        index : 6
    },
    {
        img : '/gallery/img/img7.jpg',
        cols : 1,
        rows : 2,
        index : 7
    },
    {
        img : '/gallery/img/img8.jpg',
        cols : 1,
        rows : 2,
        index : 8
    },
    {
        img : '/gallery/img/img9.jpg',
        cols : 1,
        rows : 2,
        index : 9
    },
    {
        img : '/gallery/img/img10.jpg',
        cols : 2,
        rows : 2,
        index : 10
    },
    {
        img : '/gallery/img/img11.jpg',
        cols : 1,
        rows : 2,
        index : 11
    },
    {
        img : '/gallery/img/img12.jpg',
        cols : 1,
        rows : 2,
        index : 12
    },
    {
        img : '/gallery/img/img13.jpg',
        cols : 2,
        rows : 2,
        index : 13
    },
    {
        img : '/gallery/img/img41.jpg',
        cols : 3,
        rows : 2,
        index : 14
    },
    {
        img : '/gallery/img/img15.jpg',
        cols : 1,
        rows : 2,
        index : 15
    },
    {
        img : '/gallery/img/img16.jpg',
        cols : 2,
        rows : 2,
        index : 16
    },
    {
        img : '/gallery/img/img17.jpg',
        cols : 1,
        rows : 2,
        index : 17
    },
    {
        img : '/gallery/img/img18.jpg',
        cols : 1,
        rows : 2,
        index : 18
    },
    {
        img : '/gallery/img/img19.jpg',
        cols : 1,
        rows : 2,
        index : 19
    },
    {
        img : '/gallery/img/img20.jpg',
        cols : 3,
        rows : 2,
        index : 20
    },
    {
        img : '/gallery/img/img21.jpg',
        cols : 2,
        rows : 2,
        index : 21
    },
    {
        img : '/gallery/img/img22.jpg',
        cols : 1,
        rows : 2,
        index : 22
    },
    {
        img : '/gallery/img/img23.jpg',
        cols : 2,
        rows : 2,
        index : 23
    },
    {
        img : '/gallery/img/img24.jpg',
        cols : 1,
        rows : 2,
        index : 24
    },
    {
        img : '/gallery/img/img25.jpg',
        cols : 1,
        rows : 2,
        index : 25
    },
    {
        img : '/gallery/img/img26.jpg',
        cols : 1,
        rows : 2,
        index : 26
    },
    {
        img : '/gallery/img/img27.jpg',
        cols : 2,
        rows : 2,
        index : 27
    },
    {
        img : '/gallery/img/img28.jpg',
        cols : 1,
        rows : 2,
        index : 28
    },
    {
        img : '/gallery/img/img29.jpg',
        cols : 2,
        rows : 2,
        index : 29
    },
    {
        img : '/gallery/img/img30.jpg',
        cols : 2,
        rows : 2,
        index : 30
    },
    {
        img : '/gallery/img/img31.jpg',
        cols : 1,
        rows : 2,
        index : 31
    },
    {
        img : '/gallery/img/img33.jpg',
        cols : 2,
        rows : 2,
        index : 33
    },
    {
        img : '/gallery/img/img32.jpg',
        cols : 3,
        rows : 2,
        index : 32
    },
    {
        img : '/gallery/img/img34.jpg',
        cols : 2,
        rows : 2,
        index : 34
    },
    {
        img : '/gallery/img/img35.jpg',
        cols : 2,
        rows : 2,
        index : 35
    },
    {
        img : '/gallery/img/img36.jpg',
        cols : 1,
        rows : 2,
        index : 36
    },
    {
        img : '/gallery/img/img37.jpg',
        cols : 3,
        rows : 2,
        index : 37
    },
    {
        img : '/gallery/img/img38.jpg',
        cols : 2,
        rows : 2,
        index : 38
    },
    {
        img : '/gallery/img/img39.jpg',
        cols : 3,
        rows : 2,
        index : 39
    },
    {
        img : '/gallery/img/img40.jpg',
        cols : 1,
        rows : 2,
        index : 40
    },
    {
        img : '/gallery/img/img41.jpg',
        cols : 1,
        rows : 2,
        index : 41
    },
    {
        img : '/gallery/img/img42.jpg',
        cols : 3,
        rows : 2,
        index : 42
    },
    {
        img : '/gallery/img/img43.jpg',
        cols : 3,
        rows : 2,
        index : 43
    },
    {
        img : '/gallery/img/img44.jpg',
        cols : 2,
        rows : 2,
        index : 44
    },
    {
        img : '/gallery/img/img45.jpg',
        cols : 2,
        rows : 2,
        index : 45
    },
    {
        img : '/gallery/img/img46.jpg',
        cols : 2,
        rows : 2,
        index : 46
    },
    {
        img : '/gallery/img/img47.jpg',
        cols : 2,
        rows : 2,
        index : 47
    },
    {
        img : '/gallery/img/img48.jpg',
        cols : 2,
        rows : 2,
        index : 48
    },
    {
        img : '/gallery/img/img49.jpg',
        cols : 3,
        rows : 2,
        index : 49
    },
    {
        img : '/gallery/img/img50.jpg',
        cols : 1,
        rows : 2,
        index : 50
    },
    {
        img : '/gallery/img/img51.jpg',
        cols : 2,
        rows : 2,
        index : 51
    },
    {
        img : '/gallery/img/img52.jpg',
        cols : 2,
        rows : 2,
        index : 52
    },
    {
        img : '/gallery/img/img53.jpg',
        cols : 1,
        rows : 2,
        index : 53
    },
    {
        img : '/gallery/img/img54.jpg',
        cols : 2,
        rows : 2,
        index : 54
    },
    {
        img : '/gallery/img/img55.jpg',
        cols : 3,
        rows : 2,
        index : 55
    },
    {
        img : '/gallery/img/img56.jpg',
        cols : 3,
        rows : 2,
        index : 56
    },
    {
        img : '/gallery/img/img57.jpg',
        cols : 2,
        rows : 2,
        index : 57
    },
    {
        img : '/gallery/img/img58.jpg',
        cols : 3,
        rows : 2,
        index : 58
    },
    {
        img : '/gallery/img/img59.jpg',
        cols : 3,
        rows : 2,
        index : 59
    },
]


export default imgs;
