import { Card, CardBody, CardSubtitle, CardTitle, Button } from 'reactstrap'


export default function ({ img_src, artist_name }) {
    return (
        <>
            <Card className='songCard p-2'>
                <img src={img_src} alt={`${artist_name} Photo`} />
                <CardBody>
                    <CardTitle>
                        <h6>
                            {artist_name}
                        </h6>
                    </CardTitle>
                    <CardSubtitle className='fs-6'>
                        Artist
                    </CardSubtitle>
                    <Button className='float-right btn-success rounded-circle btn-lg'>
                        <i class="bi bi-play-fill h6"></i>
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}

