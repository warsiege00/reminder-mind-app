import { useSession } from "@/contexts/AuthCtx"
import { Slot as ExpoSlot} from 'expo-router';

export const Slot = () => {
    const { session } = useSession()

    console.log('Slot: ' + session)

    // if(session){
    //     return <ExpoSlot initialRouteName={'/(app)'} />
    // }

    return(
        <ExpoSlot initialRouteName={'/(app)'} /> 
    )
}