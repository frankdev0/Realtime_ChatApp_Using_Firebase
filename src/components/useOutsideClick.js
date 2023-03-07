import { useRef, useState, useEffect } from 'react';

const UseOutsideClick = (initialValue) => {
    const ref = useRef(null);
    const [chosenEmoji, setChosenEmoji] = useState(initialValue);

    const handleClickOutside = (event) => {
        console.log(ref);
        if (ref.current && !ref.current.contains(event.target)) setChosenEmoji(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [ref]);

    return { chosenEmoji, setChosenEmoji, ref }
}

export default UseOutsideClick;