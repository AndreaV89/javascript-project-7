import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

// Container of all photos
const PhotoList = props => {

    const results = props.data;
    let photos;
    if(results.length > 0) {
        photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`} key={photo.id} />);
    } else {
        photos = <NotFound />
    }

    return(
        <div>
            <h2>{`${props.title} photos`}</h2>
            {  
                (props.loading) 
                ? <h2>Loading...</h2>
                : 
                    <ul>
                        {photos}
                    </ul>     
            }
        </div>
    );
}

export default PhotoList;