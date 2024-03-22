import { Nav, NavLink, Row, Col } from "reactstrap"
import CardArtist from "./CardArtist/CardArtist"
import taylorSwiftPic from './CardArtist/img/TaylorSwift.webp'
import ArianaGrandePic from './CardArtist/img/ArianaGrande.webp'
import MariliaMendoncaPic from './CardArtist/img/MariliaMendonça.webp'
import BeyoncePic from './CardArtist/img/Beyoncé.webp'

const artists = [
    {
        index: 1,
        artist_name: 'Taylor Swift',
        src_img: taylorSwiftPic
    },
    {
        index: 2,
        artist_name: 'Ariana Grande',
        src_img: ArianaGrandePic
    },
    {
        index: 3,
        artist_name: 'Marília Mendonça',
        src_img: MariliaMendoncaPic
    },
    {
        index: 4,
        artist_name: 'Beyoncé',
        src_img: BeyoncePic
    }
]
export default function () {
    return (
        <>
            <div className=" ">
                <Nav className=" justify-content-between" >
                    <NavLink className="text-light linkMenuSongList pt-3">
                        <h4>
                            <b>
                                Popular Artists
                            </b>
                        </h4>
                    </NavLink>
                    <NavLink className="text-light linkMenuSongList ">
                        <h6>
                            Show all
                        </h6>
                    </NavLink>
                </Nav>
                <Row className="mx-3  rowArtistsCard ">
                    {artists.map((artist) => (
                        <Col className="p-3 ">
                            <CardArtist artist_name={artist.artist_name} img_src={artist.src_img} key={artist.index} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}