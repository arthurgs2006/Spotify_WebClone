import './style.scss'
import LinkMenu from './LinkMenu'
import SongsArea from './SongsArea'
import LinksArea from './LinksArea'
export default function(){

    return(
        <>
            <div className="menuArea ">
                <LinkMenu />
                <SongsArea />
                <LinksArea />
            </div>
        </>
    )
}