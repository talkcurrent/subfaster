import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export function useSwipe(onSwipeLeft, onSwipeRight, rangeOffset = 4) {

    let firstTouch = 0
    
    // set user touch start position
    function onTouchStart(e) {
        firstTouch = e.nativeEvent.pageX
    }

    // when touch ends check for swipe directions
    function onTouchEnd(e){

        // get touch position and screen size
        const positionX = e.nativeEvent.pageX
        const range = windowWidth / rangeOffset

        // check if position is growing positively and has reached specified range
        if(positionX - firstTouch > range){
            onSwipeRight && onSwipeRight()
        }
        // check if position is growing negatively and has reached specified range
        else if(firstTouch - positionX > range){
            onSwipeLeft && onSwipeLeft()
        }
    }

    return {onTouchStart, onTouchEnd};
}

// usage example 
// import { useSwipe } from '../hooks/useSwipe'

// export function ExampleComponent(props) {
//     const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

//     function onSwipeLeft(){
//         console.log('SWIPE_LEFT')
//     }

//     function onSwipeRight(){
//         console.log('SWIPE_RIGHT')
//     }
   
//     return (
//         <ScrollView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
//             {props.children}
//         </ScrollView>
//     );
// }