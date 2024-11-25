import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';



function Loading({isLoading}) {

    return (
        <>
            {isLoading &&(
                <h2>
                    Loading <FontAwesomeIcon icon={faGear} />
                </h2>
            )}
            {!isLoading && <h2>Loading end</h2>}
        </>
    );
}

export default Loading;

