import './style.scss'
import LinkMenu from './LinkMenu'
import SongsArea from './SongsArea'
export default function(){

    return(
        <>
            <div className="menuArea ">
                <LinkMenu />
                <SongsArea />
            </div>
        </>
    )
}